import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import {
  androidstudio,
  gradientDark,
  stackoverflowDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import c from "./CodeBlock.module.scss";

interface CodeProps {
  language: string;
  code: string;
  className?: string;
  style?: SyntaxHighlighterProps["style"];
}
const CodeBlock = (props: CodeProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.code}`}>
      <SyntaxHighlighter
        language={props.language}
        style={gradientDark} //gradientDark
        showLineNumbers
        showInlineLineNumbers
        wrapLines={true}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
