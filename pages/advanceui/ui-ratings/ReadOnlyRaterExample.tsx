import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const readOnlyRaterCode =
    `
<Rating
stop={16}
emptySymbol="mdi mdi-star-outline text-muted fa-1x"
fullSymbol="mdi mdi-star text-warning"
initialRating={4.5}
readonly
/>
`;

const ReadOnlyRaterExample = () => (
    <PrismCode
        code={readOnlyRaterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ReadOnlyRaterExample;