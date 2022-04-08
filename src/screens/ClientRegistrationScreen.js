import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert
  
} from "react-native";
import React,{ useState } from "react";
import '../../firebaseconfig'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const ClientRegistrationScreen = ({ navigation }) => {

   const [email,SetEmail]= useState('');
   const [pass,SetPassword] = useState('')

  

  const creteAccount = () => {
    const auth = getAuth();
    // here you will proide input email and password
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email);
    
    Alert.alert("user registration successful")
    SetEmail('')
    SetPassword('')
    navigation.navigate("homescreen")
    
    
    // ...
  })
  .catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.registercontainer}>
              <Text style={styles.registertext}> Client Registration</Text>
              <View style={styles.inputfields}>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                   value={email}
                   onChangeText={(newemail) => SetEmail(newemail)}
                />
                <TextInput style={styles.input} placeholder="cnic" />
                <TextInput
                  style={styles.input}
                  placeholder="password"
                   value={pass}
                   onChangeText={(newpass) => SetPassword(newpass)}
                />
              </View>

              <TouchableOpacity
                style={styles.registerbutton}
                onPress={()=> creteAccount()}
          
                
              >
                <Text
                  style={{ fontSize: 20, alignSelf: "center", color: "white" }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default ClientRegistrationScreen;

const styles = StyleSheet.create({
  registercontainer: {
    flex: 1,
    backgroundColor: "white",
    height: Platform.OS === "ios" ? 840 : 660,
    
  },
  registertext: {
    alignSelf: "center",
    color: "#3498DB",
    fontSize: 30,
    marginTop: 60,
    fontWeight: "bold",
    marginVertical: 10,
  },
  inputfields: {
    marginTop: 40,
    width: Platform.OS === "ios" ? 350 : 300,
    marginLeft: 30,
    marginVertical: Platform.OS === "ios" ? 45 : 25,
    
  },
  input: {
    height: Platform.OS === "ios" ? 40 : 60,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 25,
  },
  registerbutton: {
    marginTop: 20,
    backgroundColor: "#3498DB",
    alignSelf: "center",
    width: 150,
    padding: 13,
    borderRadius: 30,
 
    
  },
});
