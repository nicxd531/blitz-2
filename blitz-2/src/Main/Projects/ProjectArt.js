import useFetch from "../useFetch";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import ProjectLoading from "./ProjectLoading";

const ProjectArt = () => {
    const {data, isPending,error}=useFetch("http://localhost:7000/print")
    const [pageNumber, setpageNumber] = useState(0)
    const usersPerPage = 6
    const pagesVisited = pageNumber * usersPerPage
    const pageCount =Math.ceil(data && data.length/usersPerPage)
    const changePage =({selected}) =>{
    setpageNumber(selected)
    }
    
        
        return ( 
            <section>
            <section className="projectWeb clear-fix">
                
                 {error && <div>{error}</div>}  {isPending && <ProjectLoading/>}
             { data && 
                data
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map( (data)=>{
                     return(
                        <article className="projectTemplate ">
                            {
                         <div key={data.title} >
                           
                                 <img src={data.image} alt={data.title} />
                                 <h4>{data.title}</h4>
                                 <h6>{data.autor}</h6>
                                 <h6>{data.Category}</h6>
                                 <p>{data.article}</p>
                                 
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
 
export default ProjectArt;