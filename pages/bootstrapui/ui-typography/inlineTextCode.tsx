import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Inline Text Elements

const inlineTextCode =
    `
<!-- Inline Text -->
<p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

<p>You can use the mark tag to <mark>highlight</mark> text.</p>

<p><del>This line of text is meant to be treated as deleted text.</del></p>

<p><s>This line of text is meant to be treated as no longer accurate.</s></p>

<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>

<p><u>This line of text will render as underlined</u></p>

<p><small>This line of text is meant to be treated as fine print.</small></p>

<p><strong>This line rendered as bold text.</strong></p>

<p><em>This line rendered as italicized text.</em></p>
`;

const InlineTextExample = () => (
    <PrismCode
        code={inlineTextCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default InlineTextExample