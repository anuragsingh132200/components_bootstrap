import React, { useEffect, useState } from "react";
import Router from "next/router";
const Navdata = () => {
    //state data
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Bootstrap Ui
    const [isBoostrapUi, setIsBoostrapUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isCustomUi, setIsCustomUi] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [isCurrentState, setIsCurrentState] = useState('');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (isCurrentState === 'Dashboard') {
            Router.push("/components");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState !== 'BoostrapUi') {
            setIsBoostrapUi(false);
        }
        if (isCurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (isCurrentState !== 'CustomUi') {
            setIsCustomUi(false);
        }
        if (isCurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (isCurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (isCurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (isCurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (isCurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (isCurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
    },
    [
        isCurrentState,
        isBoostrapUi,
        isAdvanceUi,
        isCustomUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel,
]);

    const menuItems: any = [
        {
            label: "Components",
            isHeader: true,
        },
        {
            id: "components",
            label: "Overview",
            link: "/components",
            icon: "bi bi-command",
            parentId: "component",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Dashboard');
            },
        },
        {
            id: "boostrapui",
            label: "Bootstrap UI",
            icon: "bi bi-radioactive",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsBoostrapUi(!isBoostrapUi);
                setIsCurrentState('BoostrapUi');
                updateIconSidebar(e);
            },
            stateVariables: isBoostrapUi,
            subItems: [
                {
                    id: "alerts",
                    label: "Alerts",
                    link: "/bootstrapui/ui-alert",
                    parentId: "boostrapui",
                },
                    { id: 2, label: "Badges", link: "/bootstrapui/ui-badges", parentId: "boostrapui" },
                    { id: 3, label: "Buttons", link: "/bootstrapui/ui-buttons", parentId: "boostrapui" },
                    { id: 4, label: "Colors", link: "/bootstrapui/ui-color", parentId: "boostrapui" },
                    { id: 5, label: "Cards", link: "/bootstrapui/ui-cards", parentId: "boostrapui" },
                    { id: 6, label: "Carousel", link: "/bootstrapui/ui-carousel", parentId: "boostrapui" },
                    { id: 7, label: "Dropdowns", link: "/bootstrapui/ui-dropdown", parentId: "boostrapui" },
                    { id: 8, label: "Grid", link: "/bootstrapui/ui-grid", parentId: "boostrapui" },
                    { id: 9, label: "Images", link: "/bootstrapui/ui-images", parentId: "boostrapui" },
                    { id: 10, label: "Tabs", link: "/bootstrapui/ui-tabs", parentId: "boostrapui" },
                    { id: 11, label: "Accordion & Collapse", link: "/bootstrapui/ui-accordions", parentId: "boostrapui" },
                    { id: 12, label: "Modals", link: "/bootstrapui/ui-modals", parentId: "boostrapui" },
                    { id: 13, label: "Offcanvas", link: "/bootstrapui/ui-offcanvas", parentId: "boostrapui" },
                    { id: 14, label: "Placeholders", link: "/bootstrapui/ui-placeholder", parentId: "boostrapui" },
                    { id: 15, label: "Progress", link: "/bootstrapui/ui-progress", parentId: "boostrapui" },
                    { id: 16, label: "Notifications", link: "/bootstrapui/ui-notifications", parentId: "boostrapui" },
                    { id: 17, label: "Media Object", link: "/bootstrapui/ui-mediaObject", parentId: "boostrapui" },
                    { id: 18, label: "Embed Video", link: "/bootstrapui/ui-embedVideo", parentId: "boostrapui" },
                    { id: 19, label: "Typography", link: "/bootstrapui/ui-typography", parentId: "boostrapui" },
                    { id: 20, label: "Lists", link: "/bootstrapui/ui-lists", parentId: "boostrapui" },
                    { id: 21, label: "General", link: "/bootstrapui/ui-general", parentId: "boostrapui" },
                    { id: 22, label: "Utilities", link: "/bootstrapui/ui-utilities", parentId: "boostrapui" }
            ],
        },
        {
            id: "advanceui",
            label: "Advance UI",
            icon: "bi bi-layers",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAdvanceUi(!isAdvanceUi);
                setIsCurrentState('AdvanceUi');
                updateIconSidebar(e);
            },
            stateVariables: isAdvanceUi,
            subItems: [
                {
                    id: "scrollbar",
                    label: "Scrollbar",
                    link: "/advanceui/ui-scrollbar",
                    parentId: "advanceui",
                },
                { id: 2, label: "Swiper Slider", link: "/advanceui/ui-swiperSlider", parentId: "advanceui" },
                { id: 3, label: "Ratings", link: "/advanceui/ui-ratings", parentId: "advanceui" },
                { id: 4, label: "Highlight", link: "/advanceui/ui-highlight", parentId: "advanceui" },
            ],
        },
        {
            id: "customui",
            label: "Custom UI",
            icon: "bi bi-tools",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCustomUi(!isCustomUi);
                setIsCurrentState('CustomUi');
                updateIconSidebar(e);
            },
            stateVariables: isCustomUi,
            subItems: [
                {
                    id: "ribbons",
                    label: "Ribbons",
                    link: "/customUI/ui-ribbons",
                    parentId: "customui",
                },
                { id: 2, label: "Profile", link: "/customUI/ui-profile", parentId: "customui" },
                { id: 3, label: "Counter", link: "/customUI/ui-counter", parentId: "customui" },
            ],
        },
        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsForms(!isForms);
                setIsCurrentState('Forms');
                updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                {
                    id: "basicElements",
                    label: "Basic Elements",
                    link: "/Forms/basic-elements",
                    parentId: "forms",
                },
                { id: 2, label: "Form Select", link: "/Forms/form-select", parentId: "forms" },
                { id: 3, label: "Checkboxs & Radio", link: "/Forms/checkbox-radio", parentId: "forms" },
                { id: 4, label: "Pickers", link: "/Forms/form-pickers", parentId: "forms" },
                { id: 5, label: "Input Masks", link: "/Forms/input-masks", parentId: "forms" },
                { id: 6, label: "Advanced", link: "/Forms/form-advanced", parentId: "forms" },
                { id: 7, label: "Range Slider", link: "/Forms/range-slider", parentId: "forms" },
                { id: 8, label: "Validation", link: "/Forms/forms-validation", parentId: "forms" },
                { id: 9, label: "Wizard", link: "/Forms/forms-wizard", parentId: "forms" },
                { id: 10, label: "Editors", link: "/Forms/form-editors", parentId: "forms" },
                { id: 11, label: "File Uploads", link: "/Forms/file-upload", parentId: "forms" },
                { id: 12, label: "Form Layouts", link: "/Forms/form-layout", parentId: "forms" },
                { id: 13, label: "React Select", link: "/Forms/react-select", parentId: "forms" },
            ],
        },
        {
            id: "tables",
            label: "Tables",
            icon: "bi bi-table",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsTables(!isTables);
                setIsCurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
                {
                    id: "basicTables",
                    label: "Basic Elements",
                    link: "/Tabel/basic-tables",
                    parentId: "tables",
                },
                { id: 2, label: "React Table", link: "/Tabel/react-tables", parentId: "tables" },
                { id: 3, label: "Datatables", link: "/Tabel/data-tables", parentId: "tables" },
            ],
        },
        {
            id: "apexcharts",
            label: "Apexcharts",
            icon: "bi bi-pie-chart",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIsCurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                {
                    id: "line",
                    label: "Line",
                    link: "/Charts/line-charts",
                    parentId: "apexcharts",
                },
                { id: 1, label: "Area", link: "/Charts/area-charts", parentId: "apexcharts" },
                { id: 2, label: "Column", link: "/Charts/column-charts", parentId: "apexcharts" },
                { id: 3, label: "Bar", link: "/Charts/bar-charts", parentId: "apexcharts" },
                { id: 4, label: "Mixed", link: "/Charts/mixed-charts", parentId: "apexcharts" },
                { id: 5, label: "Timeline", link: "/Charts/timeline-charts", parentId: "apexcharts" },
                { id: 6, label: "Candlestick", link: "/Charts/candlestick-chart", parentId: "apexcharts" },
                { id: 7, label: "Boxplot", link: "/Charts/boxplot-charts", parentId: "apexcharts" },
                { id: 8, label: "Bubble", link: "/Charts/bubble-chart", parentId: "apexcharts" },
                { id: 9, label: "Scatter", link: "/Charts/scatter-charts", parentId: "apexcharts" },
                { id: 10, label: "Heatmap", link: "/Charts/heatmap-charts", parentId: "apexcharts" },
                { id: 11, label: "Treemap", link: "/Charts/treemap-charts", parentId: "apexcharts" },
                { id: 12, label: "Pie", link: "/Charts/pie-charts", parentId: "apexcharts" },
                { id: 13, label: "Radialbar", link: "/Charts/radialbar-charts", parentId: "apexcharts" },
                { id: 14, label: "Radar", link: "/Charts/radar-charts", parentId: "apexcharts" },
                { id: 15, label: "Polar", link: "/Charts/polar-charts", parentId: "apexcharts" },
            ],
        },
        {
            id: "icons",
            label: "Icons",
            icon: "bi bi-usb-symbol",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsIcons(!isIcons);
                setIsCurrentState('Icons');
                updateIconSidebar(e);
            },
            stateVariables: isIcons,
            subItems: [
                {
                    id: "remix",
                    label: "Remix",
                    link: "/Icons/remix-icons",
                    parentId: "icons",
                },
                { id: 2, label: "BoxIcons", link: "/Icons/box-icons", parentId: "icons" },
                { id: 3, label: "Material Design", link: "/Icons/material-design", parentId: "icons" },
                { id: 4, label: "Bootstrap", link: "/Icons/bootstrap-icons", parentId: "icons" },
                { id: 5, label: "Phosphor", link: "/Icons/phosphor-icons", parentId: "icons" },
            ],
        },
        {
            id: "maps",
            label: "Maps",
            icon: "bi bi-geo-alt",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsMaps(!isMaps);
                setIsCurrentState('Maps');
                updateIconSidebar(e);
            },
            stateVariables: isMaps,
            subItems: [
                {
                    id: "googleMaps",
                    label: "Google Maps",
                    link: "/Maps/google-maps",
                    parentId: "maps",
                },
            ],
        },
        {
            id: "multilevel",
            label: "Multi Level",
            icon: "bi bi-share",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsMultiLevel(!isMultiLevel);
                setIsCurrentState('MuliLevel');
                updateIconSidebar(e);
            },
            stateVariables: isMultiLevel,
            subItems: [
                { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
                {
                    id: "level1.2",
                    label: "Level 1.2",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Level 2.1", link: "/#" },
                        {
                            id: "level2.2",
                            label: "Level 2.2",
                            link: "/#",
                            isChildItem: true,
                            click: function (e: any) {
                                e.preventDefault();
                                setIsLevel2(!isLevel2);
                            },
                            stateVariables: isLevel2,
                            childItems: [
                                { id: 1, label: "Level 3.1", link: "/#" },
                                { id: 2, label: "Level 3.2", link: "/#" },
                            ]
                        },
                    ]
                },
            ],
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;