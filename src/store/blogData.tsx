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
};
