import React from 'react'
import PrismCode from '@common/Prisam'

const CardTables = () => {
    const code = `<div className="table-responsive table-card">
    <Table className="align-middle table-nowrap mb-0">
        <thead className="table-light">
            <tr>
                <th scope="col" style={{width: "46px"}}>
                    <div className="form-check">
                        <Form.Check type="checkbox" value="" id="cardtableCheck"/>
                        <Form.Label htmlFor="cardtableCheck"></Form.Label>
                    </div>
                </th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                <th scope="col" style={{width: "150px"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className="form-check">
                        <Form.Check type="checkbox" value="" id="cardtableCheck01"/>
                        <Form.Label htmlFor="cardtableCheck01"></Form.Label>
                    </div>
                </td>
                <td><a href="#" className="fw-medium">#VL2110</a></td>
                <td>William Elmore</td>
                <td>07 Oct, 2021</td>
                <td>$24.05</td>
                <td><span className="badge bg-success">Paid</span></td>
                <td>
                    <Button type="button" variant='light' className="btn-sm">Details</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="form-check">
                        <Form.Check type="checkbox" value="" id="cardtableCheck02"/>
                        <Form.Label htmlFor="cardtableCheck02"></Form.Label>
                    </div>
                </td>
                <td><a href="#" className="fw-medium">#VL2109</a></td>
                <td>Georgie Winters</td>
                <td>07 Oct, 2021</td>
                <td>$26.15</td>
                <td><span className="badge bg-success">Paid</span></td>
                <td>
                    <Button type="button" variant='light' className="btn-sm">Details</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="form-check">
                        <Form.Check type="checkbox" value="" id="cardtableCheck03"/>
                        <Form.Label htmlFor="cardtableCheck03"></Form.Label>
                    </div>
                </td>
                <td><a href="#" className="fw-medium">#VL2108</a></td>
                <td>Whitney Meier</td>
                <td>06 Oct, 2021</td>
                <td>$21.25</td>
                <td><span className="badge bg-danger">Refund</span></td>
                <td>
                    <Button type="button" variant='light' className="btn-sm">Details</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="form-check">
                        <Form.Check type="checkbox" value="" id="cardtableCheck04"/>
                        <Form.Label htmlFor="cardtableCheck04"></Form.Label>
                    </div>
                </td>
                <td><a href="#" className="fw-medium">#VL2107</a></td>
                <td>Justin Maier</td>
                <td>05 Oct, 2021</td>
                <td>$25.03</td>
                <td><span className="badge bg-success">Paid</span></td>
                <td>
                    <Button type="button" variant='light' className="btn-sm">Details</Button>
                </td>
            </tr>
        </tbody>
    </Table>
    </div>
    `
        return (
            <React.Fragment>
                <PrismCode
                    code={code}
                />
            </React.Fragment>
        )
    }

    export default CardTables;