import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const labelPillBadgesCode =
`
<Badge bg='primary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Primary</Badge>

<Badge bg='secondary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Secondary</Badge>

<Badge bg='success' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Success</Badge>

<Badge bg='danger' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Danger</Badge>

<Badge bg='warning' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Warning</Badge>

<Badge bg='info' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Info</Badge>

<Badge bg='dark' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Dark</Badge>

<Badge bg='light' className="badge-label text-dark"> <i className="mdi mdi-circle-medium"></i> Light</Badge>
`;

const LabelBadgesExample = () => (
    <PrismCode
        code={labelPillBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default LabelBadgesExample;