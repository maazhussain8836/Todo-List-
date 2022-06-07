/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Task from './src/components/Task'


const App=()=>{
    return (
      <View style={styles.container} >
        {/* Todays task */}
        <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Task </Text>
        </View>
        {/* Where my items will go */}
        <View style={styles.items}>
        <Task text="Task 1" />
        <Task text="Task 2"/>
        <Task text="Task 3 "/>
        
        </View>
      </View>
    )
    }
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E8EAED'
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'

  },
  items:{
    margin:10
  }

})

export default App
