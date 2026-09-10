import { View, Text } from "react-native"
import { StyleSheet } from "react-native"

export default function Info(){
    return(
        <View style={style.container}>
            <Text>Ultimos Lançamentos</Text>
            <View style={style.barra}></View>
            {/*salario*/}
            <View>
                <Text style={style.data}>16/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Salário</Text>
                    <Text style={style.info2}> R$ 22.000,00</Text>
                </View>
                <View style={style.barra}></View>
            </View>
            {/*Investimento*/}
            <View>
                <Text style={style.data}>16/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Investimento</Text>
                    <Text style={style.info2}> R$ 450,00</Text>
                </View>
                <View style={style.barra}></View>
            </View>
            {/*Combustivel*/}
            <View>
                <Text style={style.data}>16/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Combustível</Text>
                    <Text style={style.info3}> R$ -155,27</Text>
                </View>
                <View style={style.barra}></View>
            </View>
            {/*Parcela Celular*/}
            <View>
                <Text style={style.data}>17/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Parcela Celular 7/12</Text>
                    <Text style={style.info4}></Text>
                </View>
                <View style={style.barra}></View>
            </View>
            {/*Tênis*/}
            <View>
                <Text style={style.data}>17/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Tênis</Text>
                    <Text style={style.info4}></Text>
                </View>
                <View style={style.barra}></View>
            </View>
            {/*Parcela Ape*/}
            <View>
                <Text style={style.data}>18/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Parcela Apê 27/180</Text>
                    <Text style={style.info3}> R$ -723,82</Text>
                </View>
                <View style={style.barra}></View>
            </View>
            {/*Fone de ouvido*/}
            <View>
                <Text style={style.data}>20/08/2026</Text>
                <View style={style.box}>
                    <Text style={style.info1}>Fone de ouvido</Text>
                    <Text style={style.info4}></Text>
                </View>
                <View style={style.barra}></View>
            </View>
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
        backgroundColor: '#b4b3b338',
        height: 2,
        marginBottom:25,
        marginTop: 10
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    data:{
        color: '#bdbbbb'
    },
    info1:{
        fontWeight: 'bold'
    },
    info2:{
        fontWeight: 'bold',
        color:'#6fd440', 
    },
    info3:{
        fontWeight: 'bold',
        color:'#d44040', 
    },
    info4:{
        backgroundColor: '#bdbbbb',
        color: '#bdbbbb',
        width: 80,
        height: 13,
        borderRadius: 20,

    }
})
