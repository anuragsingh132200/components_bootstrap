import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Ratio Video 16:9

const ratio169Code =
`
<!-- Ratio Video 16:9 -->
<div className="ratio ratio-16x9">
    <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video"></iframe>
</div>
`;

const Ratio169Example = () => (
    <PrismCode
        code={ratio169Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default Ratio169Example;