import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ContactList from '../components/ContactList'
import { useState, useEffect } from 'react'

export default function Home({navigation}) {
    const [data, setData] = useState([]);
    function getRandomUserData() {
        fetch('https://randomuser.me/api/?results=50')
        .then((res) => res.json())
        .then(data => {
            setData(data); 
        });
    }

    useEffect(() => {
        getRandomUserData()
    }, [])

    function deleteUser(userId) {
        const updatedData = data.results.filter(user => user.login.uuid !== userId);
        console.log("deletou")
        setData({ results: updatedData });
    }

    function editUserGender(userId, newGender) {
        const index = data.results.findIndex(user => user.login.uuid === userId);
        var updatedData = data.results
        updatedData[index].gender = newGender
        setData({results: updatedData})
    }

    function createUser(user) {
        updatedData = data.results
        updatedData.unshift(user)
        setData({results: updatedData})
    }

    return (
        <View style={styles.container}>
            <View style={[styles.hStack, styles.calculateAndCreateUsers]}>
                <TouchableOpacity style={[styles.verticalSpacing, styles.calculateAndCreateBtn, styles.alignAndJustify ]} onPress={() => getRandomUserData()}>
                    <Text style={styles.textBtn}>Recarregar</Text>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61225.png' }} 
                        style={[{ width: 10, height: 10 }, {marginLeft: 5}]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.verticalSpacing, styles.calculateAndCreateBtn, styles.alignAndJustify ]} onPress={() => navigation.navigate('CreateUser', {createUser: createUser})}>
                    <Text style={styles.textBtn}>Adicionar Novo</Text>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3658/3658773.png' }} 
                        style={[{ width: 12, height: 12 }, {marginLeft: 5}]}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={[styles.verticalSpacing, {flex: 100}]}>
                <ContactList editUserGender={editUserGender} deleteUser={deleteUser} data={data} navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    hStack: {
        flex: 1,
        flexDirection: 'row'
    },
    calculateAndCreateUsers: {
        flex:5
    },
    textBtn: {
        color: '#000'
    },
    calculateAndCreateBtn: {
        height: 40,
        padding: 10,
        margin: 10,
        backgroundColor:'#ddd',
        borderRadius: 10,

        flexDirection: 'row'
    },
    verticalSpacing: {
        marginTop: 15
    },
    alignAndJustify: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
  });