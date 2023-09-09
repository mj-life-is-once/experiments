"use client";
import { Helmet } from "react-helmet";
import Intro from "@/components/_ui/Intro";
import { BLOGS } from "@/store/blogData";
import c from "./page.module.scss";
import ContentBlock from "@/components/_ui/Content";
import { Content } from "@/type/types";

const Blogs = ({ params }: { params: { id: string } }) => {
  return (
    <div className={c.blog}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{params.id}</title>
      </Helmet>

      {BLOGS.hasOwnProperty(params.id) && (
        <>
          <Intro
            className={c.intro}
            title={BLOGS[params.id].intro.title}
            description={BLOGS[params.id].intro.description}
            backLink={BLOGS[params.id].intro.backLink}
            tags={BLOGS[params.id].intro.tags}
          />
          <div className={c.body}>
            <ContentBlock contents={BLOGS[params.id].contents} />
          </div>
        </>
      )}
      {!BLOGS.hasOwnProperty(params.id) && (
        <Intro
          title={<h1>{params.id}</h1>}
          description={`hello ${params.id}`}
          backLink={{ title: "Back to Experiments", href: "/" }}
        />
      )}
    </div>
  );
};

export default Blogs;
