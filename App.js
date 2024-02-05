import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ContactList from './src/components/ContactList'
import { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState([]); // Initialize state variable with an empty array
  function getRandomUserData() {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then(data => {
        setData(data); // Update the state with the fetched data
      });
  }

  useEffect(() => {
    getRandomUserData()
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnGetRandom} onPress={() => getRandomUserData()}>
          <Text>Calcular</Text>
      </TouchableOpacity>
      <ContactList data={data}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGetRandom: {
    marginTop: 100,
    padding: 10,
    backgroundColor:'#aaa'
    
  }
});
