import Intro from "@/components/_ui/Intro";
import c from "./page.module.css";
import { BLOGS } from "@/store/blogData";

const Blogs = ({ params }: { params: { id: string } }) => {
  return (
    <section>
      {BLOGS.hasOwnProperty(params.id) && (
        <Intro
          title={BLOGS[params.id].title}
          description={BLOGS[params.id].description}
          backLink={BLOGS[params.id].backLink}
          tags={BLOGS[params.id].tags}
        />
      )}
      {!BLOGS.hasOwnProperty(params.id) && (
        <Intro
          title={<h1>hello</h1>}
          description={`hello ${params.id}`}
          backLink={{ title: "Back to Experiments", href: "/" }}
        />
      )}
    </section>
  );
};

export default Blogs;
