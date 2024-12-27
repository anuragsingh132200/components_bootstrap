import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })
const onHoverCode =
    `
const [customize, setcustomize] = useState("");

<Rating
stop={5}
emptySymbol="mdi mdi-star-outline text-muted "
fullSymbol="mdi mdi-star text-warning "
onChange={(customize) => setcustomize(customize)}
/>
`;

const OnHoverExample = () => (
    <PrismCode
        code={onHoverCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default OnHoverExample;