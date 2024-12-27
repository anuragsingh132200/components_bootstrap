import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Overflow

const overflowCode =
    `
<!-- Overflow -->
    <div className="overflow-auto p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
    </div>
    
    <div className="overflow-hidden p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    
    <div className="overflow-visible p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>

    <div className="overflow-scroll p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
`;

const OverflowExample = () => (
    <PrismCode
        code={overflowCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default OverflowExample