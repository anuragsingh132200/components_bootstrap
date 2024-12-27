import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const SupportedElements = () => {
    const code = `<Form className="was-validated">
    <div className="mb-3">
        <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
        <Form.Control as="textarea" type="text-area" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></Form.Control>
        <Form.Control.Feedback type="invalid">
            Please enter a message in the textarea.
        </Form.Control.Feedback>
    </div>
    
    <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
        <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
        <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
    </div>
    
    <div className="form-check">
        <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
        <label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
    </div>
    <div className="form-check mb-3">
        <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
        <label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
        <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
    </div>
    
    <div className="mb-3">
        <select className="form-select" required aria-label="select example">
            <option defaultValue="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <Form.Control.Feedback type="invalid">Example invalid select feedback</Form.Control.Feedback>
    </div>
    
    <div className="mb-3">
        <input type="file" className="form-control" aria-label="file example" required />
        <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
    </div>
    
    <div className="mb-0">
        <button className="btn btn-primary" type="submit" disabled>Submit form</button>
    </div>
    </Form>
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

    export default SupportedElements;