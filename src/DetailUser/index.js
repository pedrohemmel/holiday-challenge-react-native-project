import { Text, Image, View, StyleSheet} from 'react-native'

export default function DeatailUser({navigation, route}) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: route.params.user.picture.large }} 
                style={{ width: 200, height: 200, marginBottom: 15 }}
            />
            <Text style={styles.textName}>{route.params.user.name.first}</Text>
            <Text>Se identifica como "{route.params.user.gender}"</Text>
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