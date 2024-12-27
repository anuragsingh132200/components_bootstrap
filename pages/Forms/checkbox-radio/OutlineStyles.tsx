import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const OutlinedStyles = () => {
    const code = `<div className="hstack gap-2 flex-wrap">
    <input type="checkbox" className="btn-check" id="btn-check-outlined" />
    <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Single toggle</label>

    <input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
    <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">Checked</label>

    <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" defaultChecked />
    <label className="btn btn-outline-success" htmlFor="success-outlined">Checked success radio</label>

    <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" />
    <label className="btn btn-outline-danger" htmlFor="danger-outlined">Danger radio</label>
</div>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                language={"react"}
            />
        </React.Fragment>
    );
};

export default OutlinedStyles;