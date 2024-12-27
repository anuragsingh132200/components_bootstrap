import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })



const iconButtonsCode =
    `
<!-- Buttons Group -->
<Button variant='primary'><i className="ri-map-pin-line"></i></Button>
<Button variant='danger'><i className="ri-delete-bin-5-line"></i></Button>
<Button variant='success'><i className="ri-check-double-line"></i></Button>
<Button variant='light'><i className="ri-brush-2-fill"></i></Button>

<Button variant='outline-primary'><i className="ri-24-hours-fill"></i></Button>
<Button variant='outline-danger'><i className="ri-customer-service-2-line"></i></Button>
<Button variant='outline-success'><i className="ri-mail-send-line"></i></Button>
<Button variant='outline-warning'><i className="ri-menu-2-line"></i></Button>
`;

const IconButtonsExample = () => (
    <PrismCode
        code={iconButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default IconButtonsExample;