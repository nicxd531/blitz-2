import { Link } from "react-router-dom";

const Articletemplate = ({data, style}) => {

 
    return ( 
        <section>
            <Link to={"/"}>
            {data.slice(-1).map((data)=>(
                
                <div key={data.title} className="a-template" style={style}>
                    <img src={data.image} alt={data.title} />
                    
                    <h4>{data.title}</h4>
                    <h6>{data.autor}</h6>
                    <p>{data.article}</p>
                    <div className="dropdown">
                    <h5>find out more</h5>
                    <i className="bi bi-chevron-double-down"></i>
                </div>
                </div>
                
              

            ))

            }
            </Link>

        </section>
   
            
     );
}
export default Articletemplate;