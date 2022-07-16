import { StyleSheet, Text, View } from 'react-native';

const Connect = () => {
    return (
        <>

            <View style={styles.container}>

                <Text style={styles.text}><Text style={styles.span}>To travel is to live</Text>{' '}you dont't need magic to disappear. All you need is a destination.</Text>

            </View>

        </>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        paddingHorizontal: 50
    },
    text: {
        color: '#3a5ba0',
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },

    span: {
        color: '#facc15'
    }
});


export default Connect