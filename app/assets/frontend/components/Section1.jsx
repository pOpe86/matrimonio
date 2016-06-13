export default class Section1 extends React.Component{
    render(){
        var currentTimeStamp = Date.now() / 1000;
        return(
            <section id={this.props.id} className={this.props.css}>
                <div className="contentHeader slowUp_1">
                    <img src={require('../../images/logo.png')} alt=""/>
                </div>
                <div className="countdown countdown-container container grow_04"
                     data-start="1465822240"
                     data-end="1468598400"
                     data-now={currentTimeStamp}
                     data-border-color="rgba(255, 255, 255, .8)">
                    <div className="clock row">
                        <div className="clock-item clock-days countdown-time-value col-sm-3 col-md-3">
                            <div className="wrap">
                                <div className="inner">
                                    <div id="canvas-days" className="clock-canvas"></div>

                                    <div className="text">
                                        <p className="val">0</p>
                                        <p className="type-days type-time">D&iacute;as</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clock-item clock-hours countdown-time-value col-sm-3 col-md-3">
                            <div className="wrap">
                                <div className="inner">
                                    <div id="canvas-hours" className="clock-canvas"></div>

                                    <div className="text">
                                        <p className="val">0</p>
                                        <p className="type-hours type-time">Horas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clock-item clock-minutes countdown-time-value col-sm-3 col-md-3">
                            <div className="wrap">
                                <div className="inner">
                                    <div id="canvas-minutes" className="clock-canvas"></div>

                                    <div className="text">
                                        <p className="val">0</p>
                                        <p className="type-minutes type-time">Minutos</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clock-item clock-seconds countdown-time-value col-sm-3 col-md-3">
                            <div className="wrap">
                                <div className="inner">
                                    <div id="canvas-seconds" className="clock-canvas"></div>

                                    <div className="text">
                                        <p className="val">0</p>
                                        <p className="type-seconds type-time">Segundos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
