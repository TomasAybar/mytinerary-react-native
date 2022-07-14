import { Button, StyleSheet, Text, View, Alert, ScrollView, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CitiesScreen from '../screens/CitiesScreen';

const Hero = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>MY
                <Text style={styles.tin}>TINERARY</Text>
            </Text>

            <Text style={styles.slogan}>Find your perfect trip, designed by insiders who know and love their cities!!</Text>

            <Button
                style={styles.btn}
                color="#facc15"
                title="get started"
                onPress={() => navigation.navigate('Cities')}
            />

            {/* <StatusBar style="auto" /> */}

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#3a5ba0',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 760

    },

    tin: {
        color: '#facc15',
    },

    title: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    slogan: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },

    btn: {
        backgroundColor: '#3a5ba0',
    },

    info: {
        fontSize: 25,
        marginBottom: 10
    }

});

export default Hero;