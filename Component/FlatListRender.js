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

class FlatListItem extends Component {
  render() {
    const {picture} = this.props.item;
    return (
      <SafeAreaView>
        <View style={styles.FlatListItem}>
          <View style={styles.Info}>
            <Text style={styles.Text}> Name {this.props.item.name.first}</Text>
            <Text style={styles.Text}>
              {' '}
              Surname {this.props.item.name.last}
            </Text>
            <Text style={styles.Text}> Phone {this.props.item.phone}</Text>
          </View>
          <View>
            <Image
              source={{
                uri: picture.large,
              }}
              style={styles.Image}
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
    fetch('https://randomuser.me/api/?results=500')
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
      <View>
        <View style={{marginTop: 10}} />

        <FlatList
          windowSize={5}
          data={this.state.data}
          renderItem={({item}) => {
            return <FlatListItem item={item} />;
          }}
          keyExtractor={item => item.login.uuid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  Info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#20B2AA',
    alignItems: 'center',
    height: 128,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  Text: {
    fontSize: 20,
    backgroundColor: '#20B2AA',
  },
  Image: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    width: 128,
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
