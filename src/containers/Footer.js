import React, {Component} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24User from '@vkontakte/icons/dist/24/user';
import { View, Panel, PanelHeader,
    TabbarItem,Epic, Tabbar, HorizontalScroll,
    FixedLayout, Tabs, TabsItem,
    ListItem } from '@vkontakte/vkui';

class Footer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'more',
            activeTab6: 'all',
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
                    ><Icon24Search /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'more'}
                        data-story="more"
                    ><Icon24User /></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <FixedLayout vertical="top">
                            <Tabs theme="header" type="buttons">
                                <HorizontalScroll>
                                    <TabsItem
                                        onClick={() => this.setState({ activeTab6: 'all' })}
                                        selected={this.state.activeTab6 === 'all'}
                                    >
                                        Выбор редакции
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({ activeTab6: 'users' })}
                                        selected={this.state.activeTab6 === 'users'}
                                    >
                                        Новинки
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({ activeTab6: 'groups' })}
                                        selected={this.state.activeTab6 === 'groups'}
                                    >
                                        Популярные
                                    </TabsItem>
                                </HorizontalScroll>
                            </Tabs>
                        </FixedLayout>
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