import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import ItensDoHome from "./ItensDoHome";

export default function BackgroundHome(){
    return(
        <View style={style.container}>
            <ItensDoHome/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(161, 10, 231)',
        height:'15%'
    },
})