import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Dropdown, Form } from 'react-bootstrap';
import dynamic from "next/dynamic";

const DataTable = dynamic(() => import("react-data-table-component"), {ssr: false,});


const FixedHeaderDatatables = () => {
    const columns = [
        {
            name: <Form.Check className="fs-15" type="checkbox" name="checkAll" value="option1" />,
            cell: () => (
                <Form.Check className="fs-15" type="checkbox" name="checkAll" value="option1" />
            ),
        },
        {
            name: <span className='font-weight-bold fs-13'>SR No.</span>,
            selector: (row:any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>ID</span>,
            selector: (row:any) => row.FixHeadId,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Purchase ID</span>,
            selector: (row:any) => row.purchaseId,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Title</span>,
            selector: (row:any) => (<Link href="#!">{row.title}</Link>),
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>User</span>,
            selector: (row:any) => row.user,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Assigned To</span>,
            selector: (row:any) => row.assigned,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Create By</span>,
            selector: (row:any) => row.createdBy,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Create Date</span>,
            selector: (row:any) => row.createDate,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Status</span>,
            sortable: true,
            selector: (cell:any) => {
                switch (cell.status) {
                    case "Re-open":
                        return <span className="badge badge-soft-info"> {cell.status} </span>;
                    case "On-Hold":
                        return <span className="badge badge-soft-secondary"> {cell.status} </span>;
                    case "Closed":
                        return <span className="badge badge-soft-danger"> {cell.status} </span>;
                    case "Inprogress":
                        return <span className="badge badge-soft-warning"> {cell.status} </span>;
                    case "Open":
                        return <span className="badge badge-soft-primary"> {cell.status} </span>;
                    case "New":
                        return <span className="badge badge-soft-success"> {cell.status} </span>;
                    default:
                        return <span className="badge badge-soft-success"> {cell.status} </span>;
                }
            },
        },
        {
            name: <span className='font-weight-bold fs-13'>Priority</span>,
            sortable: true,
            selector: (cell:any) => {
                switch (cell.priority) {
                    case "High":
                        return <span className="badge bg-danger"> {cell.priority} </span>;
                    case "Medium":
                        return <span className="badge bg-info"> {cell.priority} </span>;
                    case "Low":
                        return <span className="badge bg-success"> {cell.priority} </span>;
                    default:
                        return <span className="badge bg-danger"> {cell.priority} </span>;
                }
            },
        },
        {
            name: <span className='font-weight-bold fs-13'>Action</span>,
            sortable: true,

            cell: () => {
                return (
                    <Dropdown className="dropdown d-inline-block">
                        <Dropdown.Toggle className="btn btn-soft-secondary arrow-none btn-sm">
                            <i className="ri-more-fill align-middle"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <Dropdown.Item href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</Dropdown.Item>
                            <Dropdown.Item className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</Dropdown.Item>
                            <Dropdown.Item className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            },
        },
    ];

    const data = [
        {
            srNo: "01",
            FixHeadId: "VLZ-452",
            purchaseId: "VLZ1400087402",
            title: "Post launch reminder/ post list",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "03 Oct, 2021",
            status: "Re-open",
            priority: "High",
        },
        {
            srNo: "02",
            FixHeadId: "VLZ-453",
            purchaseId: "VLZ1400087425",
            title: "Additional Calendar",
            user: "Diana Kohler",
            assigned: "Admin",
            createdBy: "Mary Rucker",
            createDate: "05 Oct, 2021",
            status: "On-Hold",
            priority: "Medium",
        },
        {
            srNo: "03",
            FixHeadId: "VLZ-454",
            purchaseId: "VLZ1400087438",
            title: "Make a creating an account profile",
            user: "Tonya Noble",
            assigned: "Admin",
            createdBy: "Tonya Noble",
            createDate: "27 April, 2022",
            status: "Closed",
            priority: "Low",
        },
        {
            srNo: "04",
            FixHeadId: "VLZ-455",
            purchaseId: "VLZ1400087748",
            title: "Apologize for shopping Error!",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "14 June, 2021",
            status: "Inprogress",
            priority: "Medium",
        },
        {
            srNo: "05",
            FixHeadId: "VLZ-456",
            purchaseId: "VLZ1400087547",
            title: "Support for theme",
            user: "Donald Palmer",
            assigned: "Admin",
            createdBy: "Donald Palmer",
            createDate: "25 June, 2021",
            status: "Closed",
            priority: "Low",
        },
        {
            srNo: "06",
            FixHeadId: "VLZ-457",
            purchaseId: "VLZ1400087245",
            title: "Benner design for FB & Twitter",
            user: "Mary Rucker",
            assigned: "Jennifer Carter",
            createdBy: "Mary Rucker",
            createDate: "14 Aug, 2021",
            status: "Inprogress",
            priority: "Medium",
        },
        {
            srNo: "07",
            FixHeadId: "VLZ-458",
            purchaseId: "VLZ1400087785",
            title: "Change email option process",
            user: "James Morris",
            assigned: "Admin",
            createdBy: "James Morris",
            createDate: "12 March, 2022",
            status: "Open",
            priority: "High",
        },
        {
            srNo: "08",
            FixHeadId: "VLZ-460",
            purchaseId: "VLZ1400087745",
            title: "Support for theme",
            user: "Nathan Cole",
            assigned: "Nancy Martino",
            createdBy: "Nathan Cole",
            createDate: "28 Feb, 2022",
            status: "On-Hold",
            priority: "Low",
        },
        {
            srNo: "09",
            FixHeadId: "VLZ-461",
            purchaseId: "VLZ1400087179",
            title: "Form submit issue",
            user: "Grace Coles",
            assigned: "Admin",
            createdBy: "Grace Coles",
            createDate: "07 Jan, 2022",
            status: "New",
            priority: "High",
        },
        {
            srNo: "10",
            FixHeadId: "VLZ-462",
            purchaseId: "VLZ140008856",
            title: "Edit customer testimonial",
            user: "Freda",
            assigned: "Alexis Clarke",
            createdBy: "Freda",
            createDate: "16 Aug, 2021",
            status: "Closed",
            priority: "Medium",
        },
        {
            srNo: "11",
            FixHeadId: "VLZ-463",
            purchaseId: "VLZ1400078031",
            title: "Ca i have an e-copy invoice",
            user: "Williams",
            assigned: "Admin",
            createdBy: "Williams",
            createDate: "24 Feb, 2022",
            status: "Open",
            priority: "Low",
        },
        {
            srNo: "12",
            FixHeadId: "VLZ-464",
            purchaseId: "VLZ1400087416",
            title: "Brand logo design",
            user: "Richard V.",
            assigned: "Admin",
            createdBy: "Richard V.",
            createDate: "16 March, 2021",
            status: "Inprogress",
            priority: "High",
        },
        {
            srNo: "13",
            FixHeadId: "VLZ-466",
            purchaseId: "VLZ1400089015",
            title: "Issue with finding information about order ?",
            user: "Olive Gunther",
            assigned: "Alexis Clarke",
            createdBy: "Schaefer",
            createDate: "32 March, 2022",
            status: "New",
            priority: "High",
        },
        {
            srNo: "14",
            FixHeadId: "VLZ-467",
            purchaseId: "VLZ1400090324",
            title: "Make a creating an account profile",
            user: "Edwin",
            assigned: "Admin",
            createdBy: "Edwin",
            createDate: "05 April, 2022",
            status: "Inprogress",
            priority: "Low",
        },
    ];
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
};

export default FixedHeaderDatatables;