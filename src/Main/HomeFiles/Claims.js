import {useState} from "react";
const Claims = () => {
    const [isHovering, setIsHovering] = useState(-1)


const claimsData =[
    {
        title:"Check Out OUR  latest PROJECTS",
        aSpan1 :"Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.",
        aSpan2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempora? Quia voluptate eaque quae quisquam pariatur nostrum deleniti, sit maiores cupiditate doloremque inventore modi. Corporis voluptatum corrupti ratione voluptate sint quam rerum reiciendis nihil architecto quae.",
        aSpan3:"Incidunt nulla labore laborum. Provident consequatur accusamus expedita quia, dolor ea tenetur ipsa, soluta eius, nam atque officiis ab! Fugiat eius dolorem, iste error quam facilis corrupti quos! Nihil unde non dolorem architecto iste error voluptates. Officia tenetur, repellat consequatur dolor deleniti ullam impedit, veniam, odit non voluptates magni exercitationem dolores aut. Qui dolorem repellendus voluptates earum vero magnam dolorum non aliquid alias iusto?"
    },

    {
        title:"Guarantee  5  STar Quality Work",
        aSpan1 :"Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.",
        aSpan2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempora? Quia voluptate eaque quae quisquam pariatur nostrum deleniti, sit maiores cupiditate doloremque inventore modi. Corporis voluptatum corrupti ratione voluptate sint quam rerum reiciendis nihil architecto quae.",
        aSpan3:"Incidunt nulla labore laborum. Provident consequatur accusamus expedita quia, dolor ea tenetur ipsa, soluta eius, nam atque officiis ab! Fugiat eius dolorem, iste error quam facilis corrupti quos! Nihil unde non dolorem architecto iste error voluptates. Officia tenetur, repellat consequatur dolor deleniti ullam impedit, veniam, odit non voluptates magni exercitationem dolores aut. Qui dolorem repellendus voluptates earum vero magnam dolorum non aliquid alias iusto?"
    },

    {
        title:"Stay connected  by reading  the  blog",
        aSpan1 :"Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.",
        aSpan2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempora? Quia voluptate eaque quae quisquam pariatur nostrum deleniti, sit maiores cupiditate doloremque inventore modi. Corporis voluptatum corrupti ratione voluptate sint quam rerum reiciendis nihil architecto quae.",
        aSpan3:"Incidunt nulla labore laborum. Provident consequatur accusamus expedita quia, dolor ea tenetur ipsa, soluta eius, nam atque officiis ab! Fugiat eius dolorem, iste error quam facilis corrupti quos! Nihil unde non dolorem architecto iste error voluptates. Officia tenetur, repellat consequatur dolor deleniti ullam impedit, veniam, odit non voluptates magni exercitationem dolores aut. Qui dolorem repellendus voluptates earum vero magnam dolorum non aliquid alias iusto?"
    }
]


    return ( 
        <section className="claims clear-fix">
            
            {claimsData.map((data, index)=>{
                return (
                 <article key={index}
                    onMouseEnter={()=>setIsHovering(index)}
                 onMouseLeave={()=>setIsHovering(-1)}
                 >
                    
                 <div className="clear-fix">
                     <i className={`${ index === 0?"bi bi-search":null} ${index===1?"bi bi-star-fill":null} ${index===2?"bi bi-chat-left-text-fill":null}`}></i>
                     <h1 >{data.title}</h1>
                 </div>
                 <p className="span1">
                    <span >{data.aSpan1}</span>
                    <span className={isHovering===index ?"txt-dots": null}>...</span>
                    <span className={isHovering===index ?"txt-hoverd" :"txt-notHoverd"}>{data.aSpan2}</span>
                    <span className="txt-excess">{data.aSpan3}</span>
                 </p>
                 <section className="dropdown"
                 
                 >
                     <h5>find out more</h5>
                     <i className="bi bi-chevron-double-down h-arrow"></i>
                 </section>
             </article>

            )})}

            
        </section>
     );
}
 
export default Claims;