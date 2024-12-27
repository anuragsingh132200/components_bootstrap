import React from 'react'
import PrismCode from '@common/Prisam'

const SmallTables = () => {
    const code = `<div className="table-responsive">
<Table className="table-sm table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Assignee</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="fw-medium">01</td>
            <td>Implement new UX</td>
            <td><span className="badge badge-soft-primary">Backlog</span></td>
            <td>Lanora Sandoval</td>
        </tr>
        <tr>
            <td className="fw-medium">02</td>
            <td>Design syntax</td>
            <td><span className="badge badge-soft-secondary">In Progress</span></td>
            <td>Calvin Garrett</td>
        </tr>
        <tr>
            <td className="fw-medium">03</td>
            <td>Configurable resources</td>
            <td><span className="badge badge-soft-success">Done</span></td>
            <td>Florence Guzman</td>
        </tr>
        <tr>
            <td className="fw-medium">04</td>
            <td>Implement extensions</td>
            <td><span className="badge badge-soft-dark">Backlog</span></td>
            <td>Maritza Blanda</td>
        </tr>
        <tr>
            <td className="fw-medium">05</td>
            <td>Applications Engineer</td>
            <td>
                <span className="badge badge-soft-success">Done</span>
            </td>
            <td>Leslie Alexander</td>
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

export default SmallTables;