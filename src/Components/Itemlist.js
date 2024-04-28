import { useDispatch } from "react-redux"
import { addItem } from "../RKT/cartSlice";

const Itemlist = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    };

    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div key={item.card.info.id}>

                            <div class="card mb-3 ms-auto me-auto  border border-0" style={{ width: 40 + "rem" }}>
                                <div class="row g-0 menucard ">
                                    <div class="col-md-6 mt-2 text-md-start">
                                        <h6>❇️</h6>
                                        <h6> {item.card.info.name}</h6>
                                        <p>  ₹ - {item.card.info.price / 100}</p>
                                    </div>
                                    <div class="col-md-6 ">
                                        <div class="card-body ms-5 ">
                                            <div className="position-relative  ">
                                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} alt='imgmenu' style={{ width: 7 + "rem", height: 6 + "rem" }} />
                                                <button className="position-absolute top-100 start-50 translate-middle btn btn-sm bg-dark  rounded-3 text-light " onClick={() => handleAddItem(item)}>Add + </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>


                    )

                })
            }
        </div>
    )
}
export default Itemlist;