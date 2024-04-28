
const Card2 = (props) => {
    const { resData2 } = props;
    const { imageId } = resData2;
    return (
        <>
            <div className="card my-2 bg-secondary border border-0" style={{ width: 16 + "rem" }}>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId} className="card-img-top " style={{ height: 10 + "rem" }} alt="food" />
            </div >
        </>
    )
}
export default Card2;