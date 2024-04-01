import { useState } from "react";
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId);
    }
    return (
        <div className="Wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                                onClick={() => handleSingleSelection(dataItem.id)}
                                className="title">
                                <h4>{dataItem.question}</h4>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}

// https://www.youtube.com/watch?v=5ZdHfJVAY-s&ab_channel=freeCodeCamp.org   15 23 te kaldim
