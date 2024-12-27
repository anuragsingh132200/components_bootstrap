import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const ratio43Code =
`
<!-- Ratio Video 4:3 -->
<div className="ratio ratio-4x3">
    <iframe className="rounded" src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video"></iframe>
</div>
`;

const Ratio43Example = () => (
    <PrismCode
        code={ratio43Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default Ratio43Example;