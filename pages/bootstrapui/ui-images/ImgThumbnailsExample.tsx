import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })
const imgThumbnailsCode =
    `
<!-- Thumbnails Images -->
<Image className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true" />

<Image className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} data-holder-rendered="true" />
`;

const ImgThumbnailsExample = () => (
    <PrismCode
        code={imgThumbnailsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ImgThumbnailsExample;