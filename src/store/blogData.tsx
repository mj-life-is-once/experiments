import { orator } from "@/styles/fonts";
import CodeBlock from "@/components/_ui/CodeBlock";

interface BlogData {
  [key: string]: any; // type for unknown keys.
}

export const BLOGS: BlogData = {
  huggingface: {
    intro: {
      category: "Machine Learning",
      title: <h1>Develop ML Webapp with Huggingface APIS</h1>,
      description: (
        <p>
          Through this experience, I explored the possibility of huggingface as
          a backend for hosting ML engines to create
        </p>
      ),

      backLink: { title: "Back to Experiments", href: "/" },
      tags: ["huggingface", "python", "react"],
    },
  },
  musicGeneration: {
    intro: {
      category: "Machine Learning",
      title: <h1>Deploy Magenta ML model in Google Cloud Platform</h1>,
      description: (
        <p>
          I would like to introduce my exploration journey to redesign old
          project{" "}
          <span>
            <a href="https://www.minjoocho.com/projects/a1?category=artistic">
              Brain Piano
            </a>
          </span>{" "}
          in a modern architecture stack utilising{" "}
          <span className="highlight">Google Cloud Platform</span>.
        </p>
      ),
      backLink: { title: "Back to Experiments", href: "/" },
      tags: ["GCP", "docker", "react"],
    },
    contents: [
      {
        type: "text",
        content: (
          <>
            <h1>1. Give new architecture to the old ML project</h1>
            <p>
              After gaining more knowledge on the cloud infrastructure based
              micro-services architecture, I wanted to regain life to the{" "}
              <span>
                <a href="https://www.minjoocho.com/projects/a1?category=artistic">
                  Brain Piano Project
                </a>
              </span>{" "}
            </p>
            <p>Paragrah 2</p>
          </>
        ),
      },
      { type: "image", content: <></> },
      {
        type: "code",
        content: (
          <CodeBlock
            language="python"
            code={`
import os, sys

def foo():
return True
`}
          />
        ),
      },
    ],
  },
};
