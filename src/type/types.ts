export interface TreeNode {
  [key: string]: any; // type for unknown keys.
  children?: TreeNode[]; // type for a known property.
}

export type d3Node = {
  id: string;
  group: number;
};

export type d3Link = {
  source: string;
  target: string;
  value: number;
};

export type Graph = {
  nodes: d3Node[];
  links: d3Link[];
};

export type Content = { content: any };
