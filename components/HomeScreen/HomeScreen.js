import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoadingData: true,
            data: []
        };
    }

    getData() {
        fetch('https://randomuser.me/api/?results=15')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    isLoadingData: false,
                    data: response.results
                });
            });
    }

    componentDidMount() {
        this.getData();
    }

    _renderItem = ({ item }) => {
        return (<ListItem
            roundAvatar
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            avatar={{ uri: item.picture.thumbnail }}
            onPress={() => this.props.navigation.navigate('Profile', { userProfile: item })} />)
    }

    _keyExtractor = (item, index) => item.email;

    render() {
        if (this.state.isLoadingData) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator style={styles.loading} size='large' />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
        flex: 1
    }
});