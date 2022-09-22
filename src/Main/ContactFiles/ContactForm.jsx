import {useState} from "react"
import {useNavigate} from "react-router-dom"
const ContactForm = () => {
    const [firstName,setFirstName] = useState(' ');
    const [lastName,setLastName] = useState(' ');
    const [emailAddress,setEmailAddress] = useState(' ');
    const [message,setMessage] = useState(' ');
    const [isPending , setIsPending]=useState(false);
    const history = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault()
        const contactus ={firstName, lastName,emailAddress,message};
        setIsPending(true)

        fetch('http://localhost:5000/contact',{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(contactus)
        })

        .then(()=>{
            console.log("you've contacted us ");
            setIsPending(false)
        })
        history('/');
    }
    
    const fIntro = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.

    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies. Sed luctus dui nec nisl tempus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.
    </p>
    return ( 
        <section className="Contact-form">
            <div>
               {fIntro}
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={(e)=>setFirstName(e.target.value)}
                value={firstName}
                required
                placeholder="FIRST NAME"
                type="text" 
                //name="first name" 
                /><br/>
                <input 
                onChange={(e)=>setLastName(e.target.value)}
                value={lastName}
                required
                placeholder="LAST NAME"
                type="text" 
                //name="last name" 
                /><br/>
                <input 
                onChange={(e)=>setEmailAddress(e.target.value)}
                value={emailAddress}
                required
                placeholder="EMAIL ADDRESS"
                type="email" 
               // name="email address" 
                /><br/>
                <textarea
                onChange={(e)=>setMessage(e.target.value)}
                value={message} 
                required
                placeholder="MESSAGE"
                name="message" 
                cols="30" 
                rows="10"></textarea><br/>
                {!isPending && <button className="bi bi-chevron-double-right">submit</button>}
                {isPending &&   <button disabled className="bi bi-chevron-double-right">submit</button>}
              
            </form>

        </section>
     );
}
 
export default ContactForm
;