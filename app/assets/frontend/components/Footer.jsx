export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="leftFooter">
                    <p>IV&Aacute;N & ELISA</p>
                </div>
                <div className="rings">
                    <img src={require('../../images/star.png')} alt=""/>
                </div>
                <div className="rightFooter">
                    <p className="longDate">15 DE JULIO DE 2016</p>
                    <p className="shortDate">15 - 07 - 2016</p>
                </div>
            </div>
        );
    }
}