import useFetch from "../useFetch";
import BlogLoading from "./BlogLoading";
import BlogTemplate from "./Blogtemplate";

const BlogMain = () => {
    const {data, isPending,error}=useFetch("http://localhost:7001/data")
    const pb =<p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae 
    vitae dicta sunt explicabo nemo enim ipsam voluptatem.</p>

    return ( 
        <main className="fixedwidth1 clear-fix">
            <div className="blogIntro clear-fix">
                <h2>blog</h2>
                {pb}
            </div>
            {error && <div>{error}</div>}
            {isPending && <BlogLoading/>}
            {data && <BlogTemplate data={data}/>}
            
        </main>
     );
}
 
export default BlogMain;