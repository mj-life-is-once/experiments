import fsPromises from "fs/promises";
import path from "path";
import c from "./page.module.scss";
import TreeNav from "@/components/_ui/TreeNav";
import Intro from "@/components/_ui/Intro";
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
      <div className={c.titleBlock}>
        <Intro
          title={
            <h1>
              Minjoo&#x27;s Experiment
              <div style={{ color: "#ffbf00" }}>(WIP)</div>
            </h1>
          }
          description={
            <p>
              This is (going to be) showcasing Minjoo&#x27;s various technical
              experiments. Click on the{" "}
              <span style={{ fontWeight: "bold" }}>BLACK</span> nodes to read
              the post.
            </p>
          }
          backLink={{ title: "Back to Home", href: "http://minjoocho.com" }}
        />
      </div>
      <TreeNav data={promiseData}></TreeNav>
    </main>
  );
};

export default Home;
