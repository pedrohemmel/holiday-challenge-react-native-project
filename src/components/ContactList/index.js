import React from 'react'
import { Text, FlatList, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { useState, useEffect } from 'react'

export default function ContactList({editUserGender, deleteUser, data, navigation}) {

    return(
        <View>
            <FlatList
                style={[{width: 300}]}
                keyExtractor={(item) => item.login.uuid}
                data={data.results}
                renderItem={({item}) => (
                    <View style={[styles.hstack, styles.card]}>
                        <TouchableOpacity style={[styles.personBtn, {flex: 6}]} onPress={() => navigation.navigate('DetailUser', {user: item})}>
                            <Text>{item.name.first}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.updateBtn, styles.alignAndJustify, {flex: 2}]} onPress={() => navigation.navigate('EditUser', {user: item, editUser: editUserGender})}>
                            <Image
                                source={{ uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png' }} 
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.deleteBtn, styles.alignAndJustify, {flex: 2}]} onPress={() => deleteUser(item.login.uuid)}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png' }} 
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    
                )}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    personBtn: {
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor:'#ddd'
    },
    updateBtn: {
        height: '100%',
        backgroundColor: '#5588ff'
    },
    deleteBtn: {
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'red'
    },
    hstack: {   
        flex: 1,
        flexDirection: 'row'
    },
    alignAndJustify: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });