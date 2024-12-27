import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Unstyled List

const unstyleListCode =
    `
<!-- Unstyle List -->
<ul className="list-unstyled">
    <li>Integer molestie lorem at massa</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
</ul>
`;

const UnstyleListExample = () => (
    <PrismCode
        code={unstyleListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default UnstyleListExample