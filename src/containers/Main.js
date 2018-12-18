import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Footer from './Footer';

class MainPanel extends Component {

    componentWillMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <UI.Panel id={this.props.id}>
                <UI.PanelHeader>
                    Библио Книги
                </UI.PanelHeader>
                <Footer/>
            </UI.Panel>
        );
    }
}

// export default connect(mapStateToProps)(MainPanel);
export default MainPanel;