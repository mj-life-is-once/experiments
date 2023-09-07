import Intro from "@/components/UI/Intro";
import c from "./page.module.css";

const Blogs = ({ params }: { params: { id: string } }) => {
  return (
    <section>
      <Intro
        title={<h1>hello</h1>}
        description={`hello ${params.id}`}
        backLink={{ title: "Back to Experiments", href: "/" }}
      />
    </section>
  );
};

export default Blogs;
