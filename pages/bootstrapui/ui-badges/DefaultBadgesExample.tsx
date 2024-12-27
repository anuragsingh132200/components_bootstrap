import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Badges

const defaultBadgesCode =
`
<Badge bg='primary' >Primary</Badge>

<Badge bg='secondary' >Secondary</Badge>

<Badge bg='success' >Success</Badge>

<Badge bg='info' >Info</Badge>

<Badge bg='warning' >Warning</Badge>

<Badge bg='danger' >Danger</Badge>

<Badge bg='dark' >Dark</Badge>

<Badge bg='light' >Light</Badge>

`;

const DefaultBadgesExample = () => (
    <PrismCode
        code={defaultBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DefaultBadgesExample;