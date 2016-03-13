export default class ModalContent extends React.Component{
    constructor (props){
        super(props);
        {(() => {
            switch (this.props.modalId){
                case "1":
                    this.state = {
                        title: "Residencia Pipa",
                        description: "La mayor\u00eda de vosotros sab\u00e9is lo importante que es Pipa para nosotros. Nos encantar\u00eda poder llevarla a" +
                        " todas partes, pero lamentablemente, no podemos hacer este viaje con ella. Por este motivo, vamos a dejarla en la ",
                        description2: "residencia",
                        description3: " de su adiestrador (y ya amigo de la familia) Juli\u00e1n. Ya ha estado all\u00ed en otra ocasi\u00f3n, Pipa adora a " +
                        "Juli\u00e1n y sabemos que en pocos sitios va a estar mejor cuidada que con \u00e9l.",
                        picture: require('../../images/pipa.jpg'),
                        picture_title: "Residencia Pipa",
                        rightStyle: "modalRight pt0",
                        link:'http://bit.ly/1Qug4qV'
                    };
                    break;
                case "2":
                    this.state = {
                        title: "\u00A1No sin nuestro equipaje!",
                        description: "Nos han dicho que, en principio, necesitamos llevar ropa c\u00f3moda y fresquita, pero \u00A1nunca se sabe! As\u00ed " +
                        "que necesitamos unas maletas grandes y que resistan tantos kil\u00f3metros de viaje y tantos movimientos internos. Nos" +
                        " han gustado estas, \u00A1a ver qu\u00e9 os parecen! ",
                        picture: require('../../images/equipaje.jpg'),
                        picture_title: "Equipaje",
                        rightStyle: "modalRight pt3",
                        link:'http://bit.ly/1TzMVuA'
                    };
                    break;
                case "3":
                    this.state = {
                        title: "Auriculares Dr. Dre Beats",
                        description: "Tendremos muchas horas de vuelo por delante, as\u00ed que hemos pensado que nos vendr\u00edan genial unos auriculares molones como estos.",
                        picture: require('../../images/auriculares.jpg'),
                        picture_title: "Auriculares",
                        rightStyle: "modalRight pt6",
                        link:'http://bit.ly/1TzNmVL'
                    };
                    break;
                case "4":
                    this.state = {
                        title: "C\u00e1mara R\u00e9flex",
                        description: "Queremos hacer unas fotos chulas durante el viaje para poder ense\u00F1aros los sitios tan maravillosos que hemos visitado gracias a vosotros, y " +
                        "creemos que con esta c\u00e1mara podremos conseguir la calidad que buscamos (ahora s\u00f3lo nos falta algo de ma\u00F1a para que salgan bien!).",
                        picture: require('../../images/camara.jpg'),
                        picture_title: "C\u00e1mara R\u00e9flex",
                        rightStyle: "modalRight pt2",
                        link:'http://bit.ly/1QURTfm'
                    };
                    break;
                case "5":
                    this.state = {
                        title: "GoPro Hero4 Black",
                        description: "Nuestra idea es hacer fotos y videos molones cuando estemos buceando y yendo de un lado para otro. Para ello necesitamos una buena GoPro",
                        picture: require('../../images/gopro.jpg'),
                        picture_title: "GoPro Hero 4",
                        rightStyle: "modalRight pt8",
                        link:'http://bit.ly/1QufKZc'
                    };
                    break;
                case "6":
                    this.state = {
                        title: "Accesorios GoPro",
                        description: "Nuestra idea es hacer fotos y videos molones cuando estemos buceando y yendo de un lado para otro. Para ello necesitamos una buena GoPro y " +
                        "unos cuantos accesorios, como un soporte 3Way para llegar a los lugares mas rec\u00f3nditos.",
                        picture: require('../../images/soporte3way.jpg'),
                        picture_title: "Accesorio GoPro",
                        rightStyle: "modalRight pt4",
                        link:'http://bit.ly/1QufKZc'
                    };
                    break;
                case "11":
                    this.state = {
                        title: "Apple MacBook Pro Retina",
                        description: "Para poder seguirnos la pista y mantenernos conectados, queremos llevarnos un ordenador. Hemos pensado en este MacBook Pro Retina 15 pulgadas," +
                        " i7-4600M, 256GB Flash, 16GB RAM",
                        picture: require('../../images/macbook.jpg'),
                        picture_title: "MacBook Pro",
                        rightStyle: "modalRight pt6",
                        link:'http://bit.ly/1QURUQB'
                    };
                    break;
                case "12":
                    this.state = {
                        title: "Specialized Jynx Comp 27,5''",
                        description: "Como nos tememos que vamos a volver como peonzas de tanto comer, vamos a ver si nos hacemos con unas bicis y empezamos a hacer a algo de ejercicio",
                        picture: require('../../images/bici.jpg'),
                        picture_title: "Bicicletas",
                        rightStyle: "modalRight pt8",
                        link:'http://bit.ly/1QUS0rh'
                    };
                    break;
                case "13":
                    this.state = {
                        title: "Thermomix",
                        description: "Para empezar esta nueva etapa comiendo bien, vamos a comprar una Thermomix",
                        picture: require('../../images/thermomix.jpg'),
                        picture_title: "Thermomix",
                        rightStyle: "modalRight pt9",
                        link:'http://bit.ly/1QUSaz7'
                    };
                    break;
                case "14":
                    this.state = {
                        title: "Noche de Bodas",
                        description: "Despu\u00e9s de tantos meses de preparativos, nervios, ilusi\u00f3n... y de que por fin nos hayamos casado y lo hayamos celebrado con vosotros, llegar\u00e1 el" +
                        " momento de quitarse los tacones, desanudarse la corbata y descansar. Para ello hemos elegido un hotelito precioso y muy c\u00e9ntrico con unas vistas " +
                        "espectaculares.",
                        picture: require('../../images/noche.jpg'),
                        picture_title: "Noche de Bodas",
                        rightStyle: "modalRight pt1",
                        link:'http://bit.ly/1TzOvwq'
                    };
                    break;
                case "15":
                    this.state = {
                        title: "Vuelos",
                        description: "Con toda nuestra ilusi\u00f3n metida en esas maletas,  por fin cogeremos el vuelo que nos llevar\u00e1 a Doha, donde haremos escala para posteriormente " +
                        "llegar a Bali. \u00BFQuer\u00e9is ayudarnos a llegar hasta all\u00ed? Pod\u00e9is participar con lo que quer\u00e1is.",
                        picture: require('../../images/vuelo.jpg'),
                        picture_title: "Vuelos",
                        rightStyle: "modalRight pt4",
                        link:'http://bit.ly/1QUSrBT'
                    };
                    break;
                case "16":
                    this.state = {
                        title: "Llegada a Canggu (Bali)",
                        description: "Recogeremos las maletas con m\u00e1s sue\u00F1o que donde lo fabrican y conoceremos a nuestro gu\u00eda que nos acompa\u00F1ar\u00e1 los pr\u00f3ximos d\u00edas. Si quer\u00e9is, " +
                        " pod\u00e9is participar en los gastos de traslados durante todo el viaje.",
                        picture: require('../../images/noche1.jpg'),
                        picture_title: "19/07 - Canggu",
                        rightStyle: "modalRight pt4",
                        link:'http://bit.ly/1QwmLJ1'
                    };
                    break;
                case "17":
                    this.state = {
                        title: "Relax en Canggu (Bali)",
                        description: "A\u00FAn estaremos cansados, as\u00ed que este d\u00eda tambi\u00e9n nos lo vamos a tomar de descanso. Cogeremos unas bicis para llegar a la playa, y daremos una " +
                        "vuelta por la aldea.",
                        picture: require('../../images/noche2.jpg'),
                        picture_title: "20/07 - Canggu",
                        rightStyle: "modalRight pt6",
                        link:'http://bit.ly/1QwmLJ1'
                    };
                    break;
                case "18":
                    this.state = {
                        title: "Canggu - Nusa Penida",
                        description: "Muy temprano, saldremos en el coche hacia el templo en el mar m\u00e1s bello de Asia, Tanah Lot. Continuaremos el camino hacia el norte de la isla de" +
                        " Bali y cogeremos un barco a Nusa Penida, para alojarnos en el hotel Namaste.",
                        picture: require('../../images/noche3.jpg'),
                        picture_title: "21/07-Nusa Penida",
                        rightStyle: "modalRight pt4",
                        link:'http://bit.ly/1Qwn4U3'
                    };
                    break;
                case "19":
                    this.state = {
                        title: "Nusa Penida",
                        description: "D\u00eda de relax en Nusa Penida. Alquilaremos una moto para recorrer la isla y m\u00e1s tarde cogeremos una excursi\u00f3n en barco para hacer un par " +
                        "de inmersiones de buceo.",
                        picture: require('../../images/noche4.jpg'),
                        picture_title: "22/07-Nusa Penida",
                        rightStyle: "modalRight pt6",
                        link:'http://bit.ly/1Qwn4U3'
                    };
                    break;
                case "20":
                    this.state = {
                        title: "Bali Barat",
                        description: "\u00A1Volvemos a Bali!  Nuestro camino prosigue rumbo al norte de la isla, hac\u00eda la costa, pero antes haremos un breve descanso donde conoceremos" +
                        " el templo de Ulundanu, construido a la orilla del Lago Beratan. Por \u00FAltimo divisaremos los Lagos Gemelos y nos ba\u00F1aremos en las Cataratas de Munduk.",
                        picture: require('../../images/noche5.jpg'),
                        picture_title: "23/07-Bali Barat",
                        rightStyle: "modalRight pt3",
                        link:'http://bit.ly/1QUPHof'
                    };
                    break;
                case "21":
                    this.state = {
                        title: "Bali Barat",
                        description: "Este d\u00eda lo pasaremos en el Parque Nacional. El parque fue declarado reserva natural hace muchos a\u00F1os, y en \u00e9l, hay una gran diversidad: selva," +
                        " sabana seca, acacias y densos manglares. Adem\u00e1s, podremos hacer snorkel en la Isla de Menjangan, donde veremos arrecifes de coral y donde hay una gran" +
                        " diversidad marina.",
                        picture: require('../../images/noche6.jpg'),
                        picture_title: "24/07-Bali Barat",
                        rightStyle: "modalRight pt2",
                        link:'http://bit.ly/1QUPHof'
                    };
                    break;
                case "22":
                    this.state = {
                        title: "Ubud",
                        description: "A las 12:00 AM nos iremos a Ubud. De camino visitaremos las aguas termales de Banjar, veremos el monasterio budista de Brahma Vihara, construido" +
                        " a imagen y semejanza de Borobudur y  visitaremos un mercado de especias locales. Nos alojaremos en el hotel Wapa Di Ume, un resort & Spa donde esperamos" +
                        " relajarnos los pr\u00f3ximos d\u00edas.",
                        picture: require('../../images/noche7.jpg'),
                        picture_title: "25/07 - Ubud",
                        rightStyle: "modalRight pt2",
                        link:'http://bit.ly/1QUQ3Lv'
                    };
                    break;
                case "23":
                    this.state = {
                        title: "Ubud",
                        description: "Tras unos d\u00edas de intensa actividad, tendremos el d\u00eda libre para descansar en el hotel, donde disfrutaremos de un relajante masaje, un curso de" +
                        " cocina balinesa, caminatas guiadas por la zona y una visita al pueblo de Ubud, cuna de los artistas y artesanos de la isla donde visitaremos su mercado de " +
                        "artesan\u00eda.",
                        picture: require('../../images/noche8.jpg'),
                        picture_title: "26/07 - Ubud",
                        rightStyle: "modalRight pt3",
                        link:'http://bit.ly/1QUQ3Lv'
                    };
                    break;
                case "24":
                    this.state = {
                        title: "Ubud",
                        description: "\u00A1Ese d\u00eda vamos a hacer rafting! Elisaladeportista tiene clar\u00edsimo que se terminar\u00e1 pegando una galleta, pero \u00A1que no sea por no intentarlo! " +
                        "Iremos al pueblo monta\u00F1oso de Begawan, donde bajaremos las laderas hacia el espectacular r\u00edo Ayung. Nos desplazaremos en balsa durante 2 horas, " +
                        "experimentando la emoci\u00f3n de 25 r\u00e1pidos de clase II y III.",
                        picture: require('../../images/noche9.jpg'),
                        picture_title: "27/07 - Ubud",
                        rightStyle: "modalRight pt2",
                        link:'http://bit.ly/1QUQ3Lv'
                    };
                    break;
                case "25":
                    this.state = {
                        title: "Yogyakarta (Java)",
                        description: "Nos trasladamos al aeropuerto muy tempranito para volar a Yogyakarta. Una vez en el aeropuerto, nos trasladar\u00e1n al conjunto de Templos de " +
                        "Prambanan (Patrimonio de la Humanidad por la UNESCO), donde haremos una visita guiada. Esa tarde la tendremos libre para poder visitar la zona, y dormiremos" +
                        " en Yogyakarta, en el Hotel Melia Purosani.",
                        picture: require('../../images/noche10.jpg'),
                        picture_title: "28/07-Yogyakarta",
                        rightStyle: "modalRight pt2",
                        link:'http://bit.ly/1QUSDRG'
                    };
                    break;
                case "26":
                    this.state = {
                        title: "Yogyakarta (Java)",
                        description: "Este d\u00eda dedicaremos la ma\u00F1ana a visitas culturales. Cogeremos unas bicis para conocer las aldeas cercanas a los templos de Borobudur. Por la " +
                        "tarde, sobre las 17.00 horas cuando el p\u00FAblico tiene que abandonar Borobudur, entraremos nosotros para disfrutar del mayor centro de peregrinaci\u00f3n budista " +
                        "del mundo, coincidiendo con el atardecer.",
                        picture: require('../../images/noche11.jpg'),
                        picture_title: "29/07-Yogyakarta",
                        rightStyle: "modalRight pt2",
                        link:'http://bit.ly/1QUSDRG'
                    };
                    break;
                case "27":
                    this.state = {
                        title: "Karimunjawa",
                        description: "\u00A1Y aqu\u00ed llegan los d\u00edas m\u00e1s esperados por nosotros! Volaremos en avioneta desde Semarang hacia el paradisiaco archipi\u00e9lago de Karimunjawa." +
                        "Continuamos en lancha r\u00e1pida al atol\u00f3n de aguas cristalinas de Menjanwakan donde se encuentra el resort Kura Kura, donde pasaremos los \u00FAltimos d\u00edas del viaje." +
                        "Aqu\u00ed descansaremos, tomaremos el sol, haremos inmersiones de buceo...",
                        picture: require('../../images/noche12.jpg'),
                        picture_title: "29/07-Karimunjawa",
                        rightStyle: "modalRight pt0",
                        link:'http://bit.ly/1QUR8mI'
                    };
                    break;
                case "28":
                    this.state = {
                        title: "Actividades varias",
                        description: "A lo largo de este viaje, adem\u00e1s de visitar los diferentes lugares y conocer las distintas culturas de esta zona del planeta, vamos a tener tiempo" +
                        "para disfrutar de diversas actividades como buceo, masajes etc. que har\u00e1n del viaje una experiencia inolvidable!",
                        picture: require('../../images/masaje.jpg'),
                        picture_title: "Varios",
                        rightStyle: "modalRight pt4",
                        link:'http://bit.ly/1QUSG00'
                    };
                    break;
                default:
                    this.state = {
                        title: "-",
                        description: "-",
                        picture: "",
                        picture_title: "",
                        rightStyle: "modalRight",
                        link:''
                    };
            }
        })()}
    }
    goToCoinc(link){
        window.open(link, '_blank');
    }
    render(){
        var description = this.state.description;
        if (this.props.modalId == 1){
            description += this.state.description2 + this.state.description3;
        }
        return(
            <div id="modalContent">
                <div className="modalHeader">
                    <div className="ribbon">
                        <span>{this.state.title}</span>
                    </div>
                </div>
                <div className="modalLeft">
                    <figure>
                        <img src={this.state.picture} alt=""/>
                        <figcaption>{this.state.picture_title}</figcaption>
                    </figure>
                </div>
                <div className={this.state.rightStyle}>
                    <p>{description}</p>
                </div>
                <div className="modalCenter">
                    <button className="ok" onClick={this.goToCoinc.bind(this, this.state.link)}>Aporta!</button>
                    <button className="cancel" onClick={this.props.hideModal}>Cancelar</button>
                </div>
            </div>
        );
    }
}