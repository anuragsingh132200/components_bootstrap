import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const javaScriptCode =
`function myFunction() {
    var divElement = document.getElementById("myDIV");
    if (divElement.style.display === "none") {
      divElement.style.display = "block";
    } else {
      divElement.style.display = "none";
    }
}
`;

const JavaScriptExample = () => (
    <PrismCode
        code={javaScriptCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default JavaScriptExample;