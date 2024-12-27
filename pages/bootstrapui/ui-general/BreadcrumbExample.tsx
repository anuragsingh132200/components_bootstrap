import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const breadcrumbCode =
`
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }} >
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item> Library </Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
    <Breadcrumb.Item> General </Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
    <Breadcrumb.Item href="#"><i className="ri-home-5-fill" /></Breadcrumb.Item>
    <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
    <Breadcrumb.Item> General </Breadcrumb.Item>
</Breadcrumb>
`;

const BreadcrumbExample = () => (
    <PrismCode
        code={breadcrumbCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default BreadcrumbExample;