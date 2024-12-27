import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const avatarGroupCode =
    `
<!-- Simple Group -->
<div className="avatar-group">
    <div className="avatar-group-item">
        <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
    </div>
    <div className="avatar-group-item">
        <Image src={avatar5} alt="" className="rounded-circle avatar-sm" />
    </div>
    <div className="avatar-group-item">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle bg-light text-primary">
                A
            </div>
        </div>
    </div>
    <div className="avatar-group-item">
        <Image src={avatar2} alt="" className="rounded-circle avatar-sm" />
    </div>
</div>

<!-- Avatar Group with Tooltip -->
<div className="avatar-group">
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
        <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
    </Link>
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Frank Hook">
        <Image src={avatar3} alt="" className="rounded-circle avatar-sm" />
    </Link>
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle bg-light text-primary">
                C
            </div>
        </div>
    </Link>
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="mORE">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle">
                2+
            </div>
        </div>
    </Link>
</div>
`;

const AvatarGroupExample = () => (
    <PrismCode
        code={avatarGroupCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default AvatarGroupExample;