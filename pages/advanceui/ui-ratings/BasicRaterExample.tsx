import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Basic Rater	

const basicRaterCode =
`
<Rating
initialRating={3}
emptySymbol="mdi mdi-star-outline text-muted "
fullSymbol="mdi mdi-star text-warning "
/>
`;

const BasicRaterExample = () => (
    <PrismCode
        code={basicRaterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BasicRaterExample;