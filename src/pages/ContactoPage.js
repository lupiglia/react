import "../styles/contacto.css"

const ContactoPage=(props)=>{
    return(
        <main class="holder contacto">
        <section>
            <h2>Contacto Rápido</h2>
            <form action="" class="formulario">
                <p>
                    <label htmlFor="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label htmlFor="">Email</label>
                    <input type="text"/>
                </p>
               
                <p>
                    <label htmlFor="">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label htmlFor="">Mensaje</label>
                    <textarea></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </section>
        <section class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Tambien podes contactarte con nosotros usuando los siguientes medios</p>
            <ul>
                <li><a href="https://www.instagram.com/" rel="noreferrer" target="_blank">Instagram</a></li>
                <li>Instagram</li>
                <li>Instagram</li>
                <li>Instagram</li>
                <li>Instagram</li>
            </ul>
        </section>
    </main>
    )
}
export default ContactoPage;