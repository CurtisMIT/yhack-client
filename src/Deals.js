import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Deal from './Deal'


class Deals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let items = [
            {
              source: require('../assets/sprite1.jpg'),
              itemName: "Sprite 35 Can",
              price: '$24.99',
              storeSource: require('../assets/stop.jpeg')
            },
            {
              source: require('../assets/sprite2.png'),
              itemName: "7 Up bottle, 6-pack",
              price: '$3.49',
              storeSource: require('../assets/walmart.jpg')
            },
            {
              source: require('../assets/sprite3.jpg'),
              itemName: "1 Can 355 ml",
              price: '$0.79',
              storeSource: require('../assets/Ferraro.png')
            },
        ]
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                </View>
                <Text>{this.props.name}</Text>
                <View>
                    <TouchableOpacity onPress={this.props.cameraToggle}>
                        <Entypo 
                            name='cross'
                            color='black'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.popup}>
                    <ScrollView>
                        { items.map( (d, idx) => {
                            return <Deal key={idx} d={d}/>
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
{/* <StatusBar hidden={true} />
                <Text>YEEEEET</Text>
                <TouchableOpacity onPress={this.props.cameraToggle}>
                    <Entypo 
                        name='cross'
                        color='black'
                        size={30}
                    />
                </TouchableOpacity> */}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    }, 
    top:{
      flex: 1,
    },
    popup:{
      flex: 2,
      backgroundColor: 'white',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,    
    }, 
    left:{
      marginTop: -10
    },
    middle:{
      display: 'flex', 
      flexDirection: 'column', 
      marginRight: 5
    }, 
    right:{
      marginRight: 20,
      marginTop: -10,
    },
    itemName:{
      fontWeight: 'bold',
      fontSize: 14,
      marginTop: 10,
      width: 100,
    }, 
    prices:{
      marginTop: 5,
      color: 'red',
      fontSize: 20,
      fontWeight:'bold',
    },
    arrow:{
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginTop: -20,
      marginLeft: 20,
    },  ItemImage:{
      width: 75,
      height: 75,
      resizeMode: 'contain',
      marginTop: 10,
      marginLeft: 15,   
    }, storeImage:{    
      width: 75,
      height: 75,
      resizeMode: 'contain',
    },
    itemBox:{
      flex: 1,
      height: 125,
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
      paddingTop: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 20,
      shadowOpacity: 0.75,
      shadowRadius: 10,
      shadowColor: '#DADADA',
      shadowOffset: { height: 4, width: 0 },
    },
});

export default Deals