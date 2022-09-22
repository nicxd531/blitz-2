import Ceos from "./Aboutus/Ceos";
import Intro from "./Aboutus/Intro";

const About = () => {
    return ( 
        <div className="about fixedWidth clear-fix">
             <div>
                <h1>About us</h1>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae 
                vitae dicta sunt explicabo nemo enim ipsam voluptatem.</p>
            </div>
            <Intro/>
            <Ceos/>
        </div>
     );
}
 
export default About;