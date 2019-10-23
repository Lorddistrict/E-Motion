import React from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList, Text, Image, Dimensions} from 'react-native';

export default class VehicleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
    console.log(this.state.dataSource);
  }

  async componentDidMount() {
    fetch('http://192.168.1.23:3000/vehicles')
      .then(response => response.json())
      .then((response) => {
        if (response.success) {
          console.log('success');
          this.setState({
            loading: false,
            dataSource: response.vehicles
          });
          console.log(this.state.dataSource);
        } else {
          alert('Error, response returned not a success');
        }
      })
      .catch(error => console.log(error))
  }

  _flatListItemSeparator = () => {
    return (
      <View style={styles.itemSeparator} />
    );
  };

  _renderItems = ({item}) => (
    <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', marginVertical: 10, flexDirection: 'row', width: '100%', paddingHorizontal: 10 }}>
      <View style={{ width: 200 }}>
        <Text style={{color: '#1c1c1c'}}>{item.brand} {item.name}</Text>
        <Text style={{color: '#9b9b9b'}}>${item.pricePerDay}</Text>
      </View>
      <View style={{ marginLeft: 30 }}>
        <Image style={{width: 90, height: 90}} source={require('../../../assets/cars/car1.png')} />
      </View>
    </View>
  );

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItems}
          keyExtractor={(item, index) => item._id}
          ItemSeparatorComponent={this._flatListItemSeparator}
          style={{flex: 1, width: '100%'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  itemSeparator: {
    height: .5,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});