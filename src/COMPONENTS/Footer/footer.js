import React from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_eqbsuhg', 'template_ffljj1t', form.current, '9-DGSVwK6IFxCsG-F')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
  return (
    <footer class="footer bg-dark text-white p-5" id="contact">
        <div class="container">
            <div class="grid">
                <div class="row align-items-center mt-5">
                    
                    <div class="col-md-4 offset-md-4">
                        <form  ref={form} onSubmit={sendEmail}>
                            <div class="mb-2">
                                <input type="text" class="form-control" placeholder="votre prenom" name="user_name"/>
                            </div>
                            <div class="mb-2">
                                <input type="email" name="user_email" class="form-control" placeholder="votre email"/>
                            </div>
                            {/* <div class="mb-2">
                                <input type="number" class="form-control" placeholder=" Mobile"/>
                            </div> */}
                            <div class="mb-2">
                                <textarea  name="message" rows="3" class="form-control" placeholder="votre message"></textarea>
                            </div>
                            <div class="mb-2">
                                <input type="submit" class="btn btn-warning" value="envoyer"/>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div className="">
                        <span>Copyright © 2022</span>
                        <small>   made with love by Raouane Mohamed Creteil 94000
                            </small>
                    </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
