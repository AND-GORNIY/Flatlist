/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import FlatListRender from './Component/FlatListRender';

class App extends Component {
  render() {
    return (
      <View style={styles.component1}>
        <FlatListRender />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component1: {
    flex: 1,
    marginTop: 22,
  },
});

export default App;
