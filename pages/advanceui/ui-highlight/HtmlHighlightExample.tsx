import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// HTML Highlight

const htmlHighlightCode =
    `
<!DOCTYPE html>
<html>
    <head>
        <title>Hybrix - Responsive Admin Dashboard Template</title>
    </head>
    <body>
        <div>
            <h1>This is a Heading 1</h1>
            <h2>This is a Heading 2</h2>
            <h3>This is a Heading 3</h3>
            <h4>This is a Heading 4</h4>
        </div>
        <!-- end div content -->
    </body>
</html>
`;

const HtmlHighlightExample = () => (
    <PrismCode
        code={htmlHighlightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default HtmlHighlightExample;