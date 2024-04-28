import { useEffect, useState } from "react"
import Card2 from "./Cards2"
import Shimar from "./Shimar"
import { Carousel } from "react-bootstrap"


const Body2 = () => {
    const [resto2, settopResto2] = useState([]);
    const [chunks, setChunks] = useState([]); // State to store chunks of resto2
    const [activeIndex, setActiveIndex] = useState(0);


    const fetchdata2 = async () => {
        const response2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const responseData2 = await response2.json();
        // console.log(responseData2?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        settopResto2(responseData2?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
    useEffect(() => {
        fetchdata2();
    }, []);

    useEffect(() => {
        if (resto2.length > 0) {
            const newChunks = [];
            for (let i = 0; i < resto2.length; i += 4) {
                newChunks.push(resto2.slice(i, i + 4));
            }
            setChunks(newChunks);
        }
    }, [resto2]);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex); // Update active index when selecting a different item
    };


    return resto2.length === 0 ? (
        <Shimar />
    ) : (

        <div className="resto2">
            <div className="d-flex justify-content-between align-items-center px-3 ms-5">
                <h3 className="fw-bold mt-5 ms-5">What's on your mind?</h3>
            </div>
            <div>

                <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="reslist1">
                    {chunks.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <div className="row">
                                {chunk.map((res2, idx) => (
                                    <div key={res2.id} className="col-md-3">
                                        <Card2 resData2={res2} />
                                    </div>
                                ))}
                                {[...Array(10 - chunk.length)].map((_, idx) => (
                                    <div key={idx} className="col-md-4"></div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        </div>

        // <div id="carouselExample" class="carousel slide">
        //     <div class="carousel-inner ">
        //         <div class="carousel-item active d-flex">
        //             {
        //                 resto2.map((res2) => {
        //                     return (

        //                         <Card2 key={res2.id} resData2={res2} />
        //                     )

        //                 })
        //             }
        //         </div>

        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Previous</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Next</span>
        //     </button>
        // </div>
        // <div className="resto2">
        //     <div className="d-flex justify-content-start ms-5">
        //         <h3 className="ms-5 mt-4 fw-bold">What's on your mind?</h3>
        //     </div>
        //     <div className="reslist1">
        //         {
        //             resto2.map((res2) => {
        //                 return (

        //                     <Card2 key={res2.id} resData2={res2} />
        //                 )

        //             })
        //         }
        //     </div>
        // </div>
    )
}
export default Body2;