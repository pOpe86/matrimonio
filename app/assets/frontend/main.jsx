import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ModalContent from './components/ModalContent';
var Modal = require('boron/WaveModal');

class Main extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            modalId: 0
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
    render() {
        return (
            <div className="main-container">
                <div className="st-container">
                    <Header />
                    <Content showModal={this.showModal.bind(this)} />
                    <Footer />
                    <Modal ref="modal">
                        <ModalContent hideModal={this.hideModal.bind(this)} modalId={this.state.modalId} />
                    </Modal>
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