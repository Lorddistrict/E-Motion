import React from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';

export default class VehicleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  async componentDidMount() {
    fetch('http://192.168.1.23:3000/vehicles')
      .then(response => response.json())
      .then((response) => {
        if (response.success) {
          this.setState({
            loading: false,
            dataSource: response.vehicles
          });
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
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('Vehicle', {
          vehicleData: item,
          navigation: this.props.navigation,
        });
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardLine}>
          <View style={styles.cardSizer}>
            <View style={styles.cardTextBox}>
              <Text style={styles.cardTextBrand}>{item.brand} {item.name}</Text>
            </View>
            <View style={styles.cardTextBox}>
              <Text style={styles.cardTextPrice}>${item.pricePerDay} /d</Text>
            </View>
            <View style={styles.cardStars}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.rate}
                starSize={15}
                fullStarColor={'#ffb63f'}
              />
            </View>
          </View>
          <View style={styles.carContainer}>
            <Image style={styles.carImage} source={require('../../../assets/cars/car1.png')} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
          style={styles.flatList}
        />
      </View>
    )
  }
}

// Changer le design et retirer les width en val fixes !!!!

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', },
  itemSeparator: { height: .5, width: "100%", backgroundColor: "rgba(0,0,0,0.5)", },

  card: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center', marginHorizontal: 30, marginVertical: 10, flexDirection: 'column', },
  cardLine: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '85%', },
  cardSizer: { flexDirection: 'column', },
  cardTextBox: { paddingVertical: 3, },
  cardTextBrand: { color: '#1c1c1c' },
  cardTextPrice: { color: '#9b9b9b' },
  cardStars: { width: 25, paddingVertical: 3, },
  carContainer: { marginLeft: 30, },
  carImage: { width: 90, height: 90, marginRight: 20, },
  flatList: { flex: 1, width: '100%' },
});