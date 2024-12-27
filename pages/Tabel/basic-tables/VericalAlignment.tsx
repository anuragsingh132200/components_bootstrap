import React from 'react'
import PrismCode from '@common/Prisam'

const VerticalAlignment = () => {
    const code = `<div className="table-responsive">
<Table className="align-middle">
    <thead>
        <tr>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
        </tr>
        <tr className="align-bottom">
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
        </tr>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td className="align-top">This cell is aligned to the top.</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
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

export default VerticalAlignment;