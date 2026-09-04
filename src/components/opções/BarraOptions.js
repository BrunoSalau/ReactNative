import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Card from '@expo/vector-icons/AntDesign';
import Folder from '@expo/vector-icons/AntDesign';
import Barcode from '@expo/vector-icons/AntDesign';
import Config from '@expo/vector-icons/AntDesign';
import Discount from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function BarraOptions(){
    return(
        <View style={style.container}>
            <View style={style.box}>
                <Folder name="credit-card" size={24} color="black" />
            </View>
            <View style={style.box}>
                <Card name="folder-add" size={24} color="black" />
            </View>
            <View style={style.box}>
                <Barcode name="barcode" size={24} color="black" />
            </View>
            <View style={style.box}>
                <Config name="setting" size={24} color="black" />
            </View>
            <View style={style.box}>
                <Discount name="discount" size={24} color="black" />
            </View>
            <View style={style.box}>
                <FontAwesome name="user-circle" size={24} color="black" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap:24,
        marginHorizontal: '5%'
    },
    box:{
        backgroundColor: '#d3d3d3',
        width: '10%',
        alignItems: 'center',
        borderRadius: 100,
        height: 50,
        width: 50,
        justifyContent: 'center'
    }
})