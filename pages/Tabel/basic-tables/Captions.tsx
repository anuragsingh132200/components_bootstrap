import React from 'react'
import PrismCode from '@common/Prisam'

const Captions = () => {
    const code = `<div className="table-responsive">
<Table className="caption-top table-nowrap mb-0">
    <caption>List of users</caption>
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
            <td className="fw-medium">01</td>
            <td>Milana Scot</td>
            <td>UI/UX design</td>
            <td>Mitchell Flores</td>
        </tr>
        <tr>
            <td className="fw-medium">02</td>
            <td>Jassica Welsh</td>
            <td>3d Animation</td>
            <td>Dan Evgeni</td>
        </tr>
        <tr>
            <td className="fw-medium">03</td>
            <td>Leslie Alexander</td>
            <td>Logotype Design</td>
            <td>Olimpia Jordan</td>
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

export default Captions;