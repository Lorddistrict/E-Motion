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
            dataSource : []
        };
    }

    async componentDidMount() {
        fetch('http://ec2-34-244-49-67.eu-west-1.compute.amazonaws.com:3030/vehicles')
        //fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({
                loading: false,
                dataSource: responseJson['data']
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
    }

    renderItem = (data) =>
        <View style={styles.list}>
            <View style={styles.elementContainer}>
                <View style={styles.imgBox}>
                    <Image
                        style={{width: 150, height: 150}}
                        source = {{uri: 'https://placehold.it/150x150'}}
                    />
                </View>
                <View style={styles.dataBox}>
                    <View>
                        <Text style={styles.lightText}>Modèle : {data.item.model}</Text>
                        <Text style={styles.lightText}>Couleur : {data.item.color}</Text>
                        <Text style={styles.lightText}>N° de plaque : {data.item.numberplate}</Text>
                        <Text style={styles.lightText}>Prix : {data.item.pricesale}€</Text>
                    </View>
                    <Button
                        title="Voir l'offre"
                        color="#337ab7"
                        onPress={() => Alert.alert('Clicked on ' + data.item.model)}
                        style={styles.offerBtn}
                    />
                </View>
            </View>
        </View>

    render() {
        if (this.state.loading) {
            return(
                <View style={styles.loader}> 
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <FlatList
                    data = {this.state.dataSource}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem = {item => this.renderItem(item)}
                    keyExtractor = {item => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: '#fff',
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
    }
});