import { orator } from "@/styles/fonts";
import CodeBlock from "@/components/_ui/CodeBlock";
import TextBlock from "@/components/_ui/TextBlock";
import ImageBlock from "@/components/_ui/ImageBlock";
import Quote from "@/components/_ui/Quote";
import MagentaSystem from "@/svg/ml/brain_system.svg";
import VMSystem from "@/svg/ml/vm_system.svg";
import Image from "next/image";
import Link from "next/link";

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
    contents: [
      {
        content: (
          <>
            <TextBlock>
              <h1>Content Coming Soon :)</h1>
            </TextBlock>

            <ImageBlock type="img">
              <Image
                src="https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg"
                alt="coming soon"
                width={800}
                height={600}
              />
            </ImageBlock>
          </>
        ),
      },
    ],
  },
  musicGeneration: {
    intro: {
      category: "Machine Learning",
      title: <h1>Deploy Magenta ML model in Google Cloud Platform</h1>,
      description: (
        <p>
          I would like to introduce my exploration journey to improve my old{" "}
          <span>
            <a href="https://www.minjoocho.com/projects/a1?category=artistic">
              Brain Piano
            </a>
          </span>{" "}
          project in a modern architecture stack utilizing{" "}
          <span className="highlight">Google Cloud Platform.</span>
        </p>
      ),
      backLink: { title: "Back to Experiments", href: "/" },
      tags: ["GCP", "docker", "react"],
    },
    contents: [
      {
        content: (
          <>
            <TextBlock>
              <h1>1. Brain Piano backends in Modern Architecture</h1>
              <p>
                After gaining more knowledge on the cloud infrastructure-based
                micro-services architecture, I wanted to regain life for the{" "}
                <span>
                  <a href="https://www.minjoocho.com/projects/a1?category=artistic">
                    Brain Piano Project
                  </a>
                </span>
                . In 2019, I carried two laptops to run the demo - one to run a
                compiled version of Magenta code and another to run client-side
                javascript code - with limited knowledge of ML deployment.
              </p>
              <ul>
                Here are criteria of the new service
                <li>
                  The server must be{" "}
                  <span className="highlight">remotely hosted</span>
                </li>
                <li>
                  The server must be{" "}
                  <span className="highlight">publicly accessible</span>
                </li>
              </ul>
            </TextBlock>
            <ImageBlock
              type="svg"
              caption={
                <p>
                  Fig 1. Brain Piano backend hosted a pre-trained ML model
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
                suggest testing the model with the Colab environment due to the
                specific software(OS, Python environment) dependencies.
              </p>
              <Quote>
                <h4>What is Magenta?</h4>
                <p>
                  Magenta is an open source research project introduced by
                  Google Brain team in 2017, exploring the role of machine
                  learning as a tool in the creative process.
                </p>
              </Quote>
              <p>
                However, Colab executes codes in a runtime environment, which is
                unsuitable for my use case. Moreover, I found that the docker
                environment, which used to be introduced as an alternative
                installation method, is moved from their official documentation.
              </p>
            </TextBlock>
          </>
        ),
      },
      {
        content: (
          <>
            <TextBlock>
              <h1>3. Dockerization of Magenta</h1>
              <p>
                Thankfully, I came across{" "}
                <span>
                  <a href="https://github.com/xychelsea/magenta-docker">
                    this amazing repo
                  </a>
                </span>{" "}
                by xychelsea who recreated Magenta docker-environment. This is
                my version of{" "}
                <span className="highlight">docker-compose.yml</span> file to
                get it work with MacOS(Ventura 13.5.1, M1).
              </p>
              <CodeBlock
                language="yaml"
                code={`
# docker-compose.yml file
version: "3.7"

networks:
  default:
    driver: bridge

services:
  portainer:
    image: portainer/portainer-ce:latest
    ports:
      - "9000:9000"
    restart: always
    volumes:
      - portainer-data:/data
      - /var/run/docker.sock:/var/run/docker.sock
  magenta:
    platform: linux/amd64
    image: xychelsea/magenta:latest-jupyter
    container_name: magenta
    restart: always
    ports:
      - "8888:8888"
    volumes:
      - ./volume/magenta:/usr/local/magenta/workspace
volumes:
  portainer-data:
`}
              />
              <Quote>
                <h4>Portainer</h4>
                <p>
                  <span>
                    <a href="https://www.portainer.io/">Portainer</a>
                  </span>{" "}
                  is a GUI for docker management, and it is a dockerized webapp
                  itself.
                </p>
              </Quote>
              <Quote>
                <h4>Platform tag</h4>
                <p>
                  I added the platform flag that allows for specific platform
                  <span style={{ fontWeight: "bold" }}>(linux/amd62)</span>{" "}
                </p>
              </Quote>
            </TextBlock>
          </>
        ),
      },
      {
        content: (
          <>
            <TextBlock>
              <h1>4. Deploy Code in GCP</h1>
              <p>
                I decided to deploy the code to the GCP free instance(e2-micro)
                to create the publicly accessible server.
              </p>
              <p>
                To receive the command from the front-end and deliver the
                message to the dockerized magenta code, I created a simple{" "}
                <span className="highlight">FlaskAPI server.</span>
              </p>
              <p>
                The generated midi file from the magenta is then uploaded to{" "}
                <span className="highlight">Google Drive</span> to share
                input/output files with the front-end. The diagram below
                summarizes what is happening inside the GCP instance.
              </p>
              <ImageBlock
                type="svg"
                caption="Fig2. System Diagram inside the GCP instance"
              >
                <VMSystem />
              </ImageBlock>
              <Quote>
                <h4>e2-micro Specs</h4>
                <p>
                  <span>
                    <a href="https://www.portainer.io/">Portainer</a>
                  </span>{" "}
                  is a GUI for docker management, and it is a dockerized webapp
                  itself.
                </p>
              </Quote>
              <Quote>
                <h4>Platform tag</h4>
                <p>
                  I added the platform flag that allows for specific platform
                  <span style={{ fontWeight: "bold" }}>(linux/amd62)</span>{" "}
                </p>
              </Quote>
              <p>
                This time, I will not cover the specific steps to deploy the
                docker container to the GCP instance. Instead, I recommend
                reading{" "}
                <span>
                  <a href="https://towardsdatascience.com/how-to-deploy-docker-containers-to-the-cloud-b4d89b2c6c31">
                    this article
                  </a>
                </span>{" "}
                to follow through with the details.
              </p>
            </TextBlock>
          </>
        ),
      },
      {
        content: (
          <>
            <TextBlock>
              <h1>5. Result</h1>
              <p>
                The picture below shows the public webpage deployed to the GCP
                instance. This swagger UI webpage shows the HTTP endpoints of
                Flask API.
              </p>
              <ImageBlock type="img">
                <Image
                  src="/img/ml/generation/backend.jpg"
                  alt="result"
                  width={800}
                  height={600}
                />
              </ImageBlock>
              <p>
                When receiving HTTP GET request in /generate endpoint, the
                backend server generates classical music in the style of Bach
                with the melody line provided.
              </p>
              <Quote>
                <h4>Music Archive (Google Drive)</h4>
                <p>
                  Open{" "}
                  <span>
                    <a href="https://drive.google.com/drive/folders/1DczeASlw9bvxW7nvOMQZ3RdJcBg96GmQ?usp=sharing">
                      this link
                    </a>
                  </span>{" "}
                  to listen to check the generated music{" "}
                </p>
              </Quote>
              <p>
                However, music generation process is extremely slow - it took
                around <span className="highlight"> 30 seconds</span>
                to generate the 10 seconds of music, and it is due to the
                <span className="highlight">
                  limited hardware specification
                </span>{" "}
                of the free GCP instance.(2 vCPU | RAM 1024 MiB | Storage 10Gb
                Standard (Non-SSD))
              </p>
              <p>
                I started to search better options to host the ML service, this
                journey will be covered in{" "}
                <Link href="/blog/huggingface">the next post</Link>.
              </p>
              <Quote>
                <h4>Source Code</h4>
                <p>
                  Detailed instruction and source code can be found from my{" "}
                  <span>
                    <a href="https://github.com/mj-life-is-once/magenta-docker">
                      github repo
                    </a>
                    .
                  </span>
                </p>
              </Quote>
            </TextBlock>
          </>
        ),
      },
    ],
  },
};
