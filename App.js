import {StatusBar} from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button, Alert
} from "react-native";
import Form from './components/form';

export default function App() {
    return (
        <View style={
            styles.container
        }>
            <Image source={
                    require("./assets/uago.jpeg")
                }
                style={
                    styles.images
                }/>
            <Text style={
                styles.textS
            }>
                Uago & Istago
            </Text>
            <Form/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    images: {
        width: 120,
        height: 120,
        margin: 10,
        borderRadius:100
    },
    textS: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textInput: {
        width: 300,
        padding: 5,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderBottomColor: 'black',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 5
    },
    btnStyle:{
        marginTop:10
    }
});
