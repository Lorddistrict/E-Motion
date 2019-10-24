import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import HeaderTitle from "../../Headers/elements/HeaderTitle";
import BackArrow from "../../Headers/elements/BackArrow";
import StarRating from "react-native-star-rating";

class BookVehicleScreen extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <BackArrow navigation={this.props.navigation} />
        <HeaderTitle title={'Select your date'}/>
        <View style={styles.cardContainer}>
          <View style={styles.cardBloc}>
            <View style={styles.cardLine}>
              <Text style={styles.cardText}>Ford Fiesta</Text>
            </View>
            <View style={styles.cardLine}>
              <Text style={styles.cardPrice}>$22.50</Text>
            </View>
            <View style={styles.cardStars}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={5}
                starSize={15}
                fullStarColor={'#ffb63f'}
              />
            </View>
          </View>
          <View style={styles.cardBlocI}>
            <Image
              style={styles.carImage}
              source={require('../../../../assets/cars/car1.png')}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
        </View>
      </View>
    )
  }
}

export default BookVehicleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5ff',
  },
  cardContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    borderColor: '#cdcdcd',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#efefef',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  cardBloc: {
    flex: 1,
    flexDirection: 'column',
  },
  cardBlocI: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cardLine: {
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AAA',
  },
  cardStars: {
    width: '40%',
  },
  carImage: {
    width: 100,
    height: 100,
  }
});