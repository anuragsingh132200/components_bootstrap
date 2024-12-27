import React from 'react'
import PrismCode from '@common/Prisam'


const ActiveTables = () => {
    const code = `<div className="table-responsive">
<Table className="align-middle table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col" style={{width: "42px"}}>
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="activetableCheck"/>
                    <Form.Label htmlFor="activetableCheck"></Form.Label>
                </div>
            </th>
            <th scope="col">Order ID</th>
            <th scope="col">Shop</th>
            <th scope="col">Customer</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="activetableCheck01" checked/>
                    <Form.Label htmlFor="activetableCheck01"></Form.Label>
                </div>
            </th>
            <td>#541254265</td>
            <td>Amezon</td>
            <td>Cleo Carson</td>
            <td>$4,521</td>
            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
        </tr>
        <tr className="table-active">
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="activetableCheck02" checked/>
                    <Form.Label htmlFor="activetableCheck02"></Form.Label>
                </div>
            </th>
            <td>#744145235</td>
            <td>Shoppers</td>
            <td>Juston Eichmann</td>
            <td>$7,546</td>
            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
        </tr>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="activetableCheck03"/>
                    <Form.Label htmlFor="activetableCheck03"></Form.Label>
                </div>
            </th>
            <td>#9855126598</td>
            <td>Flipkart</td>
            <td>Bettie Johson</td>
            <td>$1,350</td>
            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
        </tr>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="activetableCheck04"/>
                    <Form.Label htmlFor="activetableCheck04"></Form.Label>
                </div>
            </th>
            <td>#847512653</td>
            <td>Shoppers</td>
            <td className="table-active">Maritza Blanda</td>
            <td>$4,521</td>
            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
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
export default ActiveTables;