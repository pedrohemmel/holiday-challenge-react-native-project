import React from 'react'
import {Text, FlatList, View} from 'react-native'

export default function({data}) {
    // console.log("\n\n\n\n\n\n")
    // console.log(data["results"][0]) 
    // console.log("\n\n\n\n\n\n")
    return(
        <View>
            <FlatList
                keyExtractor={(item) => item.login.uuid}
                data={data['results']}
                renderItem={({item}) => <Text>{item['name']['first']}</Text>}
            />
        </View>
    )
}