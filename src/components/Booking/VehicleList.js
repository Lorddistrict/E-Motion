import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Alert,
  Image,
  Button
} from 'react-native';

export default class VehicleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  async componentDidMount() {
    fetch('http://51.77.221.45:3000/vehicle')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error))
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      />
    );
  };

  renderItem = (data) => {
    <View style={styles.list}>
      <View style={styles.elementContainer}>
        <View style={styles.imgBox}>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: data.item.main_picture}}
          />
        </View>
        <View style={styles.dataBox}>
          <View>
            <Text style={styles.lightText}>Modèle : {data.item.model}</Text>
            <Text style={styles.lightText}>Couleur : {data.item.color}</Text>
            <Text style={styles.lightText}>N° de plaque : {data.item.license_plate}</Text>
            <Text style={styles.lightText}>Prix : {data.item.rental_price}€/j</Text>
          </View>
          <Button
            title="Voir l'offre"
            onPress={() => Alert.alert('Clicked on ' + data.item.model)}
            style={styles.offerBtn}
          />
        </View>
      </View>
    </View>
  };

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
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.uuid.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#145373',
    width: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#ffffff',
  },
  elementContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imgBox: {
    width: 150,
    height: 150,
    marginRight: 10,
    flexDirection: 'column',
  },
  dataBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
  },
  offerBtn: {
    flex: 1,
    marginBottom: 50,
    color: '#ffffff'
  }
});