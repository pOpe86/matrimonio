export default class Carousel extends React.Component{
    render (){
        var settings = {
            dots: false,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        }
        return (
            <div className="carousel">
                <Slider {...settings}>
                    <div className="polaroid">
                        <figure onClick={this.props.showModal.bind(this, "1")}>
                            <img src={require('../../images/pipa.jpg')} alt=""/>
                            <figcaption>Residencia Pipa</figcaption>
                        </figure>
                    </div>
                    <div className="polaroid">
                        <figure onClick={this.props.showModal.bind(this, "2")}>
                            <img src={require('../../images/equipaje.jpg')} alt=""/>
                            <figcaption>Equipaje</figcaption>
                        </figure>
                    </div>
                    <div className="polaroid">
                        <figure onClick={this.props.showModal.bind(this, "3")}>
                            <img src={require('../../images/auriculares.jpg')} alt=""/>
                            <figcaption>Auriculares</figcaption>
                        </figure>
                    </div>
                    <div className="polaroid">
                        <figure onClick={this.props.showModal.bind(this, "4")}>
                            <img src={require('../../images/camara.jpg')} alt=""/>
                            <figcaption>C&aacute;mara R&eacute;flex</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "5")}>
                            <img src={require('../../images/gopro.jpg')} alt=""/>
                            <figcaption>GoPro Hero 4</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "6")}>
                            <img src={require('../../images/soporte3way.jpg')} alt=""/>
                            <figcaption>Accesorio GoPro</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "11")}>
                            <img src={require('../../images/macbook.jpg')} alt=""/>
                            <figcaption>MacBook Pro</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "12")}>
                            <img src={require('../../images/bici.jpg')} alt=""/>
                            <figcaption>Bicicletas</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "13")}>
                            <img src={require('../../images/thermomix.jpg')} alt=""/>
                            <figcaption>Thermomix</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "14")}>
                            <img src={require('../../images/noche.jpg')} alt=""/>
                            <figcaption>Noche de bodas</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "15")}>
                            <img src={require('../../images/vuelo.jpg')} alt=""/>
                            <figcaption>Vuelos</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "16")}>
                            <img src={require('../../images/noche1.jpg')} alt=""/>
                            <figcaption>19/07 - Canggu</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "17")}>
                            <img src={require('../../images/noche2.jpg')} alt=""/>
                            <figcaption>20/07 - Canggu</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "18")}>
                            <img src={require('../../images/noche3.jpg')} alt=""/>
                            <figcaption className="font12">21/07-Nusa Penida</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "19")}>
                            <img src={require('../../images/noche4.jpg')} alt=""/>
                            <figcaption className="font12">22/07-Nusa Penida</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "20")}>
                            <img src={require('../../images/noche5.jpg')} alt=""/>
                            <figcaption className="font12">23/07-Bali Barat</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "21")}>
                            <img src={require('../../images/noche6.jpg')} alt=""/>
                            <figcaption className="font12">24/07-Bali Barat</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "22")}>
                            <img src={require('../../images/noche7.jpg')} alt=""/>
                            <figcaption>25/07 - Ubud</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "23")}>
                            <img src={require('../../images/noche8.jpg')} alt=""/>
                            <figcaption>26/07 - Ubud</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "24")}>
                            <img src={require('../../images/noche9.jpg')} alt=""/>
                            <figcaption>27/07 - Ubud</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "25")}>
                            <img src={require('../../images/noche10.jpg')} alt=""/>
                            <figcaption className="font12">28/07-Yogyakarta</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "26")}>
                            <img src={require('../../images/noche11.jpg')} alt=""/>
                            <figcaption className="font12">29/07-Yogyakarta</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "27")}>
                            <img src={require('../../images/noche12.jpg')} alt=""/>
                            <figcaption className="font12">30/07-Karimunjawa</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure onClick={this.props.showModal.bind(this, "28")}>
                            <img src={require('../../images/masaje.jpg')} alt=""/>
                            <figcaption>Varios</figcaption>
                        </figure>
                    </div>
                </Slider>
            </div>
        );
    }
}