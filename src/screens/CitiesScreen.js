import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView, TextInput, Image, TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import citiesActions from '../redux/actions/citiesActions';


const CitiesScreen = (props) => {

    useEffect(() => {

        props.getCities()

        // eslint-disable-next-line

    }, [])

    const navigation = useNavigation();

    const handleID = (id) => {
        navigation.navigate('Details', { id })
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
                    placeholder='Search cities..'
                    onChangeText={(val) => props.filterCities(props.cities, val)}
                />
            </View>

            {/* CONTENEDOR CITIES */}
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 25,
                    marginBottom: 40
                }}
            >
                {
                    props.filter.length !== 0
                        ?
                        props.filter?.map(city => {

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

                        :
                        
                        <Text
                            style={{
                                color: '#facc15',
                                fontSize: 20,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginTop: 30
                            }}
                        >No search results</Text>
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

