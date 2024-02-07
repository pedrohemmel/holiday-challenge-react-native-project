import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native'
import {useState} from 'react'

export default function EditUser({navigation, route}) {
    const [gender, setGender] = useState(route.params.user.gender)

    function updateUser() {
        const user = route.params.user
        route.params.editUser(user.login.uuid, gender)
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textName]}>{route.params.user.name.first}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setGender}
                value={gender}
                placeholder="Digite aqui como você se identifica"
            />
            <TouchableOpacity style={styles.updateBtn} onPress={() => {updateUser()}}>
                <Text>Atualizar</Text>
            </TouchableOpacity>
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
    textName: {
        fontSize: 20,
        marginBottom: 15
    },
    updateBtn: {
        height: 40,
        padding: 10,
        margin: 10,
        backgroundColor:'#ddd',
        borderRadius: 10,
    },
    textInput: {
        height: 40, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10 
    }
    
  });