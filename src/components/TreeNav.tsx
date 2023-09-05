"use client";
import c from "./TreeNav.module.scss";
import * as d3 from "d3";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { TreeNode } from "@/type/types";
import { SimulationNodeDatum } from "d3";
import { SimulationLinkDatum } from "d3";

const width = 1200;
const height = 600;

const mainDistance = 60;
const subDistance = 40;
const chargeStrength = -1000;
const linkStrength = 0.2;

// source : https://observablehq.com/@d3/force-directed-tree?intent=fork

const TreeNav = ({ data }: { data: TreeNode }) => {
  const [dimension, setDimension] = useState({ w: width, h: height });
  const [root, setRoot] = useState(d3.hierarchy(data));
  const [links, setLinks] = useState(root.links());
  const [nodes, setNodes] = useState(root.descendants());

  const linesRef = useRef<SVGGElement>(null);
  const nodesRef = useRef<SVGGElement>(null);

  const drag = useCallback(
    (simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) => {
      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    },
    []
  );

  const update = useCallback(() => {
    const simulation = d3
      .forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force(
        "link",
        d3
          .forceLink(links as SimulationLinkDatum<SimulationNodeDatum>[])
          .id((d: any) => d.id)
          .distance(mainDistance * 1.05)
          .strength(linkStrength)
      )
      .force("charge", d3.forceManyBody().strength(chargeStrength))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    //console.log(link);
    const link = d3
      .select(linesRef.current!)
      .selectAll("line")
      .data(links)
      .join("line");

    // remove old nodes
    d3.select(nodesRef.current!).selectAll("circle").remove();

    const node = d3
      .select(nodesRef.current!)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", (d: d3.HierarchyNode<TreeNode>) =>
        d.children ? null : "#2f9e9c"
      )
      .attr("stroke", (d: d3.HierarchyNode<TreeNode>) =>
        d.children ? null : "#ffffff"
      )
      .attr("r", (d: d3.HierarchyNode<TreeNode>) =>
        d.children ? mainDistance : subDistance
      )
      .on("click", (event: any, d: any) => {
        if (!event.defaultPrevented) {
          //console.log(d.children);
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }

          setLinks(root.links());
          setNodes(root.descendants());
        }
      })

      .call(drag(simulation) as any);

    node.append("title").text((d: any) => d.data.name);
    node.append("text").text((d: any) => d.data.name);

    // Exit any old nodes.
    node.exit().remove();

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
    });
  }, [drag, links, nodes, root]);

  useEffect(() => {
    // console.log(links);
  }, [links, nodes]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div className={c.svgContainer}>
      <svg
        width={dimension.w}
        height={dimension.h}
        viewBox={`${-dimension.w / 2} ${-dimension.h / 2} ${dimension.w} ${
          dimension.h
        }`}
        className={c.svgComponent}
      >
        <g ref={linesRef} style={{ stroke: "#999", strokeOpacity: 0.6 }}>
          {/* {links.map((link, index) => (
            <line
              key={index}
              x1={(link.source as any).x}
              y1={(link.source as any).y}
              x2={(link.target as any).x}
              y2={(link.target as any).y}
            />
          ))} */}
        </g>
        <g ref={nodesRef} style={{ fill: "#797979", stroke: "#fff" }}></g>
      </svg>
    </div>
  );
};

export default TreeNav;
