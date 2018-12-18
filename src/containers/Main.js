import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Footer from './Footer';

class MainPanel extends Component {

    componentWillMount() {
        // this.props.dispatch(currencyRatesActions.fetchUsdEurRate());
        // this.props.dispatch(currencyRatesActions.fetchCbrCurrencyRates());
    }

    componentDidUpdate() {
        // if (this.props.accessToken) {
        //     this.props.dispatch(vkActions.fetchNotificationStatus(this.props.accessToken));
        // }
    }

    render() {
        // const isProduction = process.env.NODE_ENV === 'production';
        // let logger = null;
        // if (!isProduction) {
        //     logger = <Logger/>;
        // }

        return (
            <UI.Panel id={this.props.id}>
                <UI.PanelHeader>
                    Библио Книги
                </UI.PanelHeader>
                <Footer/>
            </UI.Panel>
        );
    }
    //
    // renderNotificationButton() {
    //     const {notificationStatus} = this.props;
    //     if (!this.props.accessToken || notificationStatus === undefined) {
    //         return (<UI.Div>
    //             <UI.Button
    //                 before={<Icon24User/>}
    //                 level='1'
    //                 size="xl"
    //                 onClick={this.authorize.bind(this)}
    //             >Авторизоваться</UI.Button>
    //         </UI.Div>);
    //     }
    //
    //     return (<UI.Div>
    //         <UI.Button
    //             before={notificationStatus ? <Icon24NotificationDisable/> : <Icon24Notification/>}
    //             level={notificationStatus ? '2' : '1'}
    //             size="xl"
    //             onClick={this.toggleNotifications.bind(this)}
    //         >{notificationStatus ? 'Отписаться' : 'Подписаться'}</UI.Button>
    //     </UI.Div>);
    // }


    // authorize() {
    //     this.props.dispatch(vkActions.fetchAccessToken());
    // }
    //
    //
    // toggleNotifications() {
    //     const {notificationStatus} = this.props;
    //
    //     if (notificationStatus) {
    //         this.props.dispatch(vkActions.denyNotifications());
    //     } else {
    //         this.props.dispatch(vkActions.allowNotifications());
    //     }
    // }
}

// function mapStateToProps(state) {
//     return {
//         notificationStatus: vkSelectors.getNotificationStatus(state),
//     };
// }

// export default connect(mapStateToProps)(MainPanel);
export default MainPanel;