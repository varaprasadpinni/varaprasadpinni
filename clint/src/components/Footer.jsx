import React from 'react'
import "../styles/Footer.scss"
import{LocationOn,LocalPhone,Email} from "@mui/icons-material"

const Footer=()=> {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <a href='/'><img  src='/assets/logo2.jpg' alt='logo'/></a>

        </div>
        <div className='footer_center'>
            <h3>Useful Links</h3>
            <ul>
                <li>About</li>
                <li>Terms and COnditions</li>
                <li>Return and Refund Policy</li>
            </ul>

        </div>
        <div className='footer_right'>
            <h3>Contact_Us</h3>
            <div className='footer_right_info'>
                <LocalPhone/>
                <p>+91 987 654 321</p>

            </div>
            <div className='footer_right_info'>
                <Email/>
                <p>info@mywebsite.com</p>
            </div>

        </div>
    </div>
  )
}

export default Footer