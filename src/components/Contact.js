import React from 'react'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import Button from '@material-ui/core/Button';
export default function Contact() {
    return (
        <section id="contact">
      
        {/* <h1>INQUIRE ABOUT A PIECE</h1>
        <Button variant="contained" >
       <MailOutlineRoundedIcon style={{ fontSize: 40 }}></MailOutlineRoundedIcon>
       </Button> */}
<form id="form" class="topBefore">
		
        <input id="name" type="text" placeholder="NAME"/>
        <input id="email" type="text" placeholder="E-MAIL"/>
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
<input id="submit" type="submit" value="GO!"/>

</form>

       </section>
    
    )
}
