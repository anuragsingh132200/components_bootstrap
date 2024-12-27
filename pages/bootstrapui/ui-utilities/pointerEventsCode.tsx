import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Pointer Events

const pointerEventsCode =
`
<!-- Pointer events -->
<p><Link href="#" className="text-success pe-none" tabIndex={-1}>This link</Link> can not be clicked.</p>

<p><Link href="#" className="text-success pe-auto">This link</Link> can be clicked (this is default behavior).</p>

<p className="pe-none mb-0"><Link href="#" className="text-success" tabIndex={-1}>This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link href="#" className="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
`;

const PointerEventsExample = () => (
    <PrismCode
        code={pointerEventsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default PointerEventsExample;
