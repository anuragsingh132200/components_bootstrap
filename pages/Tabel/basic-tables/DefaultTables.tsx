import React from 'react'
import PrismCode from '@common/Prisam'

//DefaultTables code
const DefaultTables = () => {
const code = `<div className="table-responsive">
<Table className="align-middle table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Invoice</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><a href="#" className="fw-medium">#VZ2110</a></th>
            <td>Bobby Davis</td>
            <td>October 15, 2021</td>
            <td>$2,300</td>
            <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
        </tr>
        <tr>
            <th scope="row"><a href="#" className="fw-medium">#VZ2109</a></th>
            <td>Christopher Neal</td>
            <td>October 7, 2021</td>
            <td>$5,500</td>
            <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
        </tr>
        <tr>
            <th scope="row"><a href="#" className="fw-medium">#VZ2108</a></th>
            <td>Monkey Karry</td>
            <td>October 5, 2021</td>
            <td>$2,420</td>
            <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
        </tr>
        <tr>
            <th scope="row"><a href="#" className="fw-medium">#VZ2107</a></th>
            <td>James White</td>
            <td>October 2, 2021</td>
            <td>$7,452</td>
            <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
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

export default DefaultTables;