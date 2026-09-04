import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ItensDoHome(){
    return(
        <View style={style.container}>
            <Text style={style.propriedades}>Bruno Salau</Text>
            <FontAwesome name="user-circle" size={40} color="white" />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 50,
        marginHorizontal: 10
    },
    propriedades:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
        
    }
})