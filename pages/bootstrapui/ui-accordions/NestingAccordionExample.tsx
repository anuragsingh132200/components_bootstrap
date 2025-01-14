import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const nestingAccordionCode =
`
<Accordion >
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            How Do I Add Contacts/Subscribers?
        </Accordion.Header>
        <Accordion.Body>
            This opt in method is perfect for those looking to integrate a different software such Shopify or Hubspot with Slicktext. For example, upon cashing out online, a subscriber may submit to have their mobile number to receive marketing messages. The API will pass this information from said software over to Slicktext via API integration.
                <Accordion>
                    <Accordion.Item eventKey='1'> 
                        <Accordion.Header>
                            How Do I Search For Contacts?
                        </Accordion.Header>
                        <Accordion.Body>
                            When you are in need of finding a specific subscriber, you will want to use the help of SlickText's search navigation tool, located under the Contacts tab of your Slicktext account. Once here, you will have options to sort by, filter, and search your contacts.
                                <Accordion>
                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header className="accordion-header" id="accordionnesting4Example2">
                                            How do I reset my digital tide watch ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>
                            How Do I Delete a Contact From My List?
                        </Accordion.Header>
                        <Accordion.Body>
                            Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='4'>
        <Accordion.Header>
            How Does Personalization Work?
        </Accordion.Header>
            <Accordion.Body>
                Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields.
                <Accordion>
                    <Accordion.Item eventKey='5'>
                        <Accordion.Header>
                            Howe does temperature impact my watch?
                        </Accordion.Header>
                        <Accordion.Body>
                            Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='6'>
        <Accordion.Header>
            What Happens When I Run Out of Messages?
        </Accordion.Header>
        <Accordion.Body>
            When you run out of messages, you will not be able to send any outbound campaigns. This would include any scheduled messages, drip campaigns, and birthday messages. However, we will continue to deliver your auto-reply messages to allow your subscriber list to continue to grow.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const NestingAccordionExample = () => (
    <PrismCode
        code={nestingAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default NestingAccordionExample;