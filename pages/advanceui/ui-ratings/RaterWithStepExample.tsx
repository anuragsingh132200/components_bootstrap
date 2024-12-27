import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const raterWithStepCode =
`
<Rating
initialRating={1.5}
fractions={2}
emptySymbol="mdi mdi-star-outline text-muted "
fullSymbol="mdi mdi-star text-warning "
/>
`;

const RaterWithStepExample = () => (
    <PrismCode
        code={raterWithStepCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default RaterWithStepExample;