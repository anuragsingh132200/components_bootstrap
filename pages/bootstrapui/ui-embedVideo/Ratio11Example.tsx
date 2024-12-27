import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const ratio11Code =
    `
<!-- Ratio Video 1:1 -->
<div className="ratio ratio-1x1">
    <iframe src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowfullscreen></iframe>
</div>

`;

const Ratio11Example = () => (
    <PrismCode
        code={ratio11Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default Ratio11Example;