import useFetch from "../useFetch";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import ProjectLoading from "./ProjectLoading";

const ProjectAll = () => {
    const {data:print , isPending,error}=useFetch("http://localhost:7000/print")
    const {data:web}=useFetch("http://localhost:7000/web")
    const {data:photoshop}=useFetch("http://localhost:7000/photoshop")
    const {data:art}=useFetch("http://localhost:7000/art")
   const arr1 =print && print
   const arr2 =web && web 
   const arr3=photoshop && photoshop
   const arr4=art && art
   arr1 && console.log(arr1)
   const arrm =arr1 && arr1.concat(arr2,arr3,arr4);
    const data = arrm && arrm.sort()

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
                
             {error && <div className="err"><img src="/images/—Pngtree—404 error page_2596650.png"/></div>} 
            {isPending && <ProjectLoading/>}
             { arrm && 
                data
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map( (data)=>{ 
                     return(
                        <article className="projectTemplate"  key={data.title}>
                            {
                         <div key={data.title} >
                           
                                 <img src={data.image} alt={data.title} key={data.title}/>
                                 <h4 key={data.title}>{data.title}</h4>
                                 <h6 key={data.title}>{data.autor}</h6>
                                 <h6 key={data.title}>{data.Category}</h6>
                                 <p key={data.title}>{data.article}</p>
                                 
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
 
export default ProjectAll;