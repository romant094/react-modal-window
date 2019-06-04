import React, {Component} from 'react';
import Modal from "../modal";

export default class App extends Component {
    state = {isModalOpen: false};

    openModal() {
        this.setState({isModalOpen: true});
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }

    render() {
        const {isModalOpen} = this.state;

        return (
            <div>
                <button style={{margin: '100px',padding:'10px'}} onClick={() => this.openModal()}>Open modal</button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => this.closeModal()}
                    docs={['/doc1.pdf', '/doc2.pdf']}>
                </Modal>
            </div>
        );
    }
}

