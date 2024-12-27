import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const ratio219Code =
`
<!-- Ratio Video 21:9 -->
<div className="ratio ratio-21x9">
    <iframe className="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video"></iframe>
</div>
`;

const Ratio219Example = () => (
    <PrismCode
        code={ratio219Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default Ratio219Example;