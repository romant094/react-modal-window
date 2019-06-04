import React, {Component} from 'react';

import styles from './modal.module.css';

import closeIcon from './icons/close-icon.svg';
import clockIcon from './icons/clock-icon.svg';
import bulbIcon from './icons/bulb-icon.svg';
import claimIcon from './icons/claim-icon.svg';
import pushpinIcon from './icons/pushpin-icon.svg';

export default class Modal extends Component {
    state = {
        clientWidth: window.innerWidth
    };

    close = (e) => {
        e.preventDefault();

        if (this.props.onClose && this.state.clientWidth > 767) {
            this.props.onClose();
        }
    };

    onTouchStart = (e) => {
        this.setState({touchStart: e.touches[0].clientX});
    };

    onTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (Math.abs(touchEndX - this.state.touchStart) > 20) {
            this.props.onClose();
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateClientWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateClientWidth);
    }

    updateClientWidth = () => {
        this.setState({clientWidth: window.innerWidth});
    };

    render() {
        if (this.props.isOpen === false) return null;
        const {
            modal, background, containerHeader, containerContent,
            modalHeader, modalTitle, modalTopic, modalClose,
            modalContent, contentInfo, icon, modalLink, wrapper
        } = styles;

        return (
            <div className={wrapper}>
                <div className={modal}
                     onTouchStart={this.onTouchStart}
                     onTouchEnd={this.onTouchEnd}
                >
                    <div className={modalHeader}>
                        <div className={containerHeader}>
                            <p className={modalTitle}>
                                Отчет
                            </p>
                            <h3 className={modalTopic}>
                                6-НДФЛ за 1 квартал
                            </h3>
                        </div>
                        <span className={modalClose}
                              onClick={e => this.close(e)}>
                            <img src={closeIcon} alt="Close"/>
                        </span>
                    </div>
                    <div className={modalContent}>
                        <div className={containerContent}>
                            <div className={contentInfo}>
                                <div className={icon}>
                                    <img src={clockIcon} alt="Clock"/>
                                </div>
                                <div className="text">
                                    1 - 30 апреля
                                </div>
                            </div>
                            <div className={contentInfo}>
                                <div className={icon}>
                                    <img src={bulbIcon} alt="Bulb"/>
                                </div>
                                <div className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum excepturi
                                    nisi.
                                    Alias animi earum eius enim in iste, itaque magnam optio. Cumque dolore, impedit
                                    molestias nemo odio perferendis placeat quas reiciendis similique voluptatibus! A
                                    dolor
                                    explicabo hic iste minima neque numquam odio quae quos ratione reprehenderit ullam,
                                    veritatis voluptatibus?
                                </div>
                            </div>
                            <div className={contentInfo}>
                                <div className={icon}>
                                    <img src={claimIcon} alt="Claim"/>
                                </div>
                                <div className="text">
                                    Штраф за несдачу - 1000 рублей за каждый полный или
                                    неполный месяц просрочки
                                </div>
                            </div>
                            <div className={contentInfo}>
                                <div className={icon}>
                                    <img src={pushpinIcon} alt="Pushpin"/>
                                </div>
                                <div className="text">
                                    <a className={modalLink}
                                       href={this.props.docs[0]}>Бланк</a>
                                    &nbsp;и&nbsp;
                                    <a className={modalLink}
                                       href={this.props.docs[1]}>образец заполнения
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={background}
                     onClick={e => this.close(e)}>
                </div>
            </div>
        );
    }
}