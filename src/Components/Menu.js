import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ResCategory from "./ResCategory";


const Menu = () => {
    const [menu, setmenu] = useState(null)
    const { resId } = useParams();

    const menudata = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const jsondata = await response.json()
        console.log(jsondata)
        setmenu(jsondata.data)

    }
    useEffect(() => {
        menudata();
    }, [])

    const { name, cuisines, locality, city, avgRatingString, totalRatingsString, costForTwoMessage, message } = menu?.cards[0]?.card?.card?.info || "";
    const { itemCards } = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];
    console.log(menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)
    return (
        <div className="menucard">
            <div>
                <div class="card mb-3 ms-auto me-auto mt-5 border border-0" style={{ width: 40 + "rem" }}>
                    <div class="row g-0 menucard ">
                        <div class="col-md-6 mt-3 text-md-start">
                            <h3 class="card-title">{name}</h3>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{cuisines}</h6>
                            <h6 class="card-text">{locality} - {city}</h6>
                            <h6 class="card-text">{costForTwoMessage}</h6>
                            <h6 class="card-text">{message}</h6>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body text-md-end">
                                <button type="button" class="btn btn-light text-success">✳ {avgRatingString}<br /><hr />{totalRatingsString}</button><br />

                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div>
                {
                    categories && categories.map((c) => {
                        return (
                            <ResCategory key={c?.card?.card?.id} data={c?.card?.card} />
                        )
                    })
                }

            </div>


            {/* <div>
                <h2>Recommended Menu</h2>
                {
                    itemCards && itemCards.map((item) => (
                        <div class="card mb-3 ms-auto me-auto mt-5 border border-0" style={{ width: 40 + "rem" }}>
                            <div class="row g-0 menucard ">
                                <div class="col-md-6 mt-3 text-md-start">
                                    <h5> {item.card.info.name}</h5>
                                    <h6> {"Rs"}-{item.card.info.price}</h6>
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body text-md-end">
                                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} alt='imgmenu' style={{ width: 8 + "rem", }} />
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}
export default Menu;

