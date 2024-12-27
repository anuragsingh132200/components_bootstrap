import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const customContentCode =
    `
<!-- Custom Content -->
<ListGroup>
    <ListGroup.Item as='a' href="#" active className="list-group-item-action">
        <div className="float-end">
            Pending
        </div>
        <div className="d-flex mb-2 align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar1} alt="" className="avatar-sm rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-3">
                <h5 className="list-title fs-15 mb-1">Charlie Pritchard</h5>
                <p className="list-text mb-0 fs-12">12 min Ago</p>
            </div>
        </div>
        <p className="list-text mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
    </ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action">
        <div className="float-end">
            Pending
        </div>
        <div className="d-flex mb-2 align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar2} alt="" className="avatar-sm rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-3">
                <h5 className="list-title fs-15 mb-1">Dominic Charlton</h5>
                <p className="list-text mb-0 fs-12">12 min Ago</p>
            </div>
        </div>
        <p className="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.</p>
    </ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action">
        <div className="float-end">
            Rejected
        </div>
        <div className="d-flex mb-2 align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar3} alt="" className="avatar-sm rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-3">
                <h5 className="list-title fs-15 mb-1">Declan Long</h5>
                <p className="list-text mb-0 fs-12">12 min Ago</p>
            </div>
        </div>
        <p className="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
    </ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action">
        <div className="float-end">
            Successful
        </div>
        <div className="d-flex mb-2 align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar4} alt="" className="avatar-sm rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-3">
                <h5 className="list-title fs-15 mb-1">Angela Bernier</h5>
                <p className="list-text mb-0 fs-12">5 days Ago</p>
            </div>
        </div>
        <p className="list-text mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.</p>
    </ListGroup.Item>
</ListGroup>
`;

const CustomContentExample = () => (
    <PrismCode
        code={customContentCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default CustomContentExample;
