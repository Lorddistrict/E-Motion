import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import BackArrow from "../../Headers/elements/BackArrow";
import HeaderTitle from "../../Headers/elements/HeaderTitle";
import StarRating from "react-native-star-rating";

class PurchaseSummaryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicle: this.props.navigation.getParam('vehicleData'),
      details: this.props.navigation.getParam('details'),
      dateStart: this.props.navigation.getParam('dateStart'),
      dateEnd: this.props.navigation.getParam('dateEnd'),
      dateStartObj: new Date(this.state.dateStart + ' 00:00:00'),
    };
    console.log(dateStartObj);
  }

  render() {
    return (
      <View style={styles.container}>
        <BackArrow navigation={this.props.navigation} />
        <HeaderTitle title={'Select your date'}/>
        <View style={styles.cardContainer}>
          <View style={styles.cardBloc}>
            <View style={styles.cardLine}>
              <Text style={styles.cardText}>{this.state.vehicle.brand} {this.state.vehicle.name}</Text>
            </View>
            <View style={styles.cardLine}>
              <Text style={styles.cardPrice}>${this.state.vehicle.pricePerDay}</Text>
            </View>
            <View style={styles.cardStars}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.vehicle.rate}
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

        <View>
          <View style={styles.cardContainer}>
            <Text style={styles.date}>{this.state.dateStart}</Text>
            <Text style={styles.arrow}>-></Text>
            <Text style={styles.date}>{this.state.dateEnd}</Text>
            <Text style={styles.result}>$157.50</Text>
          </View>
          <Text style={styles.details}>{this.state.details}</Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', }}>
          <TouchableOpacity
            style={styles.next}
            onPress={() => {
              this.props.navigation.navigate('VehicleDetails', {
                navigation: this.props.navigation,
              });
            }}
          >
            <Text style={styles.nextText}>Book</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              this.props.navigation.navigate('VehicleDetails', {
                navigation: this.props.navigation,
              });
            }}
          >
            <Text style={styles.cancelText}>Previous</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default PurchaseSummaryScreen;

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
  result: {
    color: '#5e55ff',
    fontSize: 16,
    fontWeight: 'bold',
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
  },
  cardDatePicker: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    borderColor: '#cdcdcd',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'column',
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
  cardDesc: {
    height: 150,
    textAlignVertical: 'top',
  },
  next: {
    width: 350,
    backgroundColor: '#5e55ff',
    borderRadius: 25,
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
  },
  nextText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  cancel: {
    width: 350,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5e55ff',
    textAlign: 'center',
  },
});