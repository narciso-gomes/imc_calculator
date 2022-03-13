import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder='Ex. 1.72' keyboardType='numeric'/>
                <Text>Peso</Text>
                <TextInput placeholder='Ex. 60.00' keyboardType='numeric'/>
            </View>
        </View>
    );
}