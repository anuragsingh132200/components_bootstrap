import React from 'react'
import PrismCode from '@common/Prisam'
const TableNesting = () => {
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
            <td colSpan={5}>
                <table className="table table-nowrap mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Student</th>
                            <th scope="col">Course</th>
                            <th scope="col">Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fw-medium">I</td>
                            <td>Milana Scot</td>
                            <td>3d Animation</td>
                            <td>James Black</td>
                        </tr>
                        <tr>
                            <td className="fw-medium">II</td>
                            <td>Juston Eichmann</td>
                            <td>Design syntax</td>
                            <td>Olimpia Jordan</td>
                        </tr>
                    </tbody>
                </table>
            </td>
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
            <td>16, Nov 2021</td>
            <td>$410</td>
        </tr>
        <tr>
            <td className="fw-medium">04</td>
            <td>Bettie Johson</td>
            <td>Applications Engineer</td>
            <td>24, Nov 2021</td>
            <td>$620</td>
        </tr>
        <tr>
            <td className="fw-medium">05</td>
            <td>Monkey Karry</td>
            <td>Implement new UX</td>
            <td>25, Nov 2021</td>
            <td>$795</td>
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
export default TableNesting;