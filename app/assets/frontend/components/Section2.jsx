export default class Section2 extends React.Component{
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
                    <div className="contentBodyLeft">
                        <i className="fa fa-bus"></i>
                        <p className="swing">Autobuses</p>
                        <p>{this.props.contentBodyLeft}</p>
                    </div>
                    <div className="contentBodyCenter">
                        <img src={this.props.img} alt=""/>
                    </div>
                    <div className="contentBodyRight">
                        <i className="fa fa-taxi"></i>
                        <p id="taxisInitial" className="swing">Servicio de Taxis</p>
                        <p id="taxisHide" className="swing">Taxis</p>
                        <p>{this.props.contentBodyRight}</p>
                    </div>
                </div>
            </section>
        );
    }
}