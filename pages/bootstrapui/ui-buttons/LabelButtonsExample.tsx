import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const labelButtonsCode =
`
<!-- Buttons with Label -->
<Link href="#" className="btn btn-primary btn-label">
    <div className="d-flex">
        <div className="flex-shrink-0">
            <i className="ri-user-smile-line label-icon align-middle fs-16 me-2"></i>
        </div>
        <div className="flex-grow-1">
            Primary
        </div>
    </div>
</Link>

<Button variant='success' className="btn-label"><i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success</Button>

<Button variant='warning' className="btn-label"><i className="ri-error-warning-line label-icon align-middle fs-16 me-2 "></i> Warning</Button>

<!-- Rounded with Label -->
<Button variant='primary' className="btn-label rounded-pill"><i className="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"></i> Primary</Button>

<Button variant='success' className="btn-label rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"></i> Success</Button>

<Button variant='warning' className="btn-label rounded-pill"><i className="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2 "></i> Warning</Button>

<!-- Buttons with Label Right -->
<Button variant='primary' className="btn-label right"><i className="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i> Primary</Button>

<Button variant='success' className="btn-label right rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i> Success</Button>
`;

const LabelButtonsExample = () => (
    <PrismCode
        code={labelButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default LabelButtonsExample;