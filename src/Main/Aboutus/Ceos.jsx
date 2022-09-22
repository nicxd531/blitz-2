const Ceos = () => {
    const about =<p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam.</p>
    return ( 
        <section className="ceo clear-fix">
            <article>
                <img src="images/black_lion_face_statue_hd_black-1366x768.jpg" alt=""/>
                <h2>JANE DOE</h2>
                <h5>1.306.432.0065</h5>
                <h6>CEO</h6>
                {about}
            </article>
            <article>
            <img src="images/black_lion_face_statue_hd_black-1366x768.jpg" alt=""/>
                <h2>JOHN DOEE</h2>
                <h5>1.306.432.0065</h5>
                <h6>Executive Administrator</h6>
                {about}
            </article>
            <article>
                <img src="images/black_lion_face_statue_hd_black-1366x768.jpg" alt=""/>
                <h2>JANE DOE</h2>
                <h5>1.306.432.0065</h5>
                <h6>Realitor</h6>
                {about}
            </article>
        </section>
     );
}
 
export default Ceos;