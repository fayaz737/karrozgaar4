import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import KarRozgaar from '../components/KarRozgaar';



import '../../firebaseconfig'
import {getFirestore, collection, addDoc } from "firebase/firestore"; 

const db = getFirestore();


const HomeScreen = ({navigation}) => {

  const getdata= async ()=>{
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const readdata= async ()=>{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    

  }
  
  return (
    <>
      <View>
       
        <KarRozgaar />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity
            style={styles.createjob}
            onPress={() => navigation.navigate('jobform')}>
            <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
              Create job
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createjob}
            onPress={() => navigation.navigate('availableworkers')}>
            <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
              workers feed
            </Text>
          </TouchableOpacity>
        
          
        </View>
        <Text></Text>
        <TouchableOpacity style={{backgroundColor:'green', padding:20, }} onPress={()=> getdata()}><Text>add </Text></TouchableOpacity> 
        <TouchableOpacity style={{backgroundColor:'green', padding:20, }} onPress={()=> readdata()}><Text>retrieve </Text></TouchableOpacity>

      </View>
      
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  createjob: {
    marginTop: 20,
    backgroundColor: '#2E86C1',
    alignSelf: 'center',
    width: 150,
    padding: 13,
    borderRadius: 30,
  },
});
