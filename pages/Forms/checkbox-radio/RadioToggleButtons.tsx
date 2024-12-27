import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const RadioToggleButtons = () => {
    const code = `<div className="hstack gap-2 flex-wrap">
    <input type="radio" className="btn-check" name="options" id="option1" defaultChecked />
    <label className="btn btn-secondary" htmlFor="option1">Checked</label>

    <input type="radio" className="btn-check" name="options" id="option2" />
    <label className="btn btn-secondary" htmlFor="option2">Radio</label>

    <input type="radio" className="btn-check" name="options" id="option3" disabled />
    <label className="btn btn-secondary" htmlFor="option3">Disabled</label>

    <input type="radio" className="btn-check" name="options" id="option4" />
    <label className="btn btn-secondary" htmlFor="option4">Radio</label>
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

export default RadioToggleButtons;