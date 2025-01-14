import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Description List Alignment

const descriptionListCode =
    `
<!-- Description List -->
<dl className="row mb-0">
    <dt className="col-sm-3">Description lists</dt>
    <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

    <dt className="col-sm-3">Euismod</dt>
    <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

    <dt className="col-sm-3">Malesuada porta</dt>
    <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9 mb-0">
        <dl className="row mb-0">
            <dt className="col-sm-4">Nested definition list</dt>
            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
    </dd>
</dl>
`;

const DescriptionListExample = () => (
    <PrismCode
        code={descriptionListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DescriptionListExample