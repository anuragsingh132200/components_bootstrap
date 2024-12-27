import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const imgSizesCode =
    `
<!-- Image Sizes -->
<Image src={avatar2} alt="" className="rounded avatar-xxs" />

<Image src={avatar10} alt="" className="rounded avatar-xs" />

<Image src={avatar3} alt="" className="rounded avatar-sm" />

<Image src={avatar4} alt="" className="rounded avatar-md" />

<Image src={avatar5} alt="" className="rounded avatar-lg" />

<Image src={avatar8} alt="" className="rounded avatar-xl" />

<Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />

<Image src={avatar10} alt="" className="rounded-circle avatar-xs" />

<Image src={avatar3} alt="" className="rounded-circle avatar-sm" />

<Image src={avatar4} alt="" className="rounded-circle avatar-md" />

<Image src={avatar5} alt="" className="rounded-circle avatar-lg" />

<Image src={avatar8} alt="" className="rounded-circle avatar-xl" />
`;

const ImgSizesExample = () => (
    <PrismCode
        code={imgSizesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ImgSizesExample; 