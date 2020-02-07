import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2 className="contact-header">Contact Aztec Tooling</h2>
                <form action="https://mailthis.to/maddiecampbelldev@gmail.com"
                    method="POST" encType="multipart/form-data" className="flex-column">
                    <input className="contact-input" type="text" name="name" placeholder="Your name" />
                    <input className="contact-input" type="email" name="_replyto" placeholder="Your email" />
                    <textarea className="contact-text-box" name="message" placeholder="Enter your message here"></textarea>
                    <input className="contact-download" type="file" name="file" placeholder="Attachments (optional)" />
                    <input className="contact-input" type="hidden" name="_subject" value="Contact form submitted" />
                    <input className="contact-input" type="hidden" name="_after" value="madelinecampbell.dev" />
                    <input className="contact-input" type="hidden" name="_honeypot" value="" />
                    <input className="contact-input" type="hidden" name="_confirmation" value="" />
                    <button className="contact-button" value="Send">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact;