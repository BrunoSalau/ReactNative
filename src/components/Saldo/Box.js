import { StyleSheet } from "react-native";
import { View } from "react-native";
import Saldo from "./Saldo";

export default function Box(){
    return(
        <View style={style.container}>
            <View style={style.box}>
                <Saldo/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        height: '13%',
        width: '100%',
    },
    box:{
        backgroundColor: '#ffffff',
        height: '100%',
        width: '95%',
        margin: -30,
        borderRadius: 7
    },
})