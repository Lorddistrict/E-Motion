import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

// Components
import BackgroundApp from "../Background/elements/BackgroundApp";
import Category from "./Category";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <BackgroundApp/>
          <View style={styles.top}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={{uri: 'https://placehold.it/100x100'}}
                resizeMode='contain'
              />
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center', }}>
            <View style={styles.dataContainer}>
              <View style={styles.categ}>
                <Category title={'informations'} marginTop={5} />
                <View style={styles.line}>
                  <Text style={styles.fix}>Name : </Text>
                  <Text style={styles.name}>Etienne CRESPI</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.fix}>Age : </Text>
                  <Text style={styles.name}>22</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.fix}>Email : </Text>
                  <Text style={styles.name}>e.c@gmail.com</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.fix}>Password : </Text>
                  <Text style={styles.name}>**********</Text>
                </View>
                <Category title={'Bookings'} />
              </View>
            </View>
            <View style={{alignItems: 'center', width: '100%', }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate('UserBooking', {
                    navigation: this.props.navigation,
                  });
                }}
              >
                <Text style={styles.buttonText}>View my Bookings</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', width: '100%', }}>
              <TouchableOpacity
                style={styles.buttonRed}
                onPress={() => {
                  alert('test');
                }}
              >
                <Text style={styles.buttonText}>Disable my Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, },
  top: { flex: 1, alignItems: 'center', width: '100%', marginTop: '42%', },
  imgContainer: { borderWidth: 1, borderColor: '#000', borderRadius: 100, backgroundColor: '#ccc',
                  alignItems: "stretch", width: 200, height: 200, },
  img: { flex: 1, width: null, height: null, borderRadius: 100, },
  dataContainer: { flex: 1, flexDirection: 'column', marginTop: 30, alignItems: 'flex-start', },
  name: { fontSize: 16, fontWeight: 'bold', },
  categ: { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', },
  fix: { color: '#9738ff', fontSize: 16, fontWeight: 'bold', },
  line: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 20, marginTop: 10, },
  button: { width: 300, backgroundColor: '#5e55ff', borderRadius: 25, marginVertical: 20, height: 50, justifyContent: 'center', },
  buttonRed: { width: 300, backgroundColor: '#ff414c', borderRadius: 25, marginVertical: 20, height: 50, justifyContent: 'center', },
  buttonText: { fontSize: 16, fontWeight: '500', color: '#ffffff', textAlign: 'center', },
});