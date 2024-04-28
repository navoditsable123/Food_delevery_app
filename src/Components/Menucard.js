



const Menucard = (props) => {

    const { resmenu } = props;

    const { link } = resmenu;


    return (
        <>

            <div className="  card my-2" style={{ width: 15 + "rem" }}>
                <img src={"https://www.swiggy.com/restaurants/" + link} className="card-img-top " alt="food" />
                {/* <img src={cloudinaryImageId} className="card-img-top " style={{ height: 10 + "rem" }} alt="food" /> */}
                <div className="card-body restocard1 " >

                </div>
            </div >

        </>
    )
}
export default Menucard;