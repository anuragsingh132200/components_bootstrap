import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const customMsgCode =
    `
<Rating
emptySymbol="mdi mdi-star-outline text-muted "
fullSymbol="mdi mdi-star text-warning "
/>
`;

const CustomMsgExample = () => (
    <PrismCode
        code={customMsgCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CustomMsgExample;