import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import c from "./CodeBlock.module.scss";

interface CodeProps {
  language: string;
  code: string;
  className?: string;
}
const CodeBlock = (props: CodeProps) => {
  return (
    <div className={`${props.className}`}>
      <SyntaxHighlighter
        language={props.language}
        style={gradientDark}
        showLineNumbers
        wrapLongLines
        showInlineLineNumbers
        wrapLines={true}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
