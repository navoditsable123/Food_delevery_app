

const Card = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name,
        avgRating,
        cuisines } = resData;


    return (
        <>
            <div className="  card my-2 w-56 me-2 bg-slate-300"  >
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className="card-img-top " style={{ height: 10 + "rem" }} alt="food" />
                <div className=" text-start mt-2 ms-3 h-32 ">
                    <div ><h6 >{name}</h6></div>
                    <div> rating {avgRating} </div>
                    <div> {cuisines.slice(0, 3).join(", ")}<br /></div>
                </div>
            </div >
        </>
    )
}

// Higher Order component

export const withPromotedCard = (Card) => {
    return (props) => {
        return (
            <div className="position-relative">
                <Card {...props} />
                <label className="position-absolute top-0 start-0 bg-dark p-1 rounded-3 text-light px-3 ">🎁 Offer  </label>
            </div>

        )
    }
}
export default Card;