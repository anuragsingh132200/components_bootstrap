import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const reasetRaterCode =
    `
const [reset, setreset] = useState("");

<Rating
emptySymbol="mdi mdi-star-outline text-muted"
fullSymbol={reset}
onHover={() => setreset("mdi mdi-star text-warning")}
/>
`;

const ReasetRaterExample = () => (
    <PrismCode
        code={reasetRaterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ReasetRaterExample;