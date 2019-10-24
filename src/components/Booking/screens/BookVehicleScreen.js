import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import HeaderTitle from "../../Headers/elements/HeaderTitle";
import BackArrow from "../../Headers/elements/BackArrow";
import StarRating from "react-native-star-rating";
import DatePicker from 'react-native-datepicker'
import Icon from "react-native-vector-icons/FontAwesome";

class BookVehicleScreen extends Component {

  constructor(props) {
    super(props);
    const vehicleData = this.props.navigation.getParam('vehicleData');
    this.state = {
      dateStart: '2019-10-01',
      dateEnd: '2019-10-07',
      details: '',
      vehicle: vehicleData,
    }
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
        <View style={styles.cardDatePicker}>
          <DatePicker
            style={styles.datepicker}
            date={this.state.dateStart}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={this.state.dateStart}
            maxDate="2019-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={
              <Icon
                name="calendar-o"
                size={30}
                color="#bababa"
              />
            }
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 10,
                marginLeft: 0
              },
              dateInput: {
                marginRight: 10
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          <DatePicker
            style={styles.datepicker}
            date={this.state.dateEnd}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={this.state.dateEnd}
            maxDate="2019-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={
              <Icon
                name="calendar-o"
                size={30}
                color="#bababa"
              />
            }
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 10,
                marginLeft: 0
              },
              dateInput: {
                marginRight: 10
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          <View style={styles.test}>
            <TextInput
              style={styles.cardDesc}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholder={'Details'}
              placeholderTextColor={'#b9b9b9'}
              onChangeText={ (details) => this.setState({details}) }
              multiline = {true}
              numberOfLines = {10}
            />
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center', }}>
          <TouchableOpacity
            style={styles.next}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              this.props.navigation.navigate('VehicleDetails', {
                vehicleData: this.state.vahicle,
                navigation: this.props.navigation,
              });
            }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
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
  datepicker: {
    width: '100%',
    marginVertical: 20,
  },
  test: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 5,
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