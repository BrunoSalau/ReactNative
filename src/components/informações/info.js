import { View, Text } from "react-native"
import { StyleSheet } from "react-native"

export default function Info(){
    return(
        <View style={style.container}>
            <Text>Ultimos Lançamentos</Text>
            <View style={style.barra}></View>
            
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        height: '100%',
        marginTop: 20,
        marginHorizontal: '4%'
    },
    barra:{
        backgroundColor: '#b4b3b3',
        height: 3,
        marginVertical:20
    }
})