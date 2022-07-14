import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView, TextInput, Image, TouchableHighlight } from 'react-native';
import citiesActions from '../redux/actions/citiesActions';



const CitiesScreen = (props) => {


    useEffect(() => {

        props.getCities()

        // eslint-disable-next-line
    }, [])

    const handleID = (id) => {
        console.log('id de mi ciudad: ' + id)
    }

    return (

        <ScrollView style={{ paddingVertical: 40, backgroundColor: '#3a5ba0' }}>

            {/* INPUT */}
            <View
                style={{
                    paddingHorizontal: 30,
                    marginBottom: 25
                }}
            >
                <TextInput
                    style={{
                        height: 55,
                        borderColor: 'gray',
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        textAlign: 'center'
                    }}
                    defaultValue=''
                    placeholder='Search cities..'
                />
            </View>

            {/* CONTENEDOR CITIES */}
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 30,
                }}
            >
                {
                    props.cities?.map(city => {

                        return (
                            <TouchableHighlight
                                key={city._id}
                                onPress={() => handleID(city._id)}
                            >

                                <Image
                                    source={{ uri: city.image }}
                                    style={{ width: 400, height: 200, borderRadius: 20, marginBottom: 25 }}
                                />
                            </TouchableHighlight>
                        )


                    })
                }

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    cities: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingHorizontal: 20,
        borderRadius: 20
    },

});

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities, // accedo a todas las ciudades
        filter: state.citiesReducer.filter // accedo a las ciudades mediante el filtro
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities, // traigo ciudades
    filterCities: citiesActions.filterCities // traigo el filtro
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen);
// export default Cities

