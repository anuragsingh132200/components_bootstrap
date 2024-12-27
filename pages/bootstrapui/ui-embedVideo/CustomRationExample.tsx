import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const customRationCode =
    `
<div className="ratio">
    <iframe className="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video"></iframe>
</div>

`;

const CustomRationExample = () => (
    <PrismCode
        code={customRationCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CustomRationExample;