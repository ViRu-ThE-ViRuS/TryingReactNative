import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import FirebaseTest from './../Util/FirebaseUtils'

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerTintColor: '#000'
    }

    notifyOnFirebase(user) {
        FirebaseTest(user);
    }

    render() {
        user = this.props.navigation.state.params.userProfile;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.headerImage}
                        source={{ uri: user.picture.large }} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.detailText}>{user.name.first} {user.name.second}</Text>
                    <Text style={styles.detailText}>{user.email}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => this.notifyOnFirebase(user)}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 20 }}>Notify [Test Firebase]</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

{/* <Text>{user.name.first} {user.name.last}</Text> */ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        flex: 2,
        alignSelf: 'stretch',
        margin: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    content: {
        padding: 15,
        flex: 5
    },
    detailText: {
        fontSize: 25
    },
    headerImage: {
        height: 250,
        width: 250,
        borderRadius: 15,
        flex: 1,
        resizeMode: 'contain'
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
})