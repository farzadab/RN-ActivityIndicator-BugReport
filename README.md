# RN-ActivityIndicator-BugReport
Sample App for a bug report for React Native

## The problem

I have a screen with an `ActivityIndicator` which should be removed after some time (i.e. when the data arrives). But the problem is that it still remains on screen even after it is removed (or not outputted) in the render function. In addition, the `backgroundColor` of the `View` above disappears, too.

I also found out that doing one of the following fixes the problem, but I don't know why:
  - Unset the `zIndex` for the `View` above (having `zIndex` here has no reason what so ever, but I needed this in the project I was working on)
  - Set a `backgroundColor` for the `View` element containing this `ActivityIndicator`.

Inline code:
```
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
                <View style={styles.secondHalf}>
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
```

Here's a screen recording of what happens:
  - What should happen: the indicator should be removed after 3 seconds and the message `hello` should appear.
  - What happens: the indicator remains after the 3 seconds, and the message `hello` appears. In addition, the `backgroundColor` of the `View` above disappears.
![rn-activityindicator](https://cloud.githubusercontent.com/assets/5062458/22645827/4f48dbca-ec7e-11e6-8423-519fec0727cf.gif)


-------------------------
Versions:
  - react-native: 0.41.2
  - react: 15.4.2
  - react-native-cli: 2.0.1
  - devices:
    - Nexus 5 - Android version: 7.1
    - LG G2 mini - Android version: 5.0.2
