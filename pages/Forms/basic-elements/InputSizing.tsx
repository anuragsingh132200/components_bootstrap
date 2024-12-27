import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const InputSizing = () => {
    const code =
        `<Col lg={4}>
<Form.Control className="form-control-sm" type="text" placeholder=".form-control-sm" />
</Col>
<Col lg={4}>
<Form.Control type="text" placeholder=".form-control" />
</Col>
<Col lg={4}>
<Form.Control className="form-control-lg" type="text" placeholder=".form-control-lg" />
</Col>
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

export default InputSizing;