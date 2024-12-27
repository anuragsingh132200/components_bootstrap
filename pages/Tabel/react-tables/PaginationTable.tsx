import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "@common/TableContainer"
import { Spinner } from 'react-bootstrap';
import Link from 'next/link';

const PaginationTable = () => {
    const paginationTable =
      [{ id: "#VL2111", name: "Jonathan", date: "07 Oct, 2021", total: "$24.05", status: "Paid" },
      { id: "#VL2110", name: "Harold", date: "07 Oct, 2021", total: "$26.15", status: "Paid" },
      { id: "#VL2109", name: "Shannon", date: "06 Oct, 2021", total: "$21.25", status: "Refund" },
      { id: "#VL2108", name: "Robert", date: "05 Oct, 2021", total: "$25.03", status: "Paid" },
      { id: "#VL2107", name: "Noel", date: "05 Oct, 2021", total: "$22.61", status: "Paid" },
      { id: "#VL2106", name: "Traci", date: "04 Oct, 2021", total: "$24.05", status: "Paid" },
      { id: "#VL2105", name: "Kerry", date: "04 Oct, 2021", total: "$26.15", status: "Paid" },
      { id: "#VL2104", name: "Patsy", date: "04 Oct, 2021", total: "$21.25", status: "Refund" },
      { id: "#VL2103", name: "Cathy", date: "03 Oct, 2021", total: "$22.61", status: "Paid" },
      { id: "#VL2102", name: "Tyrone", date: "03 Oct, 2021", total: "$25.03", status: "Paid" }]
  
    const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: (cellProps: any) => {
            return (
              <Link href="#" className="fw-medium">{cellProps.id}</Link>
            )
          },
          disableFilters: true,
          filterable: false,
        },
  
        {
          Header: "Name",
          accessor: "name",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Date",
          accessor: "date",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Total",
          accessor: "total",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Status",
          disableFilters: true,
          filterable: true,
          accessor: (cellProps: any) => {
            switch (cellProps.status) {
              case "Paid":
                return (<span className="badge badge-soft-success text-uppercase"> {cellProps.status}</span>)
              case "Refund":
                return (<span className="badge badge-soft-warning text-uppercase"> {cellProps.status}</span>)
              default:
                return (<span className="badge badge-soft-danger text-uppercase"> {cellProps.status}</span>)
            }
          },
        },
        {
          Header: "Actions",
          disableFilters: true,
          filterable: true,
          accessor: (cellProps: any) => {
            return (
              <React.Fragment>
                <button type='button' className='btn btn-sm'>Details</button>
              </React.Fragment>
            )
          },
        },
      ],
      []
    );
  
    return (
      <React.Fragment >
        <TableContainer
          columns={(columns || [])}
          data={(paginationTable || [])}
          isPagination={true}
          // isGlobalFilter={false}
          iscustomPageSize={false}
          isBordered={false}
          customPageSize={5}
          className="custom-header-css table align-middle table-nowrap"
          tableClassName="table-centered align-middle table-nowrap mb-0"
          theadClassName="text-muted table-light"
          SearchPlaceholder='Search Products...'
        />
      </React.Fragment >
    );
  };

  export default PaginationTable;