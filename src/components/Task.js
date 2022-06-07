import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const Task=(props)=>{
    return (
        <View style={styles.item}>
    <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}  </Text>
    </View>           
        
        <View style={styles.circular}></View>
         </View>
    )
  }

const styles=StyleSheet.create({
item:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius:10,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    
},
itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    // wrap means to move content in next line and wrap it
    flexWrap:'wrap'
    

},
square:{
    width:24,
    height:24,
    backgroundColor:'red',
    opacity:0.4,
    marginRight:20
},
itemText:{
    maxWidth:'80%',
    fontSize:18,
},
circular:{
    width:12,
    height:12,
    borderRadius:5,
    borderWidth:2,
    borderColor:'red',
    opacity:0.4
    
}
})
export default Task;
 