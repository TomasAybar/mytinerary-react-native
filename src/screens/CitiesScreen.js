import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView, TextInput, Image, TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import citiesActions from '../redux/actions/citiesActions';
import tw from 'twrnc';


const CitiesScreen = (props) => {

    useEffect(() => {

        props.getCities()

        // eslint-disable-next-line

    }, [])

    const navigation = useNavigation();

    const handleID = (id) => navigation.navigate('Details', { id })
    

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
                style={tw`flex justify-center items-center mb-10`}
            >
                {
                    props.filter.length !== 0
                        ?
                        props.filter?.map(city => {

                            return (
                                <TouchableHighlight
                                    key={city._id}
                                    onPress={() => handleID(city._id)}
                                    style={{ marginBottom: 25, borderRadius: 20 }}
                                >
                                    <Image
                                        source={{ uri: city.image }}
                                        style={{ width: 380, height: 200, borderRadius: 20 }}
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

