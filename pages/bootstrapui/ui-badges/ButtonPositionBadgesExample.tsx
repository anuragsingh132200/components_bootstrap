import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const buttonPositionBadgesCode =
`
<Button color='primary' className="position-relative">
Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99
    <span className="visually-hidden">unread messages</span></span>
</Button>

<Button className="btn-light position-relative">
    Alerts <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
</Button>

<Button color='primary' className="position-relative p-0 avatar-xs rounded">
    <span className="avatar-title bg-transparent">
        <i className="bx bxs-envelope"></i>
    </span>
    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
</Button>

<Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
    <span className="avatar-title bg-transparent text-reset">
        <i className="bx bxs-bell"></i>
    </span>
</Button>

<Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
    <span className="avatar-title bg-transparent text-reset">
        <i className="bx bx-menu"></i>
    </span>
    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
</Button>
`;

const ButtonPositionBadgesExample = () => (
    <PrismCode
        code={buttonPositionBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ButtonPositionBadgesExample;