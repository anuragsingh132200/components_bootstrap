import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const MultipleInputs = () => {
    const code =
        `<!-- Multiple Inputs -->
<div>
    <InputGroup className="mb-3">
        <span className="input-group-text">First and last name</span>
        <Form.Control type="text" aria-label="First name" />
        <Form.Control type="text" aria-label="Last name" />
    </InputGroup>

    <InputGroup className="mb-3">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
        <Form.Control type="text" aria-label="Dollar amount (with dot and two decimal places)" />
    </InputGroup>

    <InputGroup>
        <Form.Control type="text" aria-label="Dollar amount (with dot and two decimal places)" />
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
    </InputGroup>
</div>
`
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                language={"react"}
            />
        </React.Fragment>
    )
}

export default MultipleInputs;