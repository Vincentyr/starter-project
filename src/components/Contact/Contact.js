import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function Contact() {
  const [state, handleSubmit] = useForm("xdoyjgyk");
  if (state.succeeded) {
    return (
    <section className = "contact">
      <div className = "overlaycontact" id="Contact">
        <h1 className = "title">Contact Me</h1>
        <p>Thanks for joining!</p>
      </div>
    </section>
    );
  }
  return (
    <section className = "contact">
      <div className = "overlaycontact" id="Contact">
        <form onSubmit={handleSubmit}>
          <div className = "form">
            <h1 className="title">Contact Me</h1>
            <label htmlFor="fullname">
              Full Name
            </label>
            <input
              id="fullname"
              type="fullname" 
              name="fullname"
              placeholder = "First and Last"
            />
            <ValidationError 
              prefix="Fullname" 
              field="fullname"
              errors={state.errors}
            />
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder = "example@email.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>  
      </div>
    </section> 
  );
}

export default Contact;