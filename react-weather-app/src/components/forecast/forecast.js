
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";

import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDay = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    //console.log(forecastDay);

    return (
        <>
            <label className="title">Week Forecast</label>
            <Accordion allowZeroExpanded>

                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDay[idx]} </label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max"> {Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_max)} °C</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">

                                <div className="daily-details-grid-item">
                                    <label>Wind Speed: </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity} %</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Feels like: </label>
                                    <label>{item.main.feels_like} °C</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );

}

export default Forecast;