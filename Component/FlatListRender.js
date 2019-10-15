/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import {green} from 'ansi-colors';

class FlatListItem extends Component {
  render() {
    const {picture} = this.props.item;
    return (
      <SafeAreaView>
        <View style={styles.FlatListItem}>
          <Text style={styles.Info}>
            <Text> Name {this.props.item.name.first}</Text>
            <Text> Surname {this.props.item.name.last}</Text>
            <Text> Phone {this.props.item.phone}</Text>
          </Text>
          <View>
            <Image
              source={{
                uri: picture.large,
              }}
              style={{width: 128, height: 128}}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

class FlatListRender extends Component {
  state = {
    loading: false,
    data: [],
    error: null,
    refreshing: false,
  };

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    this.setState({loading: true});
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
          return <FlatListItem item={item} />;
        }}
        keyExtractor={item => item.login.uuid}
      />
    );
  }
}

const styles = StyleSheet.create({
  FlatListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
  },
  Info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: 20,
    backgroundColor: '#20B2AA',
    alignItems: 'center',
    height: 128,
  },
});

export default FlatListRender;

// make =() =>{

//   fetch('https://randomuser.me/api/?results=20')
//     .then(res => res.json())
//     .then(res => {
//       console.log(1);
//       this.setState({
//         data: res.results ,
//         error: res.error,
//         loading: false,
//       });
//     })
//     .catch(error => {
//       this.setState({ error, loading: false });
//     });

//     console.log(this.state.data)
// };

// componentDidMount(){
// this.makeRequset();
// }
