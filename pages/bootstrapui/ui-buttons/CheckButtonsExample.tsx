import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const checkButtonsCode =
`
<div className="d-flex flex-wrap align-items-center gap-2">
<!-- Checkbox Buttons -->
    <ButtonGroup aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" defaultChecked />
        <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck1">Checkbox 1</Button>

        <input type="checkbox" className="btn-check" id="btncheck2" />
        <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck2">Checkbox 2</Button>

        <input type="checkbox" className="btn-check" id="btncheck3" />
        <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck3">Checkbox 3</Button>
    </ButtonGroup>

<!-- Radio Buttons -->
    <ButtonGroup aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
        <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio1">Radio 1</Button>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
        <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio2">Radio 2</Button>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
        <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio3">Radio 3</Button>
    </ButtonGroup>
</div>
`;

const CheckButtonsExample = () => (
    <PrismCode
        code={checkButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CheckButtonsExample;