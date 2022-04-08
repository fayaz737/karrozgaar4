import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import '../../firebaseconfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = ({ navigation }) => {
  const [email, SetEmail] = useState("");
  const [pass, SetPassword] = useState("");

  const signIn=()=>{
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, pass)
         
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email);
    Alert.alert("user logged in successful")
    SetEmail('')
    SetPassword('')
    navigation.navigate("homescreen")
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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
            <View style={styles.loginContainer}>
              <Image
                style={styles.logo}
                source={require("../../assets/loginimage.png")}
              />
              <Text style={styles.logintext}>Login</Text>

              <TouchableOpacity style={styles.loginbuttons}>
                <Text
                  style={{ fontSize: 20, color: "#3498DB", fontWeight: "bold" }}
                >
                  Login
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("registerationoption")}
                >
                  <Text
                    style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.inputfields}>
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  onChangeText={(newemail) => SetEmail(newemail)}
                  value={email}
                  keyboardType="email-address"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={(newpassword) => SetPassword(newpassword)}
                 
                  value={pass}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  style={styles.loginbutton}
                  onPress={() => signIn()}
                  
                >
                  <Text
                    style={{
                      fontSize: 20,
                      alignSelf: "center",
                      color: "white",
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "white",
    height: Platform.OS === "ios" ? 850 : 800,
  },
  logo: {
    marginTop: 25,
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  logintext: {
    fontSize: 35,
    justifyContent: "center",
    marginTop: 30,
    alignSelf: "center",
    color: "#3498DB",
    //marginVertical: 10,
  },
  loginbuttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    marginTop: Platform.OS === "ios" ? 50 : 40,
    marginVertical: Platform.OS === "ios" ? 60 : null
  },
  inputfields: {
    marginTop: 10,
    width: Platform.OS === "ios" ? 350 : 300,
    marginLeft: 30,
    marginVertical: Platform.OS === "ios" ? 120 : 25,
  },
  input: {
    height: 40,
    margin: 15,
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 22,
    color: "#3498DB",
  },
  loginbutton: {
    marginTop: 20,
    backgroundColor: "#3498DB",
    alignSelf: "center",
    width: Platform.OS === "ios" ? 150 : 120,
    padding: Platform.OS === "ios" ? 13 : 8,
    borderRadius: 30,
  
    
  },
});
