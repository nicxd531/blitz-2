import ProjectMainSection from "./ProjectMainSection";

const ProjectMain = () => {
    const newLocal = <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo nemo enim ipsam voluptatem.</p>;
    return (
        <main className="fixedwidth1F">
            <div className="projectHeader">
                <h1>projects</h1>
                {newLocal}
            </div>
            <ProjectMainSection/>
        </main>
      );
}
 
export default ProjectMain;