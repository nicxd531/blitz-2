const Intro = () => {
    const intro1 =<p className="p1">Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.</p>
    const intro2=<p className="p2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
    return (  
        <section className=" intro clear-fix">
           <article>
            <h2>OUR  PHILOSOPHY</h2>
            {intro1}
            {intro2}
           </article>
           <article>
            <h2>OUR  MISSION</h2>
            {intro1}
            {intro2}
           </article>
           <article>
            <h2>OUR  HISTORY</h2>
            {intro1}
            {intro2}
           </article>
        </section>
    );
}
 
export default Intro;