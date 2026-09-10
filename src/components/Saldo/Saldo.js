import { View, Text, StyleSheet } from "react-native"

export default function Saldo(){
    return(
        <View style={style.container}>
            <View>
                <Text style={style.linha1}>Saldo</Text>
                <View style={style.linha2}>
                    <Text style={style.linha1}>R$ </Text>
                    <Text style={style.saldo}>2.321,55</Text>
                </View>
            </View>
            <View>
                <Text style={style.linha1}>Gastos</Text>
                <View style={style.linha2}>
                    <Text  style={style.linha1}>R$ </Text>
                    <Text style={style.gastos}>-2.029,88</Text>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    gap: '25%',
    //justifyContent: 'space-between',
    //marginHorizontal: 70,
    alignItems:'center'
  },
  linha1:{
    color: '#bdbbbb'
  },
  linha2:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  saldo:{
    color:'#6fd440',
    fontSize: 25
  },
  gastos:{
    color:'#d44a40',
    fontWeight: 'bold',
    fontSize: 25
  }
});
