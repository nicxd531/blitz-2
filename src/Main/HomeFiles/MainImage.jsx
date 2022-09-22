import ImageSlider from "./ImageSlider";
import useFetch from "../useFetch";
import ProjectLoading from "../Projects/ProjectLoading";
import BlogArticles from "../Data/BlogArticles.json"


const MainImage = () => {
   const {data, isPending,error}=useFetch({BlogArticles})
   
    return ( 
        <section className="clear-fix fixedWidth">
            {error && <div className="err"><img src="/images/—Pngtree—404 error page_2596650.png" alt=""/></div>}
            {isPending && <ProjectLoading/>}
            {data && <ImageSlider data={BlogArticles}/>}
            
        </section>
     );
}
 
export default MainImage;