import Claims from './HomeFiles/Claims';
import Latest from './HomeFiles/Latest-works';
import MainImage from './HomeFiles/MainImage';


const Home = () => {
    return (
        <div className="home fixedWidth">
            <MainImage/>
            <Claims/>
            <Latest/>
        </div>
      );
}
 
export default Home;