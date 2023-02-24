import {
    View, TextInput, Button, Text, StyleSheet
}
from 'react-native';

export default function Form() {
    btnlert = () => {
        Alert.alert("Boite d'alertet", "Message");
    };
    return(
        <View style={
            {marginVertical: 20}
        }>
            <View>
                <Text>Matricule
                </Text>
                <TextInput style={
                        styless.textInput
                    }
                    placeholder="Matricule"/>
            </View>

            <View>
                <Text>Mot de passe
                </Text>
                <TextInput style={
                        styless.textInput
                    }
                    placeholder="Mot de passe"/>
            </View>

            <Button title="Se connecter" onPress={btnlert}
                style={
                    styless.btnStyle
                }/>
        </View>
    );
}

const styless = StyleSheet.create({
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