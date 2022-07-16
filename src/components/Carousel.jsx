import React from 'react';
import { connect } from 'react-redux';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';



const Carousel = (props) => {


    const dataImage = props.cities?.map(city => city.image)


    return (
        <View style={styles.container}>

            {/* Titulo */}
            <View style={{ marginTop: 40 }}>
                <Text style={styles.title}>Popular <Text style={{ color: '#fff' }}>MY</Text>tineraries</Text>
            </View>

            {/* Carousel */}
            <View style={styles.containerCarousel}>

                <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    autoplayLoopKeepAnimation
                    index={2}
                    data={dataImage}
                    renderItem={({ item }) => (
                        <View style={[styles.child, { backgroundColor: item }]}>
                            <Image
                                source={{ uri: item }}
                                style={{ width: 350, height: 200, borderRadius: 20, marginBottom: 25 }}
                            />
                        </View>
                    )}
                />

            </View>
        </View>
    )

}


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3a5ba0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCarousel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    child: {
        width,
        justifyContent: 'center'
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    },
    title: {
        color: '#facc15',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities, // accedo a todas las ciudades
    }
}

export default connect(mapStateToProps, null)(Carousel)