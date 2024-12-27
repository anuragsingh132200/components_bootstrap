import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Text Decoration

const textDecrationCode =
    `
<!-- Text Decoration -->
<p className="text-decoration-underline">This text has a line underneath it.</p>

<p className="text-decoration-line-through">This text has a line going through it.</p>

<Link to="#" className="text-decoration-none">This link has its text decoration removed</Link>
`;

const TextDecrationExample = () => (
    <PrismCode
        code={textDecrationCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TextDecrationExample