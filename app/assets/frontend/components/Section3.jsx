export default class Section3 extends React.Component{
    resetAnimation(){
        $('.swing').attr('class', 'swing');
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
                    <div className="contentBodyLeft">
                        <i className="fa fa-clock-o"></i>
                        <p className="swing" onMouseOver={this.resetAnimation}>Cu&aacute;ndo</p>
                        <p>{this.props.contentBodyLeft[0]}</p>
                        <p>{this.props.contentBodyLeft[1]}</p>
                        <p>{this.props.contentBodyLeft[2]}</p>
                    </div>
                    <div className="contentBodyLeft">
                        <i className="fa fa-map-marker"></i>
                        <p className="swing" onMouseOver={this.resetAnimation}>D&oacute;nde</p>
                        <p>{this.props.contentBodyLeft[3]}</p>
                        <p>{this.props.contentBodyLeft[4]}</p>
                    </div>
                    <div className="contentBodyCenter">
                        <img src={this.props.img} alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}