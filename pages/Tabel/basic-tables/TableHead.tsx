import React from 'react'
import PrismCode from '@common/Prisam'

const TableHead = () => {
    const code = `
<div className="table-responsive">
    <Table className="align-middle table-nowrap mb-0">
        <thead className="table-light">
            <tr>
                <th scope="col">Student</th>
                <th scope="col">Course</th>
                <th scope="col">Author</th>
                <th scope="col">Payment</th>
                <th scope="col">Process</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Milana Scot</td>
                <td>UI/UX design</td>
                <td>Mitchell Flores</td>
                <td>$450</td>
                <td>
                    <ProgressBar variant="success" now={100} className="progress-sm"/>
                </td>
                <td><Button bsPrefix='a' href="#" className="link-success">Confirmed</Button></td>
            </tr>
            <tr>
                <td>Jassica Welsh</td>
                <td>3d Animation</td>
                <td>Dan Evgeni</td>
                <td>$860</td>
                <td>
                    <ProgressBar variant="warning" now={65} className="progress-sm"/>
                </td>
                <td><Button bsPrefix='a' href="#" className="link-warning">Waiting</Button></td>
            </tr>
            <tr>
                <td>Leslie Alexander</td>
                <td>Logotype Design</td>
                <td>Olimpia Jordan</td>
                <td>$450</td>
                <td>
                    <ProgressBar variant="warning" now={35} className="progress-sm"/>
                </td>
                <td><Button bsPrefix='a' href="#" className="link-warning">Waiting</Button></td>
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

export default TableHead;