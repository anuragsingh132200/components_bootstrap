import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const roundedPillBadgesCode =
    `
<Badge color="primary" pill> Primary </Badge>

<Badge color="secondary" pill> Secondary </Badge>

<Badge color="success" pill> Success </Badge>

<Badge color="info" pill> Info </Badge>

<Badge color="warning" pill> Warning </Badge>

<Badge color="danger" pill> Danger </Badge>

<Badge color="dark" pill> Dark </Badge>

<Badge color="light" className="text-dark" pill> Light </Badge>

`;

const RoundedPillBadgesExample = () => (
    <PrismCode
        code={roundedPillBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RoundedPillBadgesExample;