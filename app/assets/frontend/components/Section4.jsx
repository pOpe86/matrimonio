import Carousel from "./Carousel";

export default class Section4 extends React.Component{
    render (){
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
                        <p>{this.props.contentBody[0]}</p>
                        <p>{this.props.contentBody[1]}</p>
                    </div>
                    <Carousel showModal={this.props.showModal}/>
                </div>
            </section>
        );
    }
}