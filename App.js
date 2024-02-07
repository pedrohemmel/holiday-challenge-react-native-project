import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home'
import DeatailUser from './src/DetailUser'
import EditUser from './src/EditUser'
import CreateUser from './src/CreateUser'


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Lista de Contato'}}
        />
        <Stack.Screen 
          name="DetailUser" 
          component={DeatailUser} 
          options={{title: 'Detalhes do Contato'}}/>
        <Stack.Screen 
          name="EditUser" 
          component={EditUser}
          options={{title: 'Alterar Contato'}}/>
        <Stack.Screen 
          name="CreateUser" 
          component={CreateUser}
          options={{title: 'Adicionar Contato'}}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}