import { useEffect, useState } from "react"
import Card, { withPromotedCard } from "./Card"
import { NavLink } from "react-router-dom"

import Shimar2 from "./Shimar2"


const Body = () => {
    const [resto, settopResto] = useState([])
    const [filterResto, setFilterResto] = useState([])
    const [searchText, setSearchText] = useState("")

    const PromotedCard = withPromotedCard(Card);

    const fetchdata = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const responseData = await response.json();
        settopResto(responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(responseData)
    };

    useEffect(() => {
        fetchdata();
    }, []);


    return resto.length === 0 ? (
        <Shimar2 />
    ) : (
        <div className="resto1  ">
            <div className="d-flex mt-0 ms-5">
                <div><h2 className='ms-5'>Top restaurant chains in Amravati</h2></div>
                <div className=" justify-content-start ms-5 ">
                    {/* <button onClick={() => {
                        const topResto = resto.filter((rest) => rest.info.avgRating > 4.2);
                        console.log(topResto)
                        settopResto(topResto);
                    }} type="button" className="btn btn-secondary  ms-5">Top Rating Restaurant</button> */}
                </div>


                <div className=" justify-content-start ms-5 ">
                    <input className="" type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}></input>
                    <button className="" onClick={() => {
                        console.log(searchText)
                        const filteredResto = resto.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        // settopResto((prevResto) => {
                        //     const searchTextValue = searchText.trim().toLowerCase();
                        //     const search = prevResto.filter((res) => res.info.name.toLowerCase().includes(searchTextValue)
                        //     )
                        //     return search;
                        // })

                        setFilterResto(filteredResto);

                    }}>Search</button>
                </div>
            </div>
            <div className="reslist1">
                {resto && resto.map((res) => {
                    return (
                        <NavLink className="  text-decoration-none " key={res.info.id} to={"/menu/" + res.info.id}>
                            {res.info.aggregatedDiscountInfoV3 ? (
                                <PromotedCard resData={res?.info} />
                            ) : (
                                <Card resData={res?.info} />
                            )
                            }</NavLink>
                    )
                })
                }
            </div>
        </div>
    )
}
export default Body;