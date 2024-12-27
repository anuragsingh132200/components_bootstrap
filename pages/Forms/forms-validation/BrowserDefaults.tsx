import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

//BrowserDefaults code
const BrowserDefaults = () => {
const code = `<form className="row g-3">
<Col md={4}>
    <Form.Label htmlFor="validationDefault01" className="form-label">First name</Form.Label>
    <Form.Control type="text" id="validationDefault01" value="Mark" required/>
</Col>
<Col md={4}>
    <Form.Label htmlFor="validationDefault02" className="form-label">Last name</Form.Label>
    <Form.Control type="text" id="validationDefault02" value="Otto" required/>
</Col>
<Col md={4}>
    <Form.Label htmlFor="validationDefaultUsername" className="form-label">Username</Form.Label>
    <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">@</span>
        <Form.Control type="text" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>
</Col>
<Col md={6}>
    <Form.Label htmlFor="validationDefault03" className="form-label">City</Form.Label>
    <Form.Control type="text" id="validationDefault03" required/>
</Col>
<Col md={3}>
    <Form.Label htmlFor="validationDefault04" className="form-label">State</Form.Label>
    <select className="form-select" id="validationDefault04" required >
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
</Col>
<Col md={3}>
    <Form.Label htmlFor="validationDefault05" className="form-label">Zip</Form.Label>
    <Form.Control type="text" id="validationDefault05" required/>
</Col>
<Col className="col-12">
    <div className="form-check">
        <Form.Check type="checkbox" value="" id="invalidCheck2" required/>
        <Form.Label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
        </Form.Label>
    </div>
</Col>
<Col className="col-12">
    <Button variant='primary' type="submit">Submit form</Button>
</Col>
</form>
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

export default BrowserDefaults;