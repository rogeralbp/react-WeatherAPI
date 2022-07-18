import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";


const Forecast = ({ data }) => {

    return(
    <>
        <label className="title">Week Forecast</label>
        <Accordion allowZeroExpanded>

            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
            ))}

        </Accordion>
    </>
    );

}

export default Forecast;