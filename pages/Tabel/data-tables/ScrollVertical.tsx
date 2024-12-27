import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Dropdown, Form } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from "next/dynamic";

const DataTable = dynamic(() => import("react-data-table-component"), {ssr: false,});

//import Images
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import avatar10 from "@assets/images/users/avatar-10.jpg";



const ScrollVertical = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>ID</span>,
            selector: (row:any) => row.ScrVerId,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Project</span>,
            selector: (row:any) => row.project,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Task</span>,
            selector: (row:any) => (<Link href="#!">{row.task}</Link>),
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Client Name</span>,
            selector: (row:any) => row.clientName,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Assigned To</span>,
            sortable: true,
            selector: (cell:any) => {
                return (
                    <React.Fragment>
                        <div className="avatar-group">
                            {cell.assigned.map((item:any, index:any) => (
                                <Link key={index} href="#" className="avatar-group-item">
                                    <Image src={item} alt="" className="rounded-circle avatar-xxs" />
                                </Link>
                            ))}
                        </div>
                    </React.Fragment>
                );
            },
        },
        {
            name: <span className='font-weight-bold fs-13'>Due Date</span>,
            selector: (row:any) => row.dueDate,
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
    ];

    const data = [
        {
            ScrVerId: "VLZ-452",
            project: "Symox v1.0.0",
            task: "Add Dynamic Contact List",
            clientName: "RH Nichols",
            assigned: [avatar3],
            dueDate: "03 Oct, 2021",
            status: "Re-open",
            priority: "High",
        },
        {
            ScrVerId: "VLZ-453",
            project: "Doot - Chat App Template",
            task: "Additional Calendar",
            clientName: "Diana Kohler",
            assigned: [avatar4, avatar5],
            dueDate: "05 Oct, 2021",
            status: "On-Hold",
            priority: "Medium",
        },
        {
            ScrVerId: "VLZ-454",
            project: "Qexal - Landing Page",
            task: "Make a creating an account profile",
            clientName: "David Nichols",
            assigned: [avatar6, avatar7, avatar8],
            dueDate: "27 April, 2022",
            status: "Closed",
            priority: "Low",
        },
        {
            ScrVerId: "VLZ-455",
            project: "Dorsin - Landing Page",
            task: "Apologize for shopping Error!",
            clientName: "Tonya Noble",
            assigned: [avatar6, avatar7],
            dueDate: "14 June, 2021",
            status: "Inprogress",
            priority: "Medium",
        },
        {
            ScrVerId: "VLZ-456",
            project: "Minimal - v2.1.0",
            task: "Support for theme",
            clientName: "Donald Palmer",
            assigned: [avatar2],
            dueDate: "25 June, 2021",
            status: "Closed",
            priority: "Low",
        },
        {
            ScrVerId: "VLZ-457",
            project: "Dason - v1.0.0",
            task: "Benner design for FB & Twitter",
            clientName: "Jennifer Carter",
            assigned: [avatar5, avatar6, avatar7, avatar8],
            dueDate: "14 Aug, 2021",
            status: "Inprogress",
            priority: "Medium",
        },
        {
            ScrVerId: "VLZ-458",
            project: "Velzon v1.6.0",
            task: "Add datatables",
            clientName: "James Morris",
            assigned: [avatar4, avatar5],
            dueDate: "12 March, 2022",
            status: "Open",
            priority: "High",
        },
        {
            ScrVerId: "VLZ-460",
            project: "Skote v2.0.0",
            task: "Support for theme",
            clientName: "Nancy Martino",
            assigned: [avatar3, avatar10, avatar9],
            dueDate: "28 Feb, 2022",
            status: "On-Hold",
            priority: "Low",
        },
        {
            ScrVerId: "VLZ-461",
            project: "Velzon v1.0.0",
            task: "Form submit issue",
            clientName: "Grace Coles",
            assigned: [avatar5, avatar10, avatar9],
            dueDate: "07 Jan, 2022",
            status: "New",
            priority: "High",
        },
        {
            ScrVerId: "VLZ-462",
            project: "Minimal - v2.2.0",
            task: "Edit customer testimonial",
            clientName: "Freda",
            assigned: [avatar2],
            dueDate: "16 Aug, 2021",
            status: "Closed",
            priority: "Medium",
        },
        {
            ScrVerId: "VLZ-454",
            project: "Qexal - Landing Page",
            task: "Make a creating an account profile",
            clientName: "David Nichols",
            assigned: [avatar6, avatar7, avatar8],
            dueDate: "27 April, 2022",
            status: "Closed",
            priority: "Low",
        },
        {
            ScrVerId: "VLZ-455",
            project: "Dorsin - Landing Page",
            task: "Apologize for shopping Error!",
            clientName: "Tonya Noble",
            assigned: [avatar6, avatar7],
            dueDate: "14 June, 2021",
            status: "Inprogress",
            priority: "Medium",
        },
        {
            ScrVerId: "VLZ-456",
            project: "Minimal - v2.1.0",
            task: "Support for theme",
            clientName: "Donald Palmer",
            assigned: [avatar2],
            dueDate: "25 June, 2021",
            status: "Closed",
            priority: "Low",
        },
        {
            ScrVerId: "VLZ-457",
            project: "Dason - v1.0.0",
            task: "Benner design for FB & Twitter",
            clientName: "Jennifer Carter",
            assigned: [avatar5, avatar6, avatar7, avatar8],
            dueDate: "14 Aug, 2021",
            status: "Inprogress",
            priority: "Medium",
        },
    ];
    return (
        <DataTable
            fixedHeader
            fixedHeaderScrollHeight="300px"
            columns={columns}
            data={data}
        />
    );
};
export default ScrollVertical;