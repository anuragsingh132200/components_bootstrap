import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Display Headings

const displayHeadingCode =
    `
<!-- Display Headings -->
<h1 className="display-1 mb-4">Display 1</h1>

<h1 className="display-2 mb-4">Display 2</h1>

<h1 className="display-3 mb-4">Display 3</h1>

<h1 className="display-4 mb-4">Display 4</h1>

<h1 className="display-5 mb-4">Display 5</h1>

<h1 className="display-6 mb-0">Display 6</h1>
`;

const DisplayHeadingExample = () => (
    <PrismCode
        code={displayHeadingCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DisplayHeadingExample;