import { useState } from "react";
import Itemlist from "./Itemlist";


const ResCategory = ({ data }) => {


    return (
        <div className="accordion mb-4 w-50 ms-auto me-auto" id="accordionPanelsStayOpenExample">
            <div className="accordion-item bg-light" >
                <h2 className="accordion-header " >

                    <button className="accordion-button fw-bold bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <h5>{data.title} ({data.itemCards.length})</h5>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <Itemlist items={data.itemCards} />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default ResCategory;