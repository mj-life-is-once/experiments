"use client";
import c from "./TreeNav.module.scss";
import * as d3 from "d3";
import { SimulationNodeDatum } from "d3";
import { SimulationLinkDatum } from "d3";

import { useEffect, useState, useRef, useCallback } from "react";
import { TreeNode } from "@/type/types";
import { useMediaQuery } from "@/hook/useMediaQuery";
import { useRouter } from "next/navigation";
const width = 1200;
const height = 600;

const rootDistance = 100;
const mainDistance = 90;
const subDistance = 70;
const chargeStrength = -2000;
const linkStrength = 0.1;

// source : https://observablehq.com/@d3/force-directed-tree?intent=fork
const allowedPosts = [
  "/huggingface",
  "/musicGeneration",
  "/scatterplots",
  "/nextMqtt",
];

const TreeNav = ({ data }: { data: TreeNode }) => {
  const router = useRouter();
  const [dimension, setDimension] = useState({ w: width, h: height });
  const [root, setRoot] = useState(d3.hierarchy(data));
  const [links, setLinks] = useState(root.links());
  const [nodes, setNodes] = useState(root.descendants());

  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGGElement>(null);
  const nodesRef = useRef<SVGGElement>(null);

  const isPageMobile = useMediaQuery("(max-width: 576px)");

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
    const link = d3.select(linesRef.current!).selectAll("line").data(links);
    const node = d3.select(nodesRef.current!).selectAll("circle").data(nodes);
    const text = d3.select(nodesRef.current!).selectAll("text").data(nodes);

    node
      .on("click", (event: any, d: any) => {
        if (!event.defaultPrevented) {
          //console.log(d.children);
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            if (d._children) {
              d.children = d._children;
            } else {
              if (
                allowedPosts.includes(d.data.path) &&
                !d.data.hasOwnProperty("external")
              ) {
                router.push(`/blog${d.data.path}`);
              }
              if (
                allowedPosts.includes(d.data.path) &&
                d.data.hasOwnProperty("external")
              ) {
                window.open(d.data.external, "_parent");
              }
            }

            d._children = null;
          }

          setLinks(root.links());
          setNodes(root.descendants());
        }
      })
      .call(drag(simulation) as any);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
      text.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
    });
  }, [drag, links, nodes, root, router]);

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        w: containerRef.current?.offsetWidth as number,
        h: containerRef.current?.offsetHeight as number,
      });
    };
  }, []);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div className={c.svgContainer} ref={containerRef}>
      <svg
        width={dimension.w}
        height={dimension.h}
        viewBox={`${-dimension.w / 2} ${-dimension.h / 2} ${dimension.w} ${
          dimension.h
        }`}
        className={c.svgComponent}
      >
        <linearGradient id="highlight-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#0401b0" />
          <stop offset="100%" stopColor="#5a0096" />
        </linearGradient>
        <g
          ref={linesRef}
          style={{ stroke: "#1a1a1a", strokeOpacity: 0.8, strokeWidth: "1px" }}
        >
          {links.map((link, index) => (
            <line
              key={index}
              x1={(link.source as any).x}
              y1={(link.source as any).y}
              x2={(link.target as any).x}
              y2={(link.target as any).y}
            />
          ))}
        </g>

        <g ref={nodesRef} style={{ fill: "#cfcfcf", stroke: "#fff" }}>
          {nodes.map((node, index) => {
            const fillCircleColor = (node: any) => {
              if (node.parent === null) return "#ffffff";
              if (node.children) return "url(#highlight-gradient)";
              if (allowedPosts.includes(node.data.path)) {
                //console.log("included");
                return "#1e1e1e";
              }
            };

            const radius = (node: any) => {
              if (node.parent === null) return rootDistance;
              if (node.children) return mainDistance;
              else return subDistance;
            };

            const strokeCircleColor = (node: any) => {
              if (node.parent === null) return "#737373";
              if (node.children) return "#ffffff";
            };

            return (
              <g key={`${node.data.name}_${index}`}>
                <circle
                  fill={fillCircleColor(node)}
                  stroke={strokeCircleColor(node)}
                  r={radius(node)}
                  cx={(node as any).x}
                  cy={(node as any).y}
                >
                  <title>{node.data.name}</title>
                </circle>

                <text
                  className={c.text}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize={isPageMobile ? "1.5rem" : "1rem"}
                  x={(node as any).x}
                  y={(node as any).y}
                  fill={node.parent === null ? "#000" : "#ffffff"}
                  stroke="none"
                >
                  {node.data.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default TreeNav;
