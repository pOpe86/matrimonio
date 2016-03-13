import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"

let header2 = "HOW";
let subheader2 = "To get there";
let contentBody2Left = "Si no os apetece coger el coche habr\u00e1 un servicio de autobuses desde la iglesia a la finca y posterior regreso a Madrid. Dispondr\u00e9is de "+
    "dos horarios de vuelta. Por favor, reverva tu plaza en la secci\u00f3n de CONFIRMA!.";
let contentBody2Right = "Si no quer\u00e9is depender de los autobuses de vuelta, la finca os facilitar\u00e1 un servicio de taxis en la zona que os llevar\u00e1 de vuelta a "+
    "casa a la hora que quer\u00e1is.";
let img2 = require('../../images/ivanyelisa11.png');
let header3 = "Wedding";
let subheader3 = "Details";
let contentBody3 = ["Viernes 15 de Julio de 2016", "Ceremonia: 18:00", "Banquete: 20:00", "Ceremonia: Calle Ferraz 63", "Banquete: Finca Prados Moros (Guadarrama)"];
let img3 = require('../../images/planoBlanco.png');
let header4 = "Gifts";
let subheader4 = "Thank you!";
let contentBody4 = ["Muchos nos pregunt\u00e1is qu\u00e9 queremos por nuestra boda. La respuesta no puede ser m\u00e1s f\u00e1cil: veros a todos all\u00ed, que disfrut\u00e9is y que record\u00e9is ese d\u00eda con el mismo cari\u00F1o que lo haremos nosotros. Si de todas formas os apetece regalarnos algo, nada nos har\u00eda m\u00e1s ilusi\u00f3n que nos ayudarais a hacer realidad nuestra Luna de Miel y todo lo que conlleva.",
    "Echadle un ojo a nuestro plan de viaje, elegid lo que nos quer\u00e1is regalar y pinchad en ello para colaborar (cantidad libre). \u00a1Os agradecemos much\u00edsimo vuestros regalos! Pero os queremos repetir que lo m\u00e1s importante para nosotros es veros all\u00ed!"]
let header5 = "Rsvp";
let subheader5 = "Please";
let img5 = require('../../images/ivanyelisa4.png');

export default class Content extends React.Component{
    render(){
        return(
            <div id="st-scroll" className="st-scroll">
                <Section1
                    id="section-1"
                    css="st-panel"
                />
                <Section2
                    id="section-2"
                    css="st-panel"
                    header={header2}
                    subheader={subheader2}
                    contentBodyLeft={contentBody2Left}
                    contentBodyRight={contentBody2Right}
                    img={img2}
                />
                <Section3
                    id="section-3"
                    css="st-panel"
                    header={header3}
                    subheader={subheader3}
                    contentBodyLeft={contentBody3}
                    contentBodyRight={contentBody2Right}
                    img={img3}
                    />
                <Section4
                    id="section-4"
                    css="st-panel"
                    header={header4}
                    subheader={subheader4}
                    contentBody={contentBody4}
                    showModal={this.props.showModal}
                />
                <Section5
                    id="section-5"
                    css="st-panel"
                    header={header5}
                    subheader={subheader5}
                    img={img5}
                    showEmailModal={this.props.showEmailModal}
                />
            </div>
        );
    }
}