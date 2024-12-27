import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Image Rounded & Circle

const imgRoundedCircleCode =
    `
<!-- Rounded Image -->
<Image className="rounded" alt="200x200" width="200" src={img4} data-holder-rendered="true" />

<!-- Rounded-circle Image -->
<img className="rounded-circle avatar-xl" alt="200x200" src={avatar4} />
`;

const ImgRoundedCircleExample = () => (
    <PrismCode
        code={imgRoundedCircleCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ImgRoundedCircleExample;