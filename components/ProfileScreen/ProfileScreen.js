import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    }

    render() {
        user = this.props.navigation.state.params.userProfile;
        return (
            <View style={styles.container}>
                <Text>{user.name.first} {user.name.last}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    }
})