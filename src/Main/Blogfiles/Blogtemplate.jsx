const BlogTemplate = ({data}) => {
    console.log(data)
    console.log(data.image)
    return ( 
        <section className="blogTemplate1 clear-fix">

            {data.map((data)=> (
                <div className="blog-articles clear-fix" key={data.title} >
                        <h3>{data.title}</h3>
                        <img src={data.image} alt=""/>
                        <div>
                            <ul>
                                <h3>Date</h3>
                                <li>{data.date}</li>
                                <h3>Tags</h3>
                                <li>{data.tags}</li>
                                <h3>Comments</h3>
                                <li>4</li>
                            </ul>
                            <p>{data.article}</p>
                        </div>
                </div>

            ))}
           
        </section>
     );
}
 
export default BlogTemplate;