import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const buttonBadgesCode =
    `
<Button color='primary'>
    Notifications <span className="badge bg-success ms-1">4</span>
</Button>
<Button color='success' className="btn-success">
    Messages <span className="badge bg-danger ms-1">2</span>
</Button>
<Button variant="outline-secondary">
    Draft <span className="badge bg-success ms-1">2</span>
</Button>
`;

const ButtonBadgesExample = () => (
    <PrismCode
        code={buttonBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ButtonBadgesExample;