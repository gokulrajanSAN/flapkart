import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-con'>
            <div className='footer-details'>
                <ul>ABOUT
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Flapkart Stories</li>
                    <li>Flapkart Wholesale</li>
                </ul>
                <ul>HELP
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>FAQ</li>
                    <li>Cancellation & Returns</li>
                    <li>Report</li>
                </ul>
                <ul>SOCIAL
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>

                <ul> Mail Us:
                    <address>
                        Flapkart Internet Private Limited, <br />
                        Buildings Alysa, <br />
                        Clove Embssy Tech Village, <br />
                        Outer Ring Road, Devar Village,<br />
                        Bengaluru, 56013. <br />
                        Kamataka, India
                    </address>
                </ul>
            </div>
            <div className='footer-bottom'>
                <p>Become a Seller</p>
                <p>Advertise</p>
                <p>Gift cards</p>
                <p>Help centre</p>
                <p>2001-2024 Flapkart.com</p>
            </div>
        </div>
    )
}

export default Footer