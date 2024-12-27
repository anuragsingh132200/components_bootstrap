import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const avatarCode =
    `
<!-- Avatar With Content -->
    <div className="avatar-xxs mt-3">
        <div className="avatar-title rounded bg-primary-subtle text-primary fs-10">
            XXS
        </div>
    </div>

    <div className="avatar-xs mt-3">
        <div className="avatar-title rounded bg-secondary-subtle text-secondary">
            XS
        </div>
    </div>
    
    <div className="avatar-sm mt-3">
        <div className="avatar-title rounded bg-success-subtle text-success fs-14">
            SM
        </div>
    </div>
    
    <div className="avatar-md mt-3">
        <div className="avatar-title rounded bg-info-subtle text-info fs-16">
            MD
        </div>
    </div>
    
    <div className="avatar-lg mt-3">
        <div className="avatar-title rounded bg-warning-subtle text-warning fs-20">
            LG
        </div>
    </div>
    
    <div className="avatar-xl mt-3">
        <div className="avatar-title rounded bg-danger-subtle text-danger fs-22">
            XL
        </div>
    </div>
`;

const AvatarExample = () => (
    <PrismCode
        code={avatarCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default AvatarExample;