import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'

export default function CreateUser({navigation, route}) {
    const [name, setName] = useState("")
    const [imgSrc, setImgSrc] = useState("")
    const [gender, setGender] = useState("")

    function createUser() {
        const uuid = uuidv4();
        const user = {
            "gender": gender,
            "login": {"uuid": uuid}, 
            "name": {"first": name},
            "picture": {"large": imgSrc}
        }
        route.params.createUser(user)
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Adicione um novo contato</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setName}
                value={name}
                placeholder="Digite aqui seu nome"
            />
            <TextInput
                style={styles.textInput}
                onChangeText={setGender}
                value={gender}
                placeholder="Digite aqui como você se identifica"
            />
            <TextInput
                style={styles.textInput}
                onChangeText={setImgSrc}
                value={imgSrc}
                placeholder="Digite a URL da imagem desejada"
            />
            <TouchableOpacity style={styles.createBtn} onPress={() => {createUser()}}>
                <Text>Adicionar contato</Text>
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
    label: {
        fontSize: 20,
        marginBottom: 15
    },
    createBtn: {
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