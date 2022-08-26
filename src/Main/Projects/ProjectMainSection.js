import { Link,Route,Routes} from 'react-router-dom';
import ProjectWeb from "./ProjectWeb";
import ProjectPrint from "./ProjectPrint";
import ProjectArt from "./ProjectArt";
import ProjectPhotoshop from "./ProjectPhotoshop";
import ProjectDevelopment from "./ProjectDevelopment";
import ProjectAll from "./ProjectAll";

const ProjectMainSection = () => {
    
    return ( 
      
        <section>
            <nav>
                <ul className="projectsCategory">
                    <li><Link to={"/Projects/"}>all</Link></li>
                    <li><Link to={"/Projects/web"}>web</Link></li>
                    <li><Link to={"/Projects/print"}>print</Link></li>
                    <li><Link to={"/Projects/art"}>art</Link></li>
                    <li><Link to={"/Projects/photoshop"}>photoshop</Link></li>
                    <li><Link to={"/Projects/development"}>development</Link></li> 
                </ul>
            </nav>
            <Routes>
                <Route path='' element={<ProjectAll />}/>
                <Route path='/web' element={<ProjectWeb />}/>
                <Route path='/print' element={<ProjectPrint />}/>
                <Route path='/art' element={<ProjectArt />}/>
                <Route path='/Photoshop' element={<ProjectPhotoshop/>}/>
                <Route path='/development' element={<ProjectDevelopment/>}/>
            </Routes>
        </section>
       
     );
}
 
export default ProjectMainSection;