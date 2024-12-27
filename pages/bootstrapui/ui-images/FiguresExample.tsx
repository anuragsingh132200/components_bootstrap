import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const figuresCode =
    `
<!-- figures Images -->
<figure className="figure mb-0">
    <Image src={img4} className="figure-img img-fluid rounded" alt="..." />
    <figcaption className="figure-caption">A caption for the above image.</figcaption>
</figure>

<figure className="figure mb-0">
    <Image src={img5} className="figure-img img-fluid rounded" alt="..." />
    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
`;

const FiguresExample = () => (
    <PrismCode
        code={figuresCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default FiguresExample;