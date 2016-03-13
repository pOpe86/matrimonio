export default class Section5 extends React.Component{
    removeColor(e) {
        e.target.className = e.target.className.replace("initSelect", "");
    }
    sendMail(){
        $.ajax({
            type: "GET",
            url: "/emails",
            data: { confirmation: { mainname: $('#mainName').val(),
                                    mainsurname: $('#mainSurname').val(),
                                    email: $('#email').val(),
                                    partnersname: $('#partnersName').val(),
                                    partnerssurname: $('#partnersSurname').val(),
                                    comming: $('#comming').val(),
                                    bus: $('#bus').val() } },
            success:(function(){
                console.log("yeah");
            }),
            error:(function(){
                console.log("buuu");
            })
        });
    }
    render(){
        return(
            <section id={this.props.id} className={this.props.css}>
                <div>
                    <div className="contentHeader">
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className="subHeader">
                        <h3>{this.props.subheader}</h3>
                    </div>
                    <div className="dotsLeft"></div>
                    <div className="dotsRight"></div>
                    <div className="contentBody">
                        <div>
                            <input id="mainName" className="w45" placeholder="Nombre"/>
                            <input id="mainSurname" className="w45 ml5" placeholder="Apellidos"/>
                        </div>
                        <div>
                            <input id="email" className="w95 mt4" placeholder="E-mail"/>
                        </div>
                        <div>
                            <input id="partnersName" className="w45 mt4" placeholder="Nombre del acompa&ntilde;ante"/>
                            <input id="partnersSurname" className="w45 ml5 mt4" placeholder="Apellido del acompa&ntilde;ante"/>
                        </div>
                        <div className="mb18">
                            <select id="comming" className="w45 mt4 initSelect" onChange={this.removeColor.bind(this)}>
                                <option value="" disabled selected>&#191;Asistir&aacute;s al evento?</option>
                                <option value="SI">S&iacute;</option>
                                <option value="NO">No</option>
                            </select>
                            <select id="bus" className="w45 ml5 mt4 initSelect" onChange={this.removeColor.bind(this)}>
                                <option value="" disabled selected>Reservar autob&uacute;s</option>
                                <option value="Si">S&iacute;</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={this.sendMail}>ENVIAR</button>
                        </div>
                    </div>
                    <div className="contentBodyCenter">
                        <img src={this.props.img} alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}