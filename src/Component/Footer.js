import Logo from '../assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <img src={Logo} alt='Little Lemon' />
                <div>
                    <h5>Document Navigation</h5>
                    <ul className='footer_List'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul className='footer_List'>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h5>Social Media Links</h5>
                    <ul className='footer_List'>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;