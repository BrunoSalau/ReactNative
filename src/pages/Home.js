import { Text, View, StyleSheet, FlatList } from "react-native";
import BackgroundHome from "../components/Home/BackgroundHome";
import Box from "../components/Saldo/Box";
import BarraOptions from "../components/opções/BarraOptions";
import Info from "../components/informações/info";

export default function Home(){
    return(
    <View style={style.container}> 
        <BackgroundHome/>
        <Box/>
        <BarraOptions/>
        <Info/>
    </View>
    )
}


const style = StyleSheet.create({
  container: {
    width: '100%'
  },
});