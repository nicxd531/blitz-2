import ContactForm from "./ContactForm";

const ContactMain = () => {
    const Cp= <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae 
    vitae dicta sunt explicabo nemo enim ipsam voluptatem.</p>
    return ( 
        <main className=" Contact-main fixedwidth1">
            <div>
                <h3>Contact  US</h3>
                {Cp}
            </div>
            <ContactForm/>
        
        </main>
     );
}
 
export default ContactMain;