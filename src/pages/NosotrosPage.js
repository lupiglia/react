import "../styles/nosotros.css"

const NosotrosPage =(props)=>{
    return(
        <main class="holder">
        <section class="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam ipsa, officia harum officiis itaque, necessitatibus inventore, dolor deleniti recusandae eius numquam quis repudiandae corporis aliquid distinctio facilis! Eos, vel.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam ipsum explicabo doloremque quo porro commodi ea suscipit placeat in quasi iste necessitatibus aliquid ad deserunt eos, mollitia nesciunt molestias!</p>      
        </section>
        <section>
            <h2>Staff</h2>
            <div class="personas">
                <div class="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt=""/>
                    <h5>Rick Sánchez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores enim nam corrupti exercitationem natus animi alias magnam quas sint dolor voluptatum explicabo tempora, et ipsum obcaecati iure dolores quaerat?</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt=""/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores enim nam corrupti exercitationem
                        natus animi alias magnam quas sint dolor voluptatum explicabo tempora, et ipsum obcaecati iure dolores quaerat?
                    </p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt=""/>
                    <h5>Marcos Quintana</h5>
                    <h6>Gerente de sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores enim nam corrupti exercitationem
                        natus animi alias magnam quas sint dolor voluptatum explicabo tempora, et ipsum obcaecati iure dolores quaerat?
                    </p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt=""/>
                    <h5>Sandra Mastroloi</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores enim nam corrupti exercitationem
                        natus animi alias magnam quas sint dolor voluptatum explicabo tempora, et ipsum obcaecati iure dolores quaerat?
                    </p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt=""/>
                    <h5>Pedro Gomez</h5>
                    <h6>Gerente de Logística</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores enim nam corrupti exercitationem
                        natus animi alias magnam quas sint dolor voluptatum explicabo tempora, et ipsum obcaecati iure dolores quaerat?
                    </p>
                </div>

            </div>
        </section>
        </main>
    )
}

export default NosotrosPage;