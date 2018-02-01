import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    }

    render() {
        user = this.props.navigation.state.params.userProfile;
        return (
            <View>
                <Text>{user.name.first} {user.name.last}</Text>
            </View>
        )
    }
}