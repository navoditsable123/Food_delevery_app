import google from '../Assets/googleplay.png'
import appstore from '../Assets/app.png'

const Footer = () => {
    return (
        <div className="h-100">
            <div className="text-bg-light h-25 d-flex flex-wrap  justify-content-around">
                <h2 className="text-start ms-5 mt-4">For better experience,download <br></br> the Swiggy app now</h2>
                <img src={google} style={{ width: 13 + "rem" }} className='ms-5 mt-4' alt='img' />
                <img src={appstore} style={{ width: 17 + "rem" }} className=' mt-4' alt='img' />
            </div>
            <div className='d-flex  justify-content-center text-bg-dark mt-3'>
                <ul className='mt-4 me-5 list-unstyled text-start text-secondary'>
                    <h5 className='text-white'>🍔 Swiggy</h5>
                    <li>© 2023 Bundl</li>
                    <li>Technologies Pvt. Ltd</li>
                </ul>
                <ul className='mt-4 me-5 list-unstyled text-start text-secondary'>
                    <h5 className='text-white'>🏛️ Company</h5>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                </ul>
                <ul className='mt-4  me-5 list-unstyled text-start text-secondary'>
                    <h5 className='text-white'>📞 Contact Us</h5>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className='mt-4 list-unstyled text-start text-secondary'>
                    <h5 className='text-white'>🛵 We Deliver to</h5>
                    <li>Amaravati</li>
                    <li>Pune</li>
                    <li>akola</li>
                    <li>Nagpur</li>
                    <li>Mumbai</li>

                </ul>
            </div>
        </div>
    )
}
export default Footer;