import React from 'react'
import PrismCode from '@common/Prisam'

const ResponsiveTables = () => {
    const code = `<div className="table-responsive">
<Table className="align-middle table-nowrap mb-0">
    <thead className="table-light">
        <tr>
            <th scope="col" style={{width: "42px"}}>
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="responsivetableCheck"/>
                    <Form.Label htmlFor="responsivetableCheck"></Form.Label>
                </div>
            </th>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Customer</th>
            <th scope="col">Purchased</th>
            <th scope="col">Revenue</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="responsivetableCheck01"/>
                    <Form.Label htmlFor="responsivetableCheck01"></Form.Label>
                </div>
            </th>
            <td><a href="#" className="fw-medium">#VZ2110</a></td>
            <td>10 Oct, 14:47</td>
            <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
            <td>
                <div className="d-flex gap-2 align-items-center">
                    <div className="flex-shrink-0">
                        <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
                    </div>
                    <div className="flex-grow-1">
                        Jordan Kennedy
                    </div>
                </div>
            </td>
            <td>Mastering the grid</td>
            <td>$9.98</td>
        </tr>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="responsivetableCheck02"/>
                    <Form.Label htmlFor="responsivetableCheck02"></Form.Label>
                </div>
            </th>
            <td><a href="#" className="fw-medium">#VZ2109</a></td>
            <td>17 Oct, 02:10</td>
            <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
            <td>
                <div className="d-flex gap-2 align-items-center">
                    <div className="flex-shrink-0">
                        <Image src={avatar4} alt="" className="avatar-xs rounded-circle" />
                    </div>
                    <div className="flex-grow-1">
                        Jackson Graham
                    </div>
                </div>
            </td>
            <td>Splashify</td>
            <td>$270.60</td>
        </tr>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="responsivetableCheck03"/>
                    <Form.Label htmlFor="responsivetableCheck03"></Form.Label>
                </div>
            </th>
            <td><a href="#" className="fw-medium">#VZ2108</a></td>
            <td>26 Oct, 08:20</td>
            <td className="text-primary"><i className="ri-refresh-line fs-17 align-middle"></i> Refunded</td>
            <td>
                <div className="d-flex gap-2 align-items-center">
                    <div className="flex-shrink-0">
                        <Image src={avatar5} alt="" className="avatar-xs rounded-circle" />
                    </div>
                    <div className="flex-grow-1">
                        Lauren Trujillo
                    </div>
                </div>
            </td>
            <td>Wireframing Kit for Figma</td>
            <td>$145.42</td>
        </tr>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="responsivetableCheck04"/>
                    <Form.Label htmlFor="responsivetableCheck04"></Form.Label>
                </div>
            </th>
            <td><a href="#" className="fw-medium">#VZ2107</a></td>
            <td>02 Nov, 04:52</td>
            <td className="text-danger"><i className="ri-close-circle-line fs-17 align-middle"></i> Cancel</td>
            <td>
                <div className="d-flex gap-2 align-items-center">
                    <div className="flex-shrink-0">
                        <Image src={avatar6} alt="" className="avatar-xs rounded-circle" />
                    </div>
                    <div className="flex-grow-1">
                        Curtis Weaver
                    </div>
                </div>
            </td>
            <td>Wireframing Kit for Figma</td>
            <td>$170.68</td>
        </tr>
        <tr>
            <th scope="row">
                <div className="form-check">
                    <Form.Check type="checkbox" value="" id="responsivetableCheck05"/>
                    <Form.Label htmlFor="responsivetableCheck05"></Form.Label>
                </div>
            </th>
            <td><a href="#" className="fw-medium">#VZ2106</a></td>
            <td>10 Nov, 07:20</td>
            <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
            <td>
                <div className="d-flex gap-2 align-items-center">
                    <div className="flex-shrink-0">
                        <Image src={avatar1} alt="" className="avatar-xs rounded-circle" />
                    </div>
                    <div className="flex-grow-1">
                        Jason schuller
                    </div>
                </div>
            </td>
            <td>Splashify</td>
            <td>$350.87</td>
        </tr>
    </tbody>
    <tfoot className="table-light">
        <tr>
            <td colSpan={6}>Total</td>
            <td>$947.55</td>
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
export default ResponsiveTables;