import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';
export default class App extends React.Component {
  state = {
    fontsAreLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'anticon': require('./assets/fonts/anticon.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsAreLoaded ? <Text>Open up App.js to start working on your app!</Text> : <AppLoading />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
