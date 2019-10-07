import React from 'react';
import { 
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
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
        fetch('https://jsonplaceholder.typicode.com/users')
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
                width:"100%",
                backgroundColor:"rgba(0,0,0,0.5)",
            }}
            />
        );
    }

    renderItem = (data) =>
        <TouchableOpacity style={styles.list}>
            <Text style={styles.lightText}>{data.item.name}</Text>
            <Text style={styles.lightText}>{data.item.email}</Text>
            <Text style={styles.lightText}>{data.item.company.name}</Text>
        </TouchableOpacity>

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
        backgroundColor: "#fff"
    },
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});