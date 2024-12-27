import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Dropdown, Form } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from "next/dynamic";

const DataTable = dynamic(() => import("react-data-table-component"), {ssr: false,});



import btc from "@assets/images/svg/crypto-icons/btc.svg";
import eth from "@assets/images/svg/crypto-icons/eth.svg";
import ltc from "@assets/images/svg/crypto-icons/ltc.svg";
import xmr from "@assets/images/svg/crypto-icons/xmr.svg";
import ant from "@assets/images/svg/crypto-icons/ant.svg";
import sol from "@assets/images/svg/crypto-icons/sol.svg";
import fil from "@assets/images/svg/crypto-icons/fil.svg";
import aave from "@assets/images/svg/crypto-icons/aave.svg";
import ada from "@assets/images/svg/crypto-icons/ada.svg";

const AlternativePagination = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>SR No.</span>,
            selector: (row:any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Currency</span>,
            sortable: true,
            selector: (cell:any) => {
                return (
                    <React.Fragment>
                        <div className="d-flex align-items-center fw-medium" >
                            <Image src={cell.currency[0]} alt="" className="avatar-xxs me-2" />
                            <Link href="#" className="currency_name">{cell.currency[1]}</Link>
                        </div>
                    </React.Fragment>);
            },
        },
        {
            name: <span className='font-weight-bold fs-13'>Price</span>,
            selector: (row:any) => row.price,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Pairs</span>,
            selector: (row:any) => row.pairs,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>24 High</span>,
            selector: (row:any) => row.high,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>24 Low</span>,
            selector: (row:any) => row.low,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Market Volume</span>,
            selector: (row:any) => row.marketVolume,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Volume %</span>,
            sortable: true,
            selector: (cell:any) => {
                return (
                    <h6 className={"fs-13 mb-0 text-" + cell.volumeClass} > <i className={"align-middle me-1 " + cell.icon}></i>{cell.volume}</h6>
                );
            },
        },
        {
            name: <span className='font-weight-bold fs-13'>Action</span>,
            sortable: true,
            cell: () => {
                return (<button className="btn btn-sm btn-soft-info">Trade Now</button>);
            },
        },
    ];

    const data = [
        {
            srNo: "01",
            currency: [btc, "Bitcoin (BTC)"],
            price: "$47,071.60",
            pairs: "BTC/USD",
            high: "$28,722.76",
            low: "$68,789.63",
            marketVolume: "$888,411,910",
            volume: "1.50%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "02",
            currency: [eth, "Ethereum (ETH)"],
            price: "$3,813.14",
            pairs: "ETH/USDT",
            high: "$4,036.24",
            low: "$3,588.14",
            marketVolume: "$314,520,675",
            volume: "0.42%",
            icon: "mdi mdi-trending-down",
            volumeClass: "danger"
        },
        {
            srNo: "03",
            currency: [ltc, "Litecoin (LTC)"],
            price: "$149.65",
            pairs: "LTC/USDT",
            high: "$412.96",
            low: "$104.33",
            marketVolume: "$314,520,675",
            volume: "0.89%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "04",
            currency: [xmr, "Monero (XMR)"],
            price: "$17,491.16",
            pairs: "XRM/USDT",
            high: "$31,578.35",
            low: "$8691.75",
            marketVolume: "$9,847,327",
            volume: "1.92%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "05",
            currency: [ant, "Aragon (ANT)"],
            price: "$172.93",
            pairs: "SOL/USD",
            high: "$178.37",
            low: "$172.3",
            marketVolume: "$40,559,274",
            volume: "2.87%",
            icon: "mdi mdi-trending-down",
            volumeClass: "danger"
        },
        {
            srNo: "06",
            currency: [sol, "Solana (SOL)"],
            price: "$17,491.16",
            pairs: "XRM/USDT",
            high: "$31,578.35",
            low: "$8691.75",
            marketVolume: "$9,847,327",
            volume: "1.92%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "07",
            currency: [fil, "Filecoin (FIL)"],
            price: "$13.31",
            pairs: "ANT/USD",
            high: "$13.85",
            low: "$12.53",
            marketVolume: "$156,209,195.18",
            volume: "3.96%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "08",
            currency: [fil, "Filecoin (FIL)"],
            price: "$35.21",
            pairs: "FIL/USD",
            high: "$36.41",
            low: "$35.03",
            marketVolume: "$374,618,945.51",
            volume: "0.84%",
            icon: "mdi mdi-trending-down",
            volumeClass: "danger"
        },
        {
            srNo: "09",
            currency: [aave, "Aave (AAVE)"],
            price: "$275.47",
            pairs: "AAVE/USDT",
            high: "$277.11",
            low: "$255.01",
            marketVolume: "$156,209,195.18",
            volume: "8.20%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "10",
            currency: [ada, "Cardano (ADA)"],
            price: "$1.35",
            pairs: "ADA/USD",
            high: "$1.39",
            low: "$1.32",
            marketVolume: "$880,387,980.14",
            volume: "0.42%",
            icon: "mdi mdi-trending-down",
            volumeClass: "danger"
        },
        {
            srNo: "11",
            currency: [fil, "Filecoin (FIL)"],
            price: "$35.21",
            pairs: "FIL/USD",
            high: "$36.41",
            low: "$35.03",
            marketVolume: "$374,618,945.51",
            volume: "0.84%",
            icon: "mdi mdi-trending-down",
            volumeClass: "danger"
        },
        {
            srNo: "12",
            currency: [aave, "Aave (AAVE)"],
            price: "$275.47",
            pairs: "AAVE/USDT",
            high: "$277.11",
            low: "$255.01",
            marketVolume: "$156,209,195.18",
            volume: "8.20%",
            icon: "mdi mdi-trending-up",
            volumeClass: "success"
        },
        {
            srNo: "13",
            currency: [ada, "Cardano (ADA)"],
            price: "$1.35",
            pairs: "ADA/USD",
            high: "$1.39",
            low: "$1.32",
            marketVolume: "$880,387,980.14",
            volume: "0.42%",
            icon: "mdi mdi-trending-down",
            volumeClass: "danger"
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

export default AlternativePagination;