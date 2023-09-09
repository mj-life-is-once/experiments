import { orator } from "@/styles/fonts";
import CodeBlock from "@/components/_ui/CodeBlock";
import TextBlock from "@/components/_ui/TextBlock";
import ImageBlock from "@/components/_ui/ImageBlock";
import Quote from "@/components/_ui/Quote";
import MagentaSystem from "@/svg/brain_system.svg";

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
            <TextBlock>
              <h1>1. Brain Piano backends in Modern Architecture</h1>
              <p>
                After gaining more knowledge on the cloud infrastructure based
                micro-services architecture, I wanted to regain life to the{" "}
                <span>
                  <a href="https://www.minjoocho.com/projects/a1?category=artistic">
                    Brain Piano Project
                  </a>
                </span>{" "}
                Back in 2019, I carried two laptops to run the demo - one to run
                compiled version of Magenta code, and another to run client side
                javascript code - with the limited knowledge in the ML
                deployment.
              </p>
            </TextBlock>
            <ImageBlock
              caption={
                <p>
                  Fig 1. Brain Piano backend hosted pre-trained ML model
                  (PolyphonyRNN) in a local server.
                </p>
              }
            >
              <MagentaSystem />
            </ImageBlock>
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            <TextBlock>
              <h1>2. Unexpected Challenge</h1>
              <p>
                {" "}
                The most recent{" "}
                <span>
                  <a href="https://github.com/magenta/magenta/blob/main/README.md">
                    Magenta Repo
                  </a>
                </span>{" "}
                suggest testing the model with Colab environment due to the
                specific software(OS, python environment) dependencies.
              </p>
            </TextBlock>

            <Quote>
              <h4>What is Magenta?</h4>
              <p style={{ margin: "0" }}>
                Magenta is an open source research project exploring the role of
                machine learning as a tool in the creative process.
              </p>
            </Quote>
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
