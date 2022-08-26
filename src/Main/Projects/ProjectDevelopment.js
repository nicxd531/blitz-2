import useFetch from "../useFetch";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import ProjectLoading from "./ProjectLoading";

const ProjectDevelopment= () => {
    const {data, isPending,error}=useFetch("http://localhost:7000/development")
    const [pageNumber, setpageNumber] = useState(0)
    const usersPerPage = 6
    const pagesVisited = pageNumber * usersPerPage
    const pageCount =Math.ceil(data && data.length/usersPerPage)
    const changePage =({selected}) =>{
    setpageNumber(selected)
    }
    
        
        return ( 
            <section>
            <section className=" devArticle clear-fix">
                
            {error && <div className="err"><img src="/images/—Pngtree—404 error page_2596650.png"/></div>}  
             {isPending && <ProjectLoading/>}
             { data && 
                data
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map( (data)=>{
                     return(
                        <article className="projectDev clear-fix" key={data.title} >
                            {
                         <div  >
                         <h3>{data.title}</h3>
                         <img src={data.image} alt=""/>
                         <div>
                             <ul>
                                 <h3>Category</h3>
                                 <li>{data.Category}</li>
                                 <h3>sub-category</h3>
                                 <li>{data.subCategory}</li>
                                 <h3>autor</h3>
                                 <li>{data.autor}</li>
                             </ul>
                             <p>{data.article}</p>
                         </div>
                 </div>}
                        </article>
                
                     )
                 }
                )
             }
             
            </section>
            <ReactPaginate
             previousLabel={"previous"}
             nextLabel={"next"}
             pageCount={pageCount}
             onPageChange={changePage}
             previousLinkClassName={"paginationprev"}
             containerClassName={"paginationButton "}
             nextLinkClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName={"paginationActive"}
             />
            </section>
         );
    }
 
export default ProjectDevelopment;