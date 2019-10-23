import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image,} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

// Screens
import BackgroundApp from "../Background/BackgroundApp";
import StarRating from "react-native-star-rating";

class VehicleDetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    const vehicleData = this.props.navigation.getParam('vehicleData');
    this.state = {
      vehicle: vehicleData,
    };
  }

  _bookTheVehicle = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <BackgroundApp />
        <View style={styles.navContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Booking');
            }}
          >
            <Icon style={styles.icon}
                  name={'arrow-left'}
                  size={30}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>Car Details</Text>
        </View>

        <View style={styles.card}>

          <View style={styles.cardLine}>
            <View style={styles.cardSizer}>
              <View style={styles.cardTextBox}>
                <Text style={styles.cardTextBrand}>{this.state.vehicle.brand} {this.state.vehicle.name}</Text>
              </View>
              <View style={styles.cardTextBox}>
                <Text style={styles.cardTextPrice}>${this.state.vehicle.pricePerDay}</Text>
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
            <View style={styles.carContainer}>
              <Image style={styles.carImage} source={require('../../../assets/cars/car1.png')} />
            </View>
          </View>

          <View style={styles.freeOptions}>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.freeOptionIcon} name={'check'} size={15} />
              <Text style={styles.freeOptionsText}>Free cancellation</Text>
            </View>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.freeOptionIcon} name={'check'} size={15} />
              <Text style={styles.freeOptionsText}>Unlimited mileage</Text>
            </View>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.freeOptionIcon} name={'check'} size={15} />
              <Text style={styles.freeOptionsText}>Not charged until pick up</Text>
            </View>
          </View>

          <View style={styles.freeOptions}>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.includedOptionsIcon} name={'angle-right'} size={15} />
              <Text style={styles.includedOptionsText}>Automatic transmission</Text>
            </View>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.includedOptionsIcon} name={'angle-right'} size={15} />
              <Text style={styles.includedOptionsText}>Air conditioner</Text>
            </View>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.includedOptionsIcon} name={'angle-right'} size={15} />
              <Text style={styles.includedOptionsText}>4 passengers</Text>
            </View>
            <View style={styles.freeOptionLine}>
              <Icon style={styles.includedOptionsIcon} name={'angle-right'} size={15} />
              <Text style={styles.includedOptionsText}>4 doors</Text>
            </View>

          </View>

          <TouchableOpacity style={styles.button}
                            onPress={this._bookTheVehicle}
          >
            <Text style={styles.buttonText}>Book</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#cec3ff', },
  navContainer: { justifyContent: 'flex-start', marginTop: 40, marginLeft: 20, alignItems: 'flex-start', },
  icon: { color: '#ffffff' },

  title: { marginTop: 40, },
  titleText: { color: '#ffffff', fontSize: 20, backgroundColor: 'rgba(58,58,58,0.8)', paddingLeft: 10, paddingVertical: 5, },

  card: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center', marginHorizontal: 20, marginVertical: 40, flexDirection: 'column', },
  cardLine: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '85%', },
  cardSizer: { flexDirection: 'column', },
  cardTextBox: { paddingVertical: 3, },
  cardTextBrand: { color: '#1c1c1c' },
  cardTextPrice: { color: '#9b9b9b' },
  cardStars: { width: 25, paddingVertical: 3, },
  carContainer: { marginLeft: 30, },
  carImage: { width: 100, height: 100, marginRight: 20, },
  button: { width: 300, backgroundColor: '#5e55ff', borderRadius: 25, marginVertical: 20, height: 50, justifyContent: 'center', },
  buttonText: { fontSize: 16, fontWeight: '500', color: '#ffffff', textAlign: 'center', },

  freeOptions: { flex: 1, flexDirection: 'column', alignItems: 'flex-start', width: '85%', },
  freeOptionLine: { flexDirection: 'row', alignItems: 'center' },
  freeOptionsText: { color: '#80ff88', },
  freeOptionIcon: { color: '#80ff88', paddingRight: 10, },
  includedOptionsIcon: { color: '#1c1c1c', paddingRight: 10, },
  includedOptionsText: { color: '#1c1c1c', },
});

export default VehicleDetailsScreen;