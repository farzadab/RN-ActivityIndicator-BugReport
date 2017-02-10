import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

export default class TestReport extends Component {
    state = {
        showIndicator: true,
    };

    componentDidMount() {
        setTimeout(() => this.setState({showIndicator: false}), 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstHalf}>
                </View>
                <View style={styles.secondHalf} collapsable={false}>
                    {this.state.showIndicator
                        ? (<ActivityIndicator size="large"/>)
                        : (<Text>hello</Text>)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstHalf: {
        zIndex: 1,
        flex: 1,
        backgroundColor: "#2f2",
    },
    secondHalf: {
        flex: 1,
    },
});

AppRegistry.registerComponent('TestReport', () => TestReport);
