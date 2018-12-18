import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
// import {isWebView} from '@vkontakte/vkui/src/lib/webview';
// import * as vkSelectors from '../store/vk/reducer';
// import * as vkActions from '../store/vk/actions';
import MainPanel from './containers/Main';

class App extends Component {

    componentWillMount() {
        // this.props.dispatch(vkActions.initApp());
        // this.props.dispatch(vkActions.fetchAccessToken());
    }

    render() {
        let activePanel = this.props.pageId === 'about' ? 'aboutPanel' : 'mainPanel';
        // isWebView={isWebView}
        return (
            <UI.ConfigProvider insets={this.props.insets} >
                <UI.Root activeView="mainView">
                    <UI.View id="mainView" activePanel={activePanel}>
                        <MainPanel id="mainPanel" accessToken={this.props.accessToken}/>
                    </UI.View>
                </UI.Root>
            </UI.ConfigProvider>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         accessToken: vkSelectors.getAccessToken(state),
//         insets: vkSelectors.getInsets(state),
//     };
// }

// export default connect(mapStateToProps)(App);
export default App;
