import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import ClientRegistrationScreen from './src/screens/ClientRegistrationScreen';
import HomeScreen from './src/screens/HomeScreen';
import JobForm from './src/screens/JobForm';
import JobFeedScreen from './src/screens/JobFeedScreen';
import ClientAcceptance from './src/screens/ClientAcceptance';
import GoToWork from './src/screens/GoToWork';
import StartEndTask from './src/screens/StartEndTask';
import RegisterationOption from './src/screens/RegisterationOption';
import WorkerRegistrationScreen from './src/screens/WorkerRegistrationScreen';
import React from 'react';
import Availableworkers from './src/screens/Availableworkers';
import WorkerDetails from './src/screens/WorkerDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="loginscreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="registrationscreen"
          component={ClientRegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="workerregistrationscreen"
          component={WorkerRegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="homescreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="jobform"
          component={JobForm}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="jobfeedscreen"
          component={JobFeedScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="clientacceptance"
          component={ClientAcceptance}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="gotowork"
          component={GoToWork}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="startendtask"
          component={StartEndTask}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="registerationoption"
          component={RegisterationOption}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="availableworkers"
          component={Availableworkers}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="workerdetails"
          component={WorkerDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
