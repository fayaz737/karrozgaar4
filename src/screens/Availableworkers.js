import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,useEffect
} from 'react-native';
import React from 'react';
import WorkerDetails from './WorkerDetails';
import SearchBar from '../components/SearchBar';


const workers = [
  {
    id: 1,
    name: 'fayaz',
    age: 20,
    expertise: ['\n1) operator \n' , '2) gardening \n', '3) driving '],
    desc: 'i can work on low pay',
  },
  {
    id: 2,
    name: 'shayan',
    age: 18,
    expertise: ['\n1) operator \n' , '2) gardening \n', '3) driving '],
    desc: 'i can work on low pay',
  },
  {
    id: 3,
    name: 'mudassir',
    age: 10,
    expertise: ['\n1) operator \n' , '2) gardening \n', '3) driving '],
    desc: 'i can work on low pay',
  },
  {
    id: 4,
    name: 'junaid',
    age: 6,
    eexpertise: ['\n1) operator \n' , '2) gardening \n', '3) driving '],
    desc: 'i can work on low pay',
  },
  {
    id: 5,
    name: 'zohaib',
    age: 8,
    expertise: ['\n1) operator \n' , '2) gardening \n', '3) driving '],
    desc: 'i can work on low pay',
  },
  {
    id: 6,
    name: 'zohaib',
    age: 8,
    expertise: ['\n1) operator \n' , '2) gardening \n', '3) driving '],
    desc: 'i can work on low pay',
  },
];
// const Items = ({name, age, id, desc, expertise}) => {
//   const handleclick = id => {
//     const worker = workers.find(work => {
//       return work.id === id;
//     });

//     navigation.navigate("")
// Alert.alert(
//   'worker Details :',
//   `id : ${worker.id}
//    name : ${worker.name}
// \n Expertise : ${worker.expertise}
// \n Age : ${worker.age}
// \n Description : ${worker.desc} `,
// );
//   };
//   return (
//     <TouchableOpacity
//       onPress={() => handleclick(id)}
//       style={{backgroundColor: 'gray', marginVertical: 10, padding: 20}}>
//       <Text style={{fontSize: 20, color: 'white'}}>{name}</Text>
//       <Text style={{fontSize: 15, color: 'white'}}>{expertise}</Text>
//     </TouchableOpacity>
//   );
// };

const Availableworkers = ({navigation}) => {
    
  const Items = ({name, age, id, desc, expertise}) => {
    const handleclick = id => {
      const worker = workers.find(work => {
        return work.id === id;
      });
      
      navigation.navigate("workerdetails", worker)
    //   {name :worker.name,id:worker.id,age:worker.age,desc:worker.desc,expertise:worker.expertise}
    //   Alert.alert(
    //     'worker Details :',
    //     `id : ${worker.id}
    //      name : ${worker.name}
    //   \n Expertise : ${worker.expertise}
    //   \n Age : ${worker.age}
    //   \n Description : ${worker.desc} `,
    //   );
    };
    return (
      <TouchableOpacity
        onPress={() =>  handleclick(id)}
        style={{backgroundColor: '#3498DB', marginVertical: 10, padding: 20, borderRadius:10}}>
        <Text style={{fontSize: 20, color: 'white'}}>{name}</Text>
        <Text style={{fontSize: 15, color: 'white'}}>{expertise}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            alignSelf: 'center',
            padding: 30,
            color: 'black',
          }}>
          Available workers
        </Text>
        <SearchBar/>
      </View>


        <FlatList style={styles.workerslist}
          data={workers}
          showsVerticalScrollIndicator={false}
         
          renderItem={({item}) => {
            return (
              <Items 
                name={item.name}
                age={item.age}
                id={item.id}
                desc={item.desc}
                expertise={item.desc}
              />
            );
          }}
        />
    
    </View>
  );
};

export default Availableworkers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  workerslist:{
      marginHorizontal:20,
     
      
  }
});
