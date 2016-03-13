import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ModalContent from './components/ModalContent';
import EmailModal from './components/EmailContent';
var Modal = require('boron/WaveModal');
var FadeModal = require('boron/FadeModal');

class Main extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            modalId: 0,
            modalEmail: 'emailSuccess'
        }
    }
    showModal (id){
        this.setState({
            modalId: id
        });
        this.refs.modal.show();
    }
    hideModal (){
        this.refs.modal.hide();
    }
    displayEmailModal(id){
        this.setState({
            modalEmail: id
        });
        this.refs.email.show();
    }
    showEmailModal (){

        var name = $('#mainName').val();
        var surname = $('#mainSurname').val();
        var cming =  $('#comming').val();
        var autobus = $('#bus').val();

        if (name.length == 0 || surname.length == 0 || cming == null || autobus == null){
            this.displayEmailModal("emptyParams");
        }
        else{
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
                    this.displayEmailModal("emailSuccess");
                }).bind(this),
                error:(function(){
                    this.displayEmailModal("emailError");
                }).bind(this)
            });
        }
    }
    hideEmailModal (){
        this.refs.email.hide();
    }
    render() {
        return (
            <div className="main-container">
                <div className="st-container">
                    <Header />
                    <Content showModal={this.showModal.bind(this)} showEmailModal={this.showEmailModal.bind(this)} />
                    <Footer />
                    <Modal ref="modal">
                        <ModalContent hideModal={this.hideModal.bind(this)} modalId={this.state.modalId} />
                    </Modal>
                    <FadeModal ref="email">
                        <EmailModal hideEmailModal={this.hideEmailModal.bind(this)} modalEmail={this.state.modalEmail} />
                    </FadeModal>
                </div>
            </div>
        );
    }
}

let documentReady = () => {
    ReactDOM.render(
        <Main />,
        document.getElementById('react')
    );
    $('.countdown').final_countdown();
};

$(documentReady);