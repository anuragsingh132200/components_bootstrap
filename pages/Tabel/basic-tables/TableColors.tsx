import React from 'react'
import PrismCode from '@common/Prisam'

const TablesColors = () => {
    const code = `<Row>
<Col xl={6}>
    <div className="table-responsive">
        <Table className="table-dark table-striped table-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="fw-medium">01</td>
                    <td>Bobby Davis</td>
                    <td>Nov 14, 2021</td>
                    <td>$2,410</td>
                </tr>
                <tr>
                    <td className="fw-medium">02</td>
                    <td>Christopher Neal</td>
                    <td>Nov 21, 2021</td>
                    <td>$1,450</td>
                </tr>
                <tr>
                    <td className="fw-medium">03</td>
                    <td>Monkey Karry</td>
                    <td>Nov 24, 2021</td>
                    <td>$3,500</td>
                </tr>
                <tr>
                    <td className="fw-medium">04</td>
                    <td>Aaron James</td>
                    <td>Nov 25, 2021</td>
                    <td>$6,875</td>
                </tr>
            </tbody>
        </Table>
    </div>
</Col>

<Col xl={6}>
    <div className="table-responsive mt-4 mt-xl-0">
        <Table className="table-success table-striped table-nowrap align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="fw-medium">01</td>
                    <td>Basic Plan</td>
                    <td>$860</td>
                    <td>Nov 22, 2021</td>
                    <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div className="hstack gap-3 flex-wrap">
                            <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                            <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="fw-medium">02</td>
                    <td>Premium Plan</td>
                    <td>$1200</td>
                    <td>Nov 10, 2021</td>
                    <td><i className="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                    <td>
                        <div className="hstack gap-3 flex-wrap">
                            <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                            <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="fw-medium">03</td>
                    <td>Basic Plan</td>
                    <td>$860</td>
                    <td>Nov 19, 2021</td>
                    <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div className="hstack gap-3 flex-wrap">
                            <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                            <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="fw-medium">04</td>
                    <td>Corporate Plan</td>
                    <td>$1599</td>
                    <td>Nov 22, 2021</td>
                    <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div className="hstack gap-3 flex-wrap">
                            <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                            <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
</Col>
</Row>
`
    return (
        <React.Fragment>
            <PrismCode
                code={code}
            />
        </React.Fragment>
    )
}

export default TablesColors;