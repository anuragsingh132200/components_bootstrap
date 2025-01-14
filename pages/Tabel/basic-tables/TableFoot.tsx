import React from 'react'
import PrismCode from '@common/Prisam'

const TableFoot = () => {
    const code = `<div className="table-responsive">
    <Table className="table-nowrap mb-0">
    <thead className="table-light">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Date</th>
            <th scope="col">Payment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="fw-medium">01</td>
            <td>Annette Black</td>
            <td>Industrial Designer</td>
            <td>10, Nov 2021</td>
            <td>$450</td>
        </tr>
        <tr>
            <td className="fw-medium">02</td>
            <td>Bessie Cooper</td>
            <td>Graphic Designer</td>
            <td>13, Nov 2021</td>
            <td>$875</td>
        </tr>
        <tr>
            <td className="fw-medium">03</td>
            <td>Leslie Alexander</td>
            <td>Product Manager</td>
            <td>17, Nov 2021</td>
            <td>$410</td>
        </tr>
    </tbody>
    <tfoot className="table-light">
        <tr>
            <td colSpan={4}>Total</td>
            <td>$940</td>
        </tr>
    </tfoot>
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

export default TableFoot;