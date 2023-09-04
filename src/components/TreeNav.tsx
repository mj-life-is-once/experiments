"use client";
import c from "./TreeNav.module.scss";
import * as d3 from "d3";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { TreeNode } from "@/type/types";
import { SimulationNodeDatum } from "d3";
import { SimulationLinkDatum } from "d3";

const width = 1200;
const height = 600;

const TreeNav = ({ data }: { data: TreeNode }) => {
  const [dimension, setDimension] = useState({ w: width, h: height });
  const [tree, setTree] = useState(data);
  const ref = useRef<SVGSVGElement>(null);

  //console.log(data);

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

  const update = useCallback(
    (
      root: d3.HierarchyNode<TreeNode>,
      links: d3.HierarchyLink<TreeNode>[]
    ) => {},
    []
  );
  const flatten = useCallback((root: TreeNode) => {
    let nodes: TreeNode[] = [],
      i = 0;

    const recurse = (node: any) => {
      if (node.children) node.children.forEach(recurse);
      if (!node.id) node.id = ++i;
      nodes.push(node);
    };
    recurse(root);
    return nodes;
  }, []);

  useEffect(() => {
    const root = d3.hierarchy(tree);
    const links = root.links();
    const nodes = root.descendants();

    const simulation = d3
      .forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force(
        "link",
        d3
          .forceLink(links as SimulationLinkDatum<SimulationNodeDatum>[])
          .id((d: any) => d.id)
          .distance(0)
          .strength(1)
      )
      .force("charge", d3.forceManyBody().strength(-50))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const svg = d3.select(ref.current!);

    // Append links.
    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    // Append nodes.
    const node = svg
      .append("g")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", (d: any) => (d.children ? null : "#000"))
      .attr("stroke", (d: any) => (d.children ? null : "#fff"))
      .attr("r", 3.5)
      .call(drag(simulation) as any);

    node.append("title").text((d: any) => d.data.name);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
    });
  }, [drag, tree]);
  return (
    <div className={c.svgContainer}>
      <svg
        ref={ref}
        width={dimension.w}
        height={dimension.h}
        viewBox={`${-dimension.w / 2} ${-dimension.h / 2} ${dimension.w} ${
          dimension.h
        }`}
        className={c.svgComponent}
      ></svg>
    </div>
  );
};

export default TreeNav;
