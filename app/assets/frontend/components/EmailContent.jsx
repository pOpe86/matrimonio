export default class EmailContent extends React.Component{
    constructor (props){
        super(props);
        {(() => {
            switch (this.props.modalEmail){
                case "emailSuccess":
                    this.state = {
                        description: "Bien! La confirmaci\u00f3n se ha enviado correctamente.",
                        picture: "fa fa-check-circle"
                    };
                    break;
                case "emailError":
                    this.state = {
                        description: "Ups! Se ha producido un error al enviar la confirmaci\u00f3n.",
                        picture: "fa fa-times-circle"
                    };
                    break;
                case "emptyParams":
                    this.state = {
                        description: "Aseg\u00FArate de que nos has dicho tu nombre y apellidos, si asistir\u00e1s al enlace y si utilizar\u00e1s el servicio de autobuses.",
                        picture: "fa fa-times-circle"
                    };
                    break;
                default:
                    this.state = {
                        description: "-",
                        picture: ""
                    };
            }
        })()}
    }
    render(){
        return(
            <div id="emailContent">
                <div>
                    <div className="emailIcon">
                        <i className={this.state.picture}></i>
                    </div>
                    <div className="emailText">
                        {this.state.description}
                    </div>
                </div>
                <div className="emailClose">
                    <button className="close" onClick={this.props.hideEmailModal}>Cerrar</button>
                </div>
            </div>
        );
    }
}