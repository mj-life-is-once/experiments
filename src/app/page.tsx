import fsPromises from "fs/promises";
import path from "path";
import c from "./page.module.css";
import TreeNav from "@/components/TreeNav";
import { TreeNode } from "@/type/types";

const getExperimentsData = async () => {
  // process.cwd() is the current working directory
  const filePath = path.join(process.cwd(), "./src/files/flare-2.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const experimentsData = JSON.parse(jsonData);

  return experimentsData;
};

const Home = async () => {
  const experimentData = getExperimentsData() as Promise<TreeNode>;
  const promiseData = await Promise.resolve(experimentData);

  return (
    <main className={c.main}>
      <TreeNav data={promiseData}></TreeNav>
    </main>
  );
};

export default Home;
