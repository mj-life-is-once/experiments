import CodeBlock from "@/components/_ui/CodeBlock";
import TextBlock from "@/components/_ui/TextBlock";
import ImageBlock from "@/components/_ui/ImageBlock";
import Quote from "@/components/_ui/Quote";
import MagentaSystem from "@/svg/ml/brain_system.svg";
import YoutubeEmbed from "@/components/_ui/YoutubeEmbed";
import VMSystem from "@/svg/ml/vm_system.svg";
import HuggingLayout from "@/svg/ml/hugging_layout.svg";
import MQTTCube from "@/svg/iot/mqtt/mqtt-cube.svg";
import D3Canvas from "@/svg/data_viz/d3_canvas.svg";
import Image from "next/image";
import Link from "next/link";
import IFrame from "@/components/_ui/IFrame";
import MediaPlayer from "@/components/_ui/MediaPlayer";
import { Button } from "@/components/_ui/Button";
import {
  CollapsibleItem,
  CollapsibleList,
} from "@/components/_ui/CollapsibleList";
interface BlogData {
  [key: string]: any; // type for unknown keys.
}

export const BLOGS: BlogData = {
  huggingface: {
    intro: {
      category: "Machine Learning",
      title: <h1>Develop ML Webapp with Hugging Face APIs</h1>,
      description: (
        <p>
          Through this experience, I explored the possibility of{" "}
          <span className="highlight">hugging Face</span> as a backendAPI for
          hosting multiple ML engines to create multimodal experience.
        </p>
      ),
      backLink: { title: "Back to Experiments", href: "/" },
      tags: ["huggingface", "python", "transformer", "gradio"],
      postedTime: "2023-09-18",
    },
    contents: [
      {
        content: (
          <>
            <TextBlock>
              <h1>1. What is Hugging Face 🤗</h1>
              <p>
                <span>
                  <a href="https://huggingface.co/">Huggingface</a>
                </span>{" "}
                is undoubtedly one of the most influential AI startup companies
                you often hear the name of. The backers of Huggingface include
                Google, Amazon, Nvidia, Salesforce, AMD, Intel, IBM and
                Qualcomm, and releasing the newest ML model through their
                platform has become a tradition in the AI industry, from Big
                Corps to small-sized companies.
              </p>
              <Quote>
                <ul>
                  <h4>More Resources</h4>
                  <li>
                    <p>
                      1. News: <br />
                      <span>
                        <a href="https://techfundingnews.com/hugging-face-github-for-ai-raises-235m-from-nvidia-amazon-and-other-tech-giants/">
                          Hugging face, GitHub for AI, raises $235M from Nvidia,
                          Amazon and other tech giants
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      2. Youtube video: <br />
                      <span>
                        <a href="https://www.youtube.com/watch?v=v800ToFbLRk">
                          HuggingFace - An AI community with Machine Learning,
                          Datasets, Models and More
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </Quote>
            </TextBlock>
            <TextBlock>
              <h1>2. Hugging Face Hub Overview</h1>
              <p>
                Some describe Huggingspace as a "Github" for the AI community.
                If that is true, what makes Huggingface shine more than Github?
                To understand this, you need to look into three concepts -
                Models, Datasets and Spaces.
              </p>
              <ul>
                <li>
                  <span className="highlight">Model Hub</span> : The Model Hub
                  is where the members of the Hugging Face community can host
                  all of their models.
                </li>
                <li>
                  <span className="highlight">Dataset Hub</span> : Hugging Face
                  Hub hosts a large number of community-curated datasets, and
                  each dataset is a Git repository.
                </li>
                <li>
                  <span className="highlight">Space Hub</span> : This is the
                  core differentiator of Hugging Face from other development
                  hubs. Hugging Face provides intuitive libraries (ML and GUI)
                  and infrastructure to showcase the use case of the engine. It
                  uses Git under the hood.
                </li>
              </ul>
              <Quote>
                <h4>Resource</h4>
                <span>
                  1.{" "}
                  <a href="https://huggingface.co/docs/hub/index">
                    Hugging Face Hub documentation
                  </a>
                </span>
              </Quote>
            </TextBlock>
            <TextBlock>
              <h1>3. What do I want to Build</h1>
              <p>
                As I mentioned above, the beauty of Hugging Face is in the Space
                Hub, where they put much effort into abstracting the complex
                technical layers in ML with their{" "}
                <span>
                  <a href="https://github.com/huggingface/transformers">
                    Transformer
                  </a>
                </span>{" "}
                library and provide pre-configured infrastructure to deploy
                experiences and share with the broader community quickly.
              </p>
              <p>
                Let&apos;s explore Hugging Face Hub by creating an example
                experience. As I was on my tech journey to revive my old project
                <span>
                  <a href="https://www.minjoocho.com/projects/a1?category=artistic">
                    (Brain Piano)
                  </a>
                </span>
                , I wanted to create something that had an audio output in the
                end. So, I jotted down my fast-prototyping strategy as below.
              </p>
              <ul>
                <li>
                  The output of the experience will be the music audio file.
                </li>
                <li>
                  I want a multimodal experience - Having other multimedia as an
                  input.
                </li>
              </ul>
              <p>
                After much research, I decided to use two ML models in the Data
                Hub with ChatGPT and weave them together to create a piece of
                music as described below.
              </p>
              <ImageBlock type="svg" caption="Fig1. ML Model flow">
                <HuggingLayout style={{ height: "600px" }} />
              </ImageBlock>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://huggingface.co/Salesforce/blip-image-captioning-large">
                      Image to Text Model -
                      Salesforce/blip-image-captioning-large
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    2.{" "}
                    <a href="https://python.langchain.com/docs/integrations/tools/chatgpt_plugins">
                      ChatGPI Plugins - Langchain
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    3.{" "}
                    <a href="https://huggingface.co/facebook/musicgen-small">
                      Music Generator Model - Facebook
                    </a>
                  </span>
                </p>
              </Quote>
            </TextBlock>
            <TextBlock>
              <h1>4. How to Hugging Face</h1>
              <p>
                After creating the account, click on the &quot;+ New Space&quot;
                button to create a space.
              </p>
              <ImageBlock type="img">
                <Image
                  src="/img/ml/huggingface/create_space_1.jpg"
                  alt="create_space_1"
                  width={800}
                  height={600}
                />
              </ImageBlock>
              <p>
                Name the project, and select &quot;Gradio&quot; development
                environment. <span className="highlight">Gradio</span> is an
                open-source Python package that allows developers to create
                customized UI for ML models effortlessly and quickly. Moreover,
                I was fascinated by the feature that automatically generates API
                endpoints and the web interface.
              </p>
              <ImageBlock type="img">
                <Image
                  src="/img/ml/huggingface/create_space_2.jpg"
                  alt="create_space_1"
                  width={800}
                  height={600}
                />
              </ImageBlock>
              <p>
                After creating the Space, you will be instructed to clone the
                repository to your local environment with familiar git commands.
                You can later push to the main to deploy to the Space by{" "}
                <span>
                  <a href="https://huggingface.co/docs/hub/security-git-ssh">
                    setting SSH credentials
                  </a>
                </span>
                .
              </p>
              <ImageBlock type="img">
                <Image
                  src="/img/ml/huggingface/create_space_3.jpg"
                  alt="create_space_1"
                  width={800}
                  height={600}
                />
              </ImageBlock>
            </TextBlock>
            <TextBlock>
              <h1>5. Develop App</h1>
              <p>
                The image below shows the minimal files that need to be included
                in the project folder and their functions.{" "}
                <span className="highlight">requirements.txt</span> is where you
                need to include Python dependencies and{" "}
                <span className="highlight">packages.txt</span> to list your
                Debian dependencies. <span className="highlight">app.py</span>{" "}
                will be the entry point to your program.
              </p>
              <CodeBlock
                language="python"
                code={`
# File Structure
.
├── requirements.txt # Python dependencies
├── packages.txt # Debian dependencies
└── app.py # Our main code
`}
              />
              <p>
                Now, let&apos;s write the app code. We import the Transformer
                library to download the pre-trained ML engine hosted in Hugging
                Face Hub and predict the result locally. You can easily find the
                instructions to import ML models using the Transformer from this{" "}
                <span>
                  <a href="https://huggingface.co/tasks">task page</a>.
                </span>
              </p>
              <CodeBlock
                language="python"
                code={`
import scipy
from datasets import load_dataset
from langchain.chains import LLMChain
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from transformers import AutoProcessor, MusicgenForConditionalGeneration, pipeline


# Step 1: Image to Text 
def imageToText(url):
    image_to_text = pipeline(
        "image-to-text", model="Salesforce/blip-image-captioning-large"
    )
    text = image_to_text(url)
    return text[0]["generated_text"]


# Step 2: Generate Story from ChatGPT 
def storyGeneratorGPT(user_input):
    template = """
    You are a music story teller;
    You can suggest music that suits the scenario;
    The suggested music should include the genre of the music as well as the style where it is inpired from;
    The suggestion should be no more than 20 words.
    
    CONTEXT: {scenario}
    STORY:
    """

    prompt = PromptTemplate(template=template, input_variables=["scenario"])
    prompt.format(scenario=user_input)
    story_chain = LLMChain(
        llm=OpenAI(model_name="gpt-3.5-turbo", temperature=1),
        prompt=prompt,
        verbose=True,
    )
    story = story_chain.run(user_input)
    # print(story)
    return story

# Step 3: Generate Music based on the description
def generate(text):
    print("generate..")
    print(text)
    processor = AutoProcessor.from_pretrained("facebook/musicgen-small")
    model = MusicgenForConditionalGeneration.from_pretrained("facebook/musicgen-small")
    inputs = processor(
        # audio=load_input(),
        text=[text],
        padding=True,
        return_tensors="pt",
    )

    audio_values = model.generate(**inputs, max_new_tokens=256)  # 256
    sampling_rate = model.config.audio_encoder.sampling_rate
    resultFile = "musicgen_out.wav"
    scipy.io.wavfile.write(
        resultFile,
        rate=sampling_rate,
        data=audio_values[0, 0].numpy(),
    )
    return resultFile
`}
              />
              <p>
                Next step is to cascade three ML functions with Gradio UIs. You
                will see how simple it is to connect the codes and generate a
                decent interface here by calling{" "}
                <span className="highlight">gr.Series</span> function, we can
                connect the inputs and outputs of the ML functions like a LEGO
                block. The task is as simple as returning the values in the
                correct formats.
              </p>
              <CodeBlock
                language="python"
                code={`
import gradio as gr

# ML functions above are defined here ...

series_1 = gr.Interface(
    fn=imageToText,
    inputs="pil",
    outputs="text",
    examples=["beatles.png"],
)
series_2 = gr.Interface(fn=storyGeneratorGPT, inputs="text", outputs="text")
series_3 = gr.Interface(fn=generate, inputs="text", outputs="video")
demo = gr.Series(series_1, series_2, series_3)
`}
              />
              <p>
                After writing the code, I uploaded the code to the Space. Then,
                after a while, you will find this fantastic interface. Please
                find the complete code from{" "}
                <span>
                  <a href="https://github.com/mj-life-is-once/huggingface_musicgen">
                    here
                  </a>
                </span>
                .
              </p>
              <Quote>
                <h4>Resource</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://huggingface.co/docs/transformers/index">
                      Hugging Face Transformer documentation
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    2.{" "}
                    <a href="https://www.gradio.app/docs/interface">
                      Gradio documentation
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    3.{" "}
                    <a href="https://youtu.be/_j7JEDWuqLE?si=0NESRneREWWSFQ1g">
                      Hugging Face + Langchain in 5 mins by AI Jason
                    </a>
                  </span>
                </p>
              </Quote>
            </TextBlock>
            <TextBlock>
              <h1>6. Final Result</h1>
              <p>
                I was not able to make the Space public due to the OpenAPI
                request limits. Nonetheless, I left the working screen records
                and the output music below to get the flavour of the interface
                that has been created.
              </p>
              <YoutubeEmbed embedId="m9zf5A4vTBg" />
              <MediaPlayer
                type="audio"
                src="/media/huggingface/musicgen_out.wav"
                label="Generated Music"
              />
              <p>
                I also included the link to the public Space where I put example
                prompts to Facebook&apos;s MusicGen (with optional melody
                input). Please note that it will take around 2-3 minutes to
                generate 5 seconds of music with the free-tier plan.
              </p>{" "}
              <IFrame
                src="https://minjoolisacho87-musicgen-fb.hf.space"
                title="Music Generator"
                showButton={true}
              />
              <p>
                On the very bottom of the embedded interface, there is{" "}
                <span className="highlight">Use via API</span> button that you
                can click to see the exposed API endpoints.
              </p>
            </TextBlock>
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
      tags: ["GCP", "docker", "SwaggerUI", "Flask"],
      postedTime: "2023-09-15",
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
                  to listen to the generated music pieces{" "}
                </p>
              </Quote>
              <p>
                However, music generation process is extremely slow - it took
                around <span className="highlight"> 30 seconds</span> to
                generate the 10 seconds of music, and it is due to the{" "}
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
  scatterplots: {
    intro: {
      category: "Data Visualisation",
      title: <h1>Scatter plots with D3.js and D3FC.js</h1>,
      description: (
        <p>
          I explored various way of drawing scattered plots in D3.js depending
          on the size of datapoints.
        </p>
      ),
      backLink: { title: "Back to Experiments", href: "/" },
      tags: ["D3.js", "webgl", "Typescript", "React.js"],
      postedTime: "2023-09-25",
    },
    contents: [
      {
        content: (
          <>
            <TextBlock>
              <h1>1. What is D3.js</h1>
              <p>
                D3.js is a widely-used open-source javascript library made for
                data visualisation. It provides a low-level toolbox developers
                can easily combine to create a custom data visualisation. There
                are lots of{" "}
                <span>
                  <a href="https://github.com/xychelsea/magenta-docker">
                    community-provided examples
                  </a>
                </span>{" "}
                available in Observable, and it was primarily written in Vanila
                javascript and is not easily translatable in React with ease.
              </p>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://d3js.org/what-is-d3">
                      D3.js official documentation
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    2.{" "}
                    <a href="https://observablehq.com/@d3/gallery">
                      D3 examples in Observable
                    </a>
                  </span>
                </p>
              </Quote>
              <h1>2. React with D3.js</h1>
              <p>
                Combining D3.js with React has been a tricky job due to the
                different rendering schemes both libraries provide. After
                reading{" "}
                <span>
                  <a href="https://2019.wattenberger.com/blog/react-and-d3">
                    Amelia Wattenberger's post
                  </a>
                </span>{" "}
                about the tips to Reactise D3.js, I decided to implement a
                scattered plot in React (with NextJS13) on my own to face and
                understand the difficulty through the actual experience.
              </p>
              <Quote>
                <h4>More Read</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://2019.wattenberger.com/blog/react-and-d3">
                      React and D3 by Amelia Watterberger
                    </a>
                  </span>
                </p>
              </Quote>
              <h1>3. Different number of data, different strategy</h1>
              <p>
                While implementing scatter plots, I realised different technical
                approaches are taken to visualise data with varying numbers of
                data points. D3 charts utilise SVG, a retained mode graphical
                model that is easier but performance-limited, to render the data
                with up to 10k data points.
              </p>
              <p>
                However, as the number of data increases upto 10k, it is
                recommended to render charts using Canvas, which is an immediate
                mode graphical model.
              </p>
              <p>
                However, as the number of data increases to 10k, it is
                recommended to render charts using Canvas, an immediate-mode
                graphical model. When the number of data points increases to 1M,
                it is better to use WebGL, which provides Javascript API to use
                GPU-accelerated graphics. Thankfully, I found{" "}
                <span>
                  {" "}
                  <a href="https://blog.scottlogic.com/2020/05/01/rendering-one-million-points-with-d3.html">
                    this great blog post by Colin Eberhardt
                  </a>
                </span>{" "}
                that showcases how to integrate{" "}
                <span>
                  <a href="https://d3fc.io/">D3FC library</a>
                </span>{" "}
                - a library that enables chart creation with D3 using WebGL.
              </p>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://blog.scottlogic.com/2020/05/01/rendering-one-million-points-with-d3.html">
                      Rendering One Million Datapoints with D3 and WebGL
                    </a>
                  </span>
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
              <h1>4. Implementation</h1>
              <p>
                I created two example charts that manifests above two strategies
                when the number of data points exceeds 1K. For each chart, I
                made the chart zoomable and selectable by adopting{" "}
                <span>
                  <a href="https://observablehq.com/@d3/quadtree-findincircle?collection=@d3/d3-quadtree">
                    D3 Quadtree search.
                  </a>
                </span>
              </p>
              <IFrame
                className="bg-white"
                src="https://observablehq.com/embed/@d3/animated-quadtree?cells=chart"
                title="D3 quadtree"
                showButton={false}
              />
              <p>
                You may visit the full demo page or get the full code from the
                links below.
              </p>
              <Button
                className="mr-5 bg-yellow-400 shadow-md"
                onClick={() => {
                  window.open("https://scatter-plot-pi.vercel.app/", "_parent");
                }}
              >
                Visit Demo Page
              </Button>
              <Button
                className="bg-yellow-400 shadow-md mb-10"
                onClick={() => {
                  window.open("https://scatter-plot-pi.vercel.app/", "_parent");
                }}
              >
                Full Github Code
              </Button>
              <h2 className="text-2xl py-5 font-bold">
                4.1. D3 with Canvas (~10k datapoints)
              </h2>
              <p>
                To implement the example, I used the conventional SVG to draw X
                and Y domains and overlayed two canvases on top. One canvas is
                to remove the datapoints, and another one to highlight the
                selected datapoints.{" "}
              </p>
              <ImageBlock type="svg" caption="Fig1. D3 with Canvas">
                <D3Canvas style={{ height: "600px" }} />
              </ImageBlock>
              <p>
                When integrating D3 with React, the easies route you can take is
                to implement all the code in a single useEffect() hook.
              </p>
              <p>
                In her blog, Amelia Wattenberger suggests more React-friendly
                way of refactoring D3 code in her{" "}
                <span>
                  <a href="https://2019.wattenberger.com/blog/react-and-d3">
                    blog post.
                  </a>
                </span>
              </p>
              <p>
                It is fully upto you to take your preferred strategy depending
                on the circumstances you're in, but I tried my best to reduce
                the code in useEffect() by using other hooks(useRef, useMemo,
                useCallback)
              </p>

              <IFrame
                title="canvas"
                src="https://scatter-plot-pi.vercel.app/canvas"
                showButton={true}
              />
              <Quote>
                <h4>More Read</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/">
                      Using D3.js with React: An 8 step comprehensive manual
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    2.{" "}
                    <a href="https://2019.wattenberger.com/blog/react-and-d3">
                      React and D3 by Amelia Wattenberger
                    </a>
                  </span>
                </p>
              </Quote>
              <h2 className="text-2xl pt-5 font-bold">
                4.2. D3FC with D3 (~1M datapoints)
              </h2>
              <p>
                The dataset used in this example is{" "}
                <span>
                  <a href="http://creatingdata.us/datasets/hathi-features/">
                    Hathi Trust Library Dataset
                  </a>
                </span>{" "}
                created by Ben Schmidt, and it is the collection of digital
                library data, which includes the published year, language and
                author information.
              </p>
              <p>
                The data is exposed at the endpoint
                <span className="highlight">/data.tsv </span> in tsv format and
                streamed by a web worker and you can find the full worker code I
                wrote from{" "}
                <span>
                  <a href="https://github.com/mj-life-is-once/scatter-plot/blob/main/src/app/helper/streamingTSVParser.ts">
                    here.
                  </a>
                </span>
              </p>
              <p>
                The loaded data is saved as a state variable in React (defined
                as "bigData" state in the code), and is bound with the quadTree
                object and d3 annotation object(data label to show when hovered)
                to be rendered in the WebGL canvas.
              </p>
              <p>
                Please note again that the example is a reimplementation of{" "}
                <span>
                  <a href="https://colineberhardt.github.io/d3fc-webgl-hathi-explorer/">
                    Colin Eberhardt's example
                  </a>
                </span>{" "}
                in React + Typescript.
              </p>
              <IFrame
                title="webgl"
                src="https://scatter-plot-pi.vercel.app/webgl"
                showButton={true}
              />
            </TextBlock>
            <Quote>
              <h4>Resources</h4>
              <p>
                <span>
                  1.{" "}
                  <a href="https://d3-annotation.susielu.com/">
                    D3 annotation library by Susie Lu
                  </a>
                </span>
              </p>
            </Quote>
          </>
        ),
      },
      {
        content: (
          <>
            <TextBlock>
              <h1>5. Key Takeaway</h1>
              <p>
                When integrating D3 with React, I faced several difficulties and
                I wrote this down so that people reading this blog won't make
                similar mistakes.
              </p>
              <ul>
                <li>
                  <h4 className="text-xl font-bold">
                    1. Make the best use of useRef() hook
                  </h4>
                  <p>
                    It would help if you had to make the best use of useRef()
                    hook and try to reference the DOM when the first useEffect()
                    is called.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-bold">
                    2. Be aware of React's hook lifecycle.
                  </h4>
                  <p>
                    To reduce the repetitive redefinition of the variables or
                    functions, I used lots of useMemo() or useCallback() hook.
                    However, it sometimes causes errors caused by the different
                    order the hooks are called in React's lifecycle.
                  </p>
                  <ImageBlock type="img" caption="Fig3. React Lifecycle">
                    <Image
                      src="https://raw.githubusercontent.com/Wavez/react-hooks-lifecycle/master/screenshot.jpg"
                      alt="React lifecycle"
                      width={800}
                      height={600}
                    />
                  </ImageBlock>
                </li>
              </ul>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://github.com/Wavez/react-hooks-lifecycle">
                      React Hooks Lifecycle Diagram
                    </a>
                  </span>
                </p>
              </Quote>
            </TextBlock>
          </>
        ),
      },
    ],
  },
  nextMqtt: {
    intro: {
      category: "IoT",
      title: <h1>Control Web Components via MQTT protocol</h1>,
      description: (
        <p>
          I explored MQTT.js library that allows web application to communicate
          with the wireless IoT devices.
        </p>
      ),
      backLink: { title: "Back to Experiments", href: "/" },
      tags: ["MQTT.js", "ReactJS", "NextJS", "ESP8266"],
      postedTime: "2023-10-10",
    },
    contents: [
      {
        content: (
          <>
            <TextBlock>
              <h1>1. What is MQTT</h1>
              <p>
                There are a number of communication protocols we all are
                familiar with regarding web development - Websocket, HTTP, etc.{" "}
                <span className="highlight">MQTT</span> is a lightweight
                pub/sub-based protocol that is most widely used in IoT world.
              </p>
              <p>
                Nowadays, MQTT is adopted as the most widely used protocol by
                mainstream IoT services (GCP, AWS.. and many more) to connect
                millions of devices to the internet.
              </p>
              <ImageBlock
                type="img"
                caption="Resource: https://www.twilio.com/blog/what-is-mqtt"
              >
                <Image
                  src="https://assets.cdn.prod.twilio.com/images/MQTT_Diagram_gOmDdU4.width-800.png"
                  alt="MQTT protocol"
                  width={800}
                  height={600}
                />
              </ImageBlock>
              <h1>2. Why is MQTT so popular?</h1>
              <p>
                Out of various reasons that make MQTT so attractive to IoT
                development, I would like to introduce a few of them.
              </p>
              <CollapsibleList>
                <CollapsibleItem title="Lightweight and efficient">
                  <div className="pb-3 text-md">
                    MQTT clients are very small, require minimal resources so
                    can be used on small microcontrollers.
                  </div>
                </CollapsibleItem>
                <CollapsibleItem title="Bi-directional communications">
                  <div className="pb-3 text-md">
                    MQTT allows for messaging between device to cloud and cloud
                    to device. This makes for easy broadcasting messages to
                    groups of things.
                  </div>
                </CollapsibleItem>
                <CollapsibleItem title="Scale to milions of devices">
                  <div className="pb-3 text-md">
                    MQTT can scale to connect with millions of IoT devices.
                  </div>
                </CollapsibleItem>
                <CollapsibleItem title="Support for Unreliable Networks">
                  <div className="pb-3 text-md">
                    Many IoT devices connect over unreliable cellular networks.
                    MQTT's support for persistent sessions reduces the time to
                    reconnect the client with the broker.
                  </div>
                </CollapsibleItem>
              </CollapsibleList>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://mqtt.org/">MQTT official documengtation</a>
                  </span>
                </p>
                <p>
                  <span>
                    2.{" "}
                    <a href="https://www.hivemq.com/mqtt/">MQTT Essentials</a>
                  </span>
                </p>
              </Quote>
              <h1>3. MQTT over websocket</h1>
              <p>
                MQTT uses TCP connection for the reliability purpose - assured
                delivery and packet checking. However, websocket that was
                created to allow{" "}
                <span className="highlight">two-way communication</span> in the
                web environment retricts normal TCP connection for security
                reasons. [from HiveMQ blog]
              </p>
              <p>
                Still, WebSocket behaves in a similar way that TCP operates, and
                it is possible to run{" "}
                <span className="highlight">MQTT over Websockets</span>.
              </p>
              <p>
                If you use Mosquitto MQTT broker as I used in my example, you
                can enable Websocket by changing the configuration file as
                below. The following line allows MQTT over Websockets on the{" "}
                <span className="highlight">port 9001</span>.
              </p>
              <CodeBlock
                className="mb-5"
                language="bash"
                code={`
# mosquitto.conf
...

listener 9001
protocol websockets

...
`}
              />
              <Quote>
                <h4>More Read</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://www.hivemq.com/article/understanding-the-differences-between-mqtt-and-websockets-for-iot/">
                      Understanding the Differences between MQTT and WebSockets
                      for IoT
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    2.{" "}
                    <a href="https://mosquitto.org/documentation/">
                      Eclipse Mosquitto Documentation.
                    </a>
                  </span>
                </p>
              </Quote>
              <h1>4. React with MQTT</h1>
              <p>
                <a href="https://www.emqx.io/">Emqx</a>, an open-source MQTT
                broker solutions company, provides lots of useful code examples
                to connect to MQTT server. Based on their React example, I
                decided to create an easy-to-use tool in{" "}
                <span className="highlight">NextJs13 + Typescript</span>.
              </p>
              <p>
                Below is the snippets of the demo page in action. I will go
                through some of the implementation details for people who are
                interested.
              </p>
              <p>
                Please find the full code from{" "}
                <span>
                  <a href="https://observablehq.com/@d3/quadtree-findincircle?collection=@d3/d3-quadtree">
                    this project repository
                  </a>
                </span>
              </p>
              <ImageBlock type="img" caption="Image 1. MQTT NextJS Demo">
                <Image
                  src="/img/IoT/mqtt-next/demo.gif"
                  alt="React lifecycle"
                  width={800}
                  height={600}
                />
              </ImageBlock>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://github.com/emqx/MQTT-Client-Examples">
                      Various MQTT Client code examples by Emqx
                    </a>
                  </span>
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
              <h1>5. Implementation</h1>
              <p>
                MQTT client connection status is shared as{" "}
                <span className="highlight">a context</span> as the code below.
                A number of MQTT functions, as well as the variables containing
                mqtt connection status, are shared as a context as a React
                context provider.
              </p>
              <CodeBlock
                className="mb-5"
                language="typescript"
                code={`
import * as mqtt from "mqtt";

const MQTTContext = createContext<any>(null);

export const MQTTProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState<any>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [payload, setPayload] = useState({});
  const [connectionStatus, setConnectionStatus] = useState("disconnected");

  ...


  const value = useMemo(
    () => ({
      client,
      connectionStatus,
      payload,
      isSubscribed,
      mqttConnect,
      mqttDisconnect,
      mqttPublish,
      mqttSubscribe,
      mqttUnSubscribe,
      qosOptions,
    }),
    [
      client,
      connectionStatus,
      payload,
      isSubscribed,
      mqttConnect,
      mqttDisconnect,
      mqttPublish,
      mqttSubscribe,
      mqttUnSubscribe,
      qosOptions,
    ]
  );

  return <MQTTContext.Provider value={value}>{children}</MQTTContext.Provider>;
  }, []);
`}
              />
              <p>
                The codes are largely divided into four parts - Connector,
                subscriber, publisher and receiver.{" "}
              </p>
              <p>
                The detailed usage of each function is implemented under{" "}
                <span className="highlight">
                  <a href="https://github.com/mj-life-is-once/NextJS-mqtt/tree/main/next-app/src/components/MQTTConnector">
                    src/components/MQTTConnector,
                  </a>
                </span>{" "}
                as React components.
              </p>
              <CollapsibleList>
                <CollapsibleItem
                  title="Connect to MQTT Broker"
                  width="max-w-full"
                  open={false}
                >
                  {
                    <>
                      <p>
                        <span className="bg-yellow-300/50">mqttConnect</span>{" "}
                        connects to the mqtt broker under the provided URL and
                        option. The option contains extra information regarding
                        broker connection, including connection credentials. The
                        complete list of configurable options is available{" "}
                        <a href="https://github.com/mqttjs/mqtt-packet#connect">
                          here
                        </a>
                      </p>
                      <p>
                        The connected client is then shared as a status value in
                        the code, and the connection change is mainly handled in
                        useEffect hook.
                      </p>
                      <CodeBlock
                        className="mb-5"
                        language="typescript"
                        code={`
// src/contexts/MQTTProvider.tsx
const [client, setClient] = useState<any>(null);

const mqttConnect = useCallback((host: string, mqttOption: any) => {
  setConnectionStatus("connecting");
  setClient(mqtt.connect(host, mqttOption));
}, []);

const mqttDisconnect = useCallback(() => {
  if (client) {
    client.end();
    setConnectionStatus("disconnected");
  }
}, [client]);

// detect client status change
useEffect(() => {
  if (client) {
    client.on("connect", () => {
      setConnectionStatus("connected");
    });
    client.on("error", (err: any) => {
      console.error("Connection error: ", err);
      client.end();
    });
    client.on("reconnect", () => {
      setConnectionStatus("reconnecting");
    });
  }
}, [client]);

`}
                      />
                    </>
                  }
                </CollapsibleItem>
                <CollapsibleItem
                  title="Subscribe to topics"
                  width="max-w-full"
                  open={false}
                >
                  {
                    <>
                      <p>
                        As mentioned earlier in the post, MQTT protocol is
                        sub/pub-based protocol, and the broker only delivers the
                        message to the client only from the subscribed topics.
                      </p>
                      <p>
                        <span className="text-xl font-bold block my-2">
                          What is QoS
                        </span>
                        MQTT Quality of Service (QoS) is an agreement between
                        the message sender and receiver that defines the level
                        of delivery guarantee for a specific message.
                      </p>
                      <p>MQTT provides three levels of QoS</p>
                      <ul>
                        <li>At most once (QoS 0)</li>
                        <li>At least once (QoS 1)</li>
                        <li>Exactly once (QoS 2)</li>
                      </ul>
                      <p></p>
                      <CodeBlock
                        className="mb-5"
                        language="typescript"
                        code={`
// src/contexts/MQTTProvider.tsx
const mqttSubscribe = useCallback(
  (subscription: any) => {
    if (client) {
      const { topic, qos } = subscription;
      client.subscribe(topic, { qos }, (error: any) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        setIsSubscribed(true);
      });
    }
  },
  [client]
);

const mqttUnSubscribe = useCallback(
  (subscription: any) => {
    if (client) {
      const { topic } = subscription;
      client.unsubscribe(topic, (error: any) => {
        if (error) {
          console.log("Unsubscribe error", error);
          return;
        }
        setIsSubscribed(false);
      });
    }
  },
  [client]
);

`}
                      />
                      <Quote>
                        <h4>Resource</h4>
                        <p>
                          <span>
                            1.{" "}
                            <a href="https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/">
                              What is MQTT Quality of Service (HiveHQ)
                            </a>
                          </span>
                        </p>
                      </Quote>
                    </>
                  }
                </CollapsibleItem>
                <CollapsibleItem
                  title="Publish topics"
                  width="max-w-full"
                  open={false}
                >
                  {
                    <>
                      <p>
                        mqttPublish function publishes the message to the mqtt
                        broker under the provided topic and QoS options.
                      </p>
                      <CodeBlock
                        className="mb-5"
                        language="typescript"
                        code={`
// src/contexts/MQTTProvider.tsx
const mqttPublish = useCallback(
  (context: any) => {
    if (client) {
      const { topic, qos, payload } = context;
      client.publish(topic, payload, { qos }, (error: any) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
    }
  },
  [client]
);

`}
                      />
                    </>
                  }
                </CollapsibleItem>
                <CollapsibleItem
                  title="Receive messages"
                  width="max-w-full"
                  open={false}
                >
                  {
                    <>
                      <p>
                        Messages received from the subscribed topics are
                        captured as a changing{" "}
                        <span className="bg-yellow-300/50">payload</span> state
                        variable in the context.
                      </p>
                      <CodeBlock
                        className="mb-5"
                        language="typescript"
                        code={`
// src/contexts/MQTTProvider.tsx
const [payload, setPayload] = useState({});

useEffect(() => {
  if (client) {
    client.on("message", (topic: string, message: any) => {
      const payload = { topic: topic, message: message.toString() };
      setPayload(payload);
    });
  }
}, [client]);

`}
                      />
                    </>
                  }
                </CollapsibleItem>
              </CollapsibleList>
              <Quote>
                <h4>More Read</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/">
                      Using D3.js with React: An 8 step comprehensive manual
                    </a>
                  </span>
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
              <h1>6. Interaction with a ThreeJS object</h1>
              <p>
                I included a tiny ThreeJS canvas with an object so that people
                can play around with mqtt broker messages. In order to make
                everything function correctly, don't forget to run the mqtt
                broker that I also packaged as{" "}
                <a href="https://github.com/mj-life-is-once/NextJS-mqtt/tree/main/mosquitto">
                  an example container
                </a>
                .
              </p>
              <p>
                The digram below illustrates the communication mechanism
                happening behind the scene. The cube changes its color when it
                receives the message flowing through the subscribed topic
                message.
              </p>
            </TextBlock>
            <ImageBlock type="svg" caption="Fig1. ML Model flow">
              <MQTTCube style={{ height: "400px" }} />
            </ImageBlock>
          </>
        ),
      },
      {
        content: (
          <>
            <TextBlock>
              <h1>6. Microcontroller example</h1>
              <ImageBlock type="img" caption="Image 2. MQTT ESP8266 Demo">
                <Image
                  src="/img/IoT/mqtt-next/esp-mqtt.gif"
                  alt="React lifecycle"
                  width={800}
                  height={600}
                />
              </ImageBlock>
              <p>
                The beauty of the mqtt protocol is in the easy communication
                with the micro-controllers (I used{" "}
                <a href="https://learn.adafruit.com/adafruit-feather-huzzah-esp8266/overview">
                  ESP8266 Feather board
                </a>{" "}
                for this demo). Then, a tiny arduino code loaded on the board
                connects to the mqtt broker and publishes gyro data under{" "}
                <span className="highlight">canvas/cube/rotation</span>
              </p>
              <Quote>
                <h4>Resources</h4>
                <p>
                  <span>
                    1.{" "}
                    <a href="https://randomnerdtutorials.com/esp32-mpu-6050-web-server/">
                      Random Nerd's ESP8266 tutorial.
                    </a>
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
