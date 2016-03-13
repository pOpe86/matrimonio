import ButtonMenu from "./ButtonMenu"

export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <ButtonMenu
                    id="buttonMenu1"
                    text="INICIO"
                    icon="fa fa-calendar"
                    link="#section-1"
                    checked="checked"
                />
                <ButtonMenu
                    id="buttonMenu2"
                    text="TRANSPORTE"
                    icon="fa fa-bus"
                    link="#section-2"
                />
                <ButtonMenu
                    id="buttonMenu3"
                    text="DETALLES"
                    icon="fa fa-map-marker"
                    link="#section-3"
                />
                <ButtonMenu
                    id="buttonMenu4"
                    text="PARTICIPA"
                    icon="fa fa-gift"
                    link="#section-4"
                />
                <ButtonMenu
                    id="buttonMenu5"
                    text="CONFIRMA!"
                    icon="fa fa-thumbs-o-up"
                    link="#section-5"
                />
            </div>
        );
    }
}