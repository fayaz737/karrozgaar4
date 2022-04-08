import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Availableworkers from './Availableworkers'

const WorkerDetails = ({ route, navigation}) => {
    const { id, name,age,expertise,desc } = route.params;
  return (
    <View style={{flex:1}}>
      <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            alignSelf: 'center',
            padding: 30,
            color: 'black',
          }}>
          Worker Details
        </Text>

        <View style={styles.details}><Text style={{fontSize:20,color:'white',alignSelf:'center'}}>Name : {name}</Text>
        
        <Text style={{fontSize:20,color:'white'}}>id : {JSON.stringify(id)}</Text>
        <Text style={{fontSize:20,color:'white'}}>Age : {JSON.stringify(age)}</Text>
        <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Expertise : {expertise}</Text>
        <Text style={{fontSize:20,color:'white'}}>Description : {desc}</Text>
        
        <View style={{flexDirection:'row', justifyContent:'space-around',
        marginTop:15}}>

        
        <TouchableOpacity >
            <Text style={{color:'white',fontSize:20, fontWeight:'bold', borderRadius:10, borderColor:"green", borderWidth:2 ,padding:4}}>hire</Text>
            </TouchableOpacity>
            <TouchableOpacity >
            <Text style={{color:'white',fontSize:20, fontWeight:'bold', borderRadius:10, borderColor:"green", borderWidth:2 ,padding:4}}>chat</Text>
            </TouchableOpacity>
            </View>
        
        
        </View>
    </View>
  )
}

export default WorkerDetails

const styles = StyleSheet.create({
    details:{
        backgroundColor:'#3498DB',
        marginHorizontal:30,
        padding:20,
       borderRadius:15,
       marginTop:30
        
    },

})