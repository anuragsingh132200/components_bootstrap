import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const customToggleButtonsCode =
    `
<!-- Custom Toggle Buttons -->

<div className="d-flex flex-wrap align-items-center gap-2">
    <Button className="btn-primary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-alarm-line align-bottom"></i> Active</span> 
        <span className="icon-off">Unactive</span>
    </Button>
    <Button className="btn-secondary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-user-add-line align-bottom me-1"></i> Connect</span> 
        <span className="icon-off"><i className="ri-check-fill align-bottom me-1"></i> Unconnect</span>
    </Button>
    <Button className="btn-success custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-thumb-up-line align-bottom me-1"></i> Yes</span> 
        <span className="icon-off"><i className="ri-thumb-down-line align-bottom me-1"></i> No</span>
    </Button>
    <Button className="btn-warning custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span> 
        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
    </Button>
    <Button className="btn-danger custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">On</span> 
        <span className="icon-off">Off</span>
    </Button>
    <Button className="btn-dark custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-bookmark-line align-bottom me-1"></i> Bookmark</span> 
        <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
    </Button>
</div>

<div className="d-flex flex-wrap align-items-center gap-2">
    <Button variant='outline-primary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">Active</span> 
        <span className="icon-off">Unactive</span>
    </Button>
    <Button variant='outline-secondary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span> 
        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
    </Button>
    <Button variant='outline-success' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">On</span>
        <span className="icon-off">Off</span>
    </Button>
    <Button variant='soft-warning' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">Follow</span> 
        <span className="icon-off">Unfollow</span>
    </Button>
    <Button variant='soft-danger' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">On</span> 
        <span className="icon-off">Off</span>
    </Button>
    <Button className="btn-dark custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-bookmark-line align-bottom"></i></span> 
        <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom"></i></span>
    </Button>
</div>
`;

const CustomToggleButtonsExample = () => (
    <PrismCode
        code={customToggleButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default CustomToggleButtonsExample;