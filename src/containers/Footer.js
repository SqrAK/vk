import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Notification from '@vkontakte/icons/dist/28/notification';
import { View, Panel, PanelHeader, TabbarItem,Epic, Tabbar, ListItem } from '@vkontakte/vkui';

class Footer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'more'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render() {
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                    ><Icon24Notification /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'discover'}
                        data-story="discover"
                    ><Icon24Notification /></TabbarItem>

                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'notifications'}
                        data-story="notifications"
                    ><Icon24Notification /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'more'}
                        data-story="more"
                    ><Icon24Notification /></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Feed</PanelHeader>
                    </Panel>
                </View>
                <View id="discover" activePanel="discover">
                    <Panel id="discover">
                        <PanelHeader>Discover</PanelHeader>
                    </Panel>
                </View>
                <View id="messages" activePanel="messages">
                    <Panel id="messages">
                        <PanelHeader>Messages</PanelHeader>
                    </Panel>
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Notifications</PanelHeader>
                    </Panel>
                </View>
                <View id="more" activePanel="more">
                    <Panel id="more">
                        <PanelHeader>More</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

// export default connect(mapStateToProps)(Footer);
export default Footer;