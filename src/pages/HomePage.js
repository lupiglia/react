import "../styles/home.css"

const HomePage=(props)=>{
    return(
        <main class="holder">
        <div>
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div class="columnas">
            <section class="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae assumenda ipsam nostrum
                    odit error quasi laborum dolores consequuntur, modi quia maiores, quod rem doloribus alias officiis
                    sit illo. Quidem?</p>

            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Simplemente excelente</span> 
                    <span class="autor">Juan Gomez - coito.com</span>
                </div>
            </section>
        </div>
    </main>
    )
}
export default HomePage;