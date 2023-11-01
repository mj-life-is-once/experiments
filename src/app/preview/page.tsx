import fsPromises from "fs/promises";
import path from "path";
import c from "./page.module.scss";
import PreviewTreeNav from "@/components/_ui/PreviewTree";

import { TreeNode } from "@/type/types";

const getExperimentsData = async () => {
  // process.cwd() is the current working directory
  const filePath = path.join(process.cwd(), "./src/store/menus.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const experimentsData = JSON.parse(jsonData);

  return experimentsData;
};

const Home = async () => {
  const experimentData = getExperimentsData() as Promise<TreeNode>;
  const promiseData = await Promise.resolve(experimentData);

  return (
    <main className={c.main}>
      <PreviewTreeNav data={promiseData}></PreviewTreeNav>
    </main>
  );
};

export default Home;
