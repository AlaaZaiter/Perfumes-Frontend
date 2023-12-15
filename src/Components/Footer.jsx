import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className='FooterContainer'>
         <div>

          <p className='ContactFooterP'>Contact Us</p>
          <div><p>Telephone</p><p> : 79 322 584</p></div>
          <div><p>Email</p><p>: zaiteralaa29@gmail.com</p></div>
          <div className='FooterInputContainer'>
            <input type="text" placeholder='enter your email'/>
            <button>Subscribe</button>
          </div>

         </div>

         <div className='InformationDiv'>
          <p className='ContactFooterP'>Information</p>
          <div><img src='images/Next_page.png'></img><p>Lorem ipsum dolor sit amet, consectetur</p></div>
          <div><img src='images/Next_page.png'></img><p>Lorem ipsum dolor sit amet, consectetur</p></div>
          <div><img src='images/Next_page.png'></img><p>Lorem ipsum dolor sit amet, consectetur</p></div>

         </div>
        <div className='SocialDiv'>
          <p className='ContactFooterP'> Social Media</p>
          <div><img src="images/facebook.png"></img> < a href='www.facebook.com'>www.facebook.com</a></div>
          <div><img src="images/Instagram.png"></img>< a href='www.facebook.com'>www.facebook.com</a></div>
          <div><img src="images/WhatsApp.png"></img>< a href='www.facebook.com'>www.facebook.com</a></div>

        </div>
        </div>
    </div>
  )
}

export default Footer