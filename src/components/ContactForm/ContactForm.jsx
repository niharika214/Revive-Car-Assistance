import styles from './ContactForm.module.css'
import { useState } from 'react';
import img from "../../assests/image2.png"
const ContactForm = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [text, setText] = useState(undefined);

  const onSubmit = (event) => {
    if(event){
      event.preventDefault();//for preventing page default refresh
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
    }
  };

  return (
    <section className={styles.form_section}>
        <div>
        <div className={styles.contact_section}>
        <h1>CONTACT US</h1>
        <p>
            LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FROM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
          <form 
          onSubmit={onSubmit}
            className={styles.form}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='Jhon Peter'/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' placeholder='abc@example.com'/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea type="text" name='text' placeholder='Discription'/>
            </div>
            <div className={styles.submit}>
              {/* <Button text='SUBMIT'/> */}
            </div>
            <p>
              {`Name: ${name}`} <br/> {`Email: ${email}`} <br/> {`Text: ${text}`}
            </p>
          </form>
          </div>
        <div className={styles.contact_image}>
          <img src={img} alt="image" />
        </div>
    </section>
    
  )
}

export default ContactForm;
