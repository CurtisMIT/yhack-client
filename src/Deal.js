import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class Deal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.itemBox}>
                <View style={styles.left}>
                    <Image style={styles.ItemImage} source={this.props.d.source}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.itemName}>{this.props.d.itemName}</Text>
                    <Text style={styles.prices}>{this.props.d.price}</Text>
                </View>
                <View style={styles.right}>
                    <Image style={styles.storeImage} source={this.props.d.storeSource}/>
                    <Image style={styles.arrow} source={require('../assets/Arrow.png')}/>
                </View>
            </View>
        )
    }
}

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