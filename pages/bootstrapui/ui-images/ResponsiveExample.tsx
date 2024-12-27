import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const responsiveCode =
    `
<!-- Responsive Images -->
<Image src={img2} className="img-fluid" alt="Responsive image" />
`;

const ResponsiveExample = () => (
    <PrismCode
        code={responsiveCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ResponsiveExample;