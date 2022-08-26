import ImageSlider from "./ImageSlider";
import useFetch from "../useFetch";
import ProjectLoading from "../Projects/ProjectLoading";


const MainImage = () => {
   const {data, isPending,error}=useFetch("http://localhost:7001/data")
   
    return ( 
        <section className="clear-fix fixedWidth">
            {error && <div className="err"><img src="/images/—Pngtree—404 error page_2596650.png"/></div>}
            {isPending && <ProjectLoading/>}
            {data && <ImageSlider data={data}/>}
        </section>
     );
}
 
export default MainImage;