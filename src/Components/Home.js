import Body2 from "./Body2";
import Body from './Body'
import useOnlinestatus from "./useOnlinestatus";
import Footer from "./footer";

const Home = () => {

    const online = useOnlinestatus();
    if (online === false)
        return (
            <h1> Looks Like You'r offline !!! Please Check Your Connection...</h1>
        )
    return (
        <>

            <Body2 />
            <Body />
            <Footer />

        </>
    )
}
export default Home;