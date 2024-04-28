import { useState } from 'react';
import foodlogo from '../Assets/food2.png'
import { NavLink } from 'react-router-dom';
import useOnlinestatus from './useOnlinestatus';
import SearchArray from './City';
import { useSelector } from 'react-redux';
const Header = () => {
    const [login, setlogin] = useState("LogIn");

    const online = useOnlinestatus();

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div >

            <div className='flex justify-between bg-slate-200 text-black'>
                <img src={foodlogo} alt="img" className=' w-24 ms-28' />
                <div className='mt-3 p-3 mx-4 fw-bold fs-5'>
                    <NavLink to="" className="me-4 text-decoration-none text-black">Home</NavLink>
                    <NavLink to="about" className="me-4 text-decoration-none text-black">About</NavLink>
                    <NavLink to="cart" className="me-4 text-decoration-none text-black">🛒-({cartItems.length})</NavLink>
                    <button type="button" className="me-4 px-2 py-1 bg-slate-500 text-white" onClick={() => {
                        login === "LogIn"
                            ? setlogin("LogOut")
                            : setlogin("LogIn");
                    }}>{login}</button>
                    Online Status: {online ? "✅" : "🔴"}
                </div>
            </div>


        </div>
    )
}
export default Header;

{/* <nav className="nav1 navbar navbar-expand-lg  ">
<div className="container-fluid ">
    <div className=" collapse navbar-collapse ">
        <img src={foodlogo} style={{ width: 130 + "px", height: 100 + "px" }} className='logo ' alt="logo" />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div></div>

    <div className="navbar1 collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className=" navbar-nav  mb-2 mb-lg-0 fw-bold fs-5 ">

            <li className="nav-item ps-4">
                <NavLink to="" className="nav-link active text-secondary" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item ps-4">
                <NavLink to="about" className="nav-link active text-secondary" aria-current="page" >About</NavLink>
            </li>
            <li className="nav-item ps-4">
                <NavLink to="cart" className="nav-link active text-secondary" aria-current="page" >🛒-({cartItems.length})</NavLink>
            </li>
            <li className="nav-item ps-4 mt-2">
               
                <SearchArray />
            </li>
            <li className="nav-item ps-4 ">
                <button type="button" className=' btn btn-secondary btn-sm mt-2' onClick={() => {
                    login === "LogIn"
                        ? setlogin("LogOut")
                        : setlogin("LogIn");
                }}>{login}</button>
            </li>
            <li className="nav-item ps-4 mt-2 " >
                Online Status: {online ? "✅" : "🔴"}
            </li>
        </ul>
    </div>

</div>
</nav> */}