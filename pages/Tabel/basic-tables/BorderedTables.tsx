import React from 'react'
import PrismCode from '@common/Prisam'


const BorderedTables = () => {
    const code = `
<div className="table-responsive">
<Table className="table-bordered align-middle table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Assignee</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="fw-medium">01</td>
            <td>Implement new UX</td>
            <td><span className="badge badge-soft-primary">Backlog</span></td>
            <td>Lanora Sandoval</td>
            <td>$4,521</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle as='a' className='arrow-none'>
                        <i className="ri-more-2-fill"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">View</Dropdown.Item>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td className="fw-medium">02</td>
            <td>Design syntax</td>
            <td><span className="badge badge-soft-secondary">In Progress</span></td>
            <td>Calvin Garrett</td>
            <td>$7,546</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle as='a' className='arrow-none'>
                        <i className="ri-more-2-fill"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">View</Dropdown.Item>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td className="fw-medium">03</td>
            <td>Configurable resources</td>
            <td><span className="badge badge-soft-success">Done</span></td>
            <td>Florence Guzman</td>
            <td>$1,350</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle as='a' className='arrow-none'>
                        <i className="ri-more-2-fill"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">View</Dropdown.Item>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td className="fw-medium">04</td>
            <td>Implement extensions</td>
            <td><span className="badge badge-soft-secondary">In Progress</span></td>
            <td>Maritza Blanda</td>
            <td>$4,521</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle as='a' className='arrow-none'>
                        <i className="ri-more-2-fill"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">View</Dropdown.Item>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default BorderedTables;