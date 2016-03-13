export default class ButtonMenu extends React.Component{
    setChecked(id){
        $('#'+id).prop('checked',true);
        $('#st-scroll').attr('class','st-scroll scrollTo'+id);

        // Run animations
        $('.slowDown_04').removeClass('slowDown_04');
        $('.slowUp_04').removeClass('slowUp_04');
        $('.slowUp_07').removeClass('slowUp_07');
        $('.slowUp_1').removeClass('slowUp_1');
        $('.grow').removeClass('grow');
        $('.grow_04').removeClass('grow_04');

        $(this.props.link+' .subHeader h3').addClass('slowUp_04');
        $(this.props.link+' .dotsLeft').addClass('slowUp_04');
        $(this.props.link+' .dotsRight').addClass('slowUp_04');

        if ($(this.props.link+' .contentBody')){
            if ($(this.props.link)[0].id.indexOf("1") > 0){
                $(this.props.link+' .contentHeader h2').addClass('slowUp_1');
                $(this.props.link+' .contentBody').addClass('slowUp_04');
            }
            else{
                $(this.props.link+' .contentBody').addClass('slowUp_1');
                $(this.props.link+' .contentHeader h2').addClass('slowDown_04');
            }
        }
        if ($(this.props.link+' .contentBodyLeft')){
            if ($(this.props.link)[0].id.indexOf("3") > 0){
                $(this.props.link+' .swing').addClass('slowUp_07');
            }
            else{
                $(this.props.link+' .contentBodyLeft').addClass('slowUp_07');
            }
        }
        if ($(this.props.link+' .contentBodyRight')){
            $(this.props.link+' .contentBodyRight').addClass('slowUp_07');
        }
        if ($(this.props.link+' .contentBodyCenter')){
            $(this.props.link+' .contentBodyCenter').addClass('grow');
        }
        if ($(this.props.link+' .countdown-container')){
            $(this.props.link+' .countdown-container').addClass('grow_04');
        }
        if ($(this.props.link+' .carousel')){
            $(this.props.link+' .carousel').addClass('slowUp_07');
        }
    };
    render (){
        return(
            <div>
                <input id={this.props.id} type="radio" name="radio-set" checked={this.props.checked}/>
                <a className="headerText" onClick={this.setChecked.bind(this,this.props.id)}>{this.props.text}</a>
                <a className="headerIcons" onClick={this.setChecked.bind(this,this.props.id)}><i className={this.props.icon}></i></a>
            </div>
        );
    }
}