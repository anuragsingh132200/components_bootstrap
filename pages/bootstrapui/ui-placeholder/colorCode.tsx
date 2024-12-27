import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Color

const colorCode =
`
<!-- Color -->
<span className="placeholder w-100"></span>

<span className="placeholder bg-primary w-100"></span>

<span className="placeholder bg-secondary w-100"></span>

<span className="placeholder bg-success w-100"></span>

<span className="placeholder bg-danger w-100"></span>

<span className="placeholder bg-warning w-100"></span>

<span className="placeholder bg-info w-100"></span>

<span className="placeholder bg-light w-100"></span>

<span className="placeholder bg-dark w-100"></span>
`;

const ColorExample = () => (
    <PrismCode
        code={colorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ColorExample