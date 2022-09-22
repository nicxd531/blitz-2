import Articletemplate from "./Articletemplate";
import HomeLoading from "./HomeLoading";
import useFetch from "../useFetch";
const Latest = () => {
    const { data:web,isPending:wPending,error:wError}=useFetch("http://localhost:7000/web")
    const { data:print,isPending:pPending,error:pError}=useFetch("http://localhost:7000/print")
    const { data:art,isPending:aPending,error:aError}=useFetch("http://localhost:7000/art")
    const { data:photoshop,isPending:phPending,error:phError}=useFetch("http://localhost:7000/photoshop")
    const myStyle={float:"left",width:"22%",marginRight:"4%"}
    return (
        <section className="latest-work clear-fix">
            <div className="title-wrapper">
                <h2>latest works</h2>
            </div>
            {wError && <div className="err" style={myStyle}><img src="/images/—Pngtree—404 error page_2596650.png" alt="images"/></div>}
            {wPending && <HomeLoading/>}
            {web &&<Articletemplate  data={web } style={{marginRight:"4%"}}/>}

            {pError && <div className="err" style={myStyle}><img src="/images/—Pngtree—404 error page_2596650.png" alt="images"/></div>}
            {pPending && <HomeLoading/>}
            {print &&<Articletemplate  data={print} style={{marginRight:"4%"}}/>}

            {aError && <div className="err" style={myStyle}><img src="/images/—Pngtree—404 error page_2596650.png" alt="images"/></div>}
            {aPending && <HomeLoading/>}
            {art &&<Articletemplate  data={art} style={{marginRight:"4%"}}/>}

            {phError && <div className="err" style={{float:"left",width:"22%",marginRight:"0px"}}><img src="/images/—Pngtree—404 error page_2596650.png" alt="images"/></div>}
            {phPending && <HomeLoading/>}
            {photoshop &&<Articletemplate  data={photoshop} style={{marginRight:"0px"}}/>}
        </section>

      );
}
 
export default Latest;
