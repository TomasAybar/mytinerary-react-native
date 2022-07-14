import React from 'react'
import Hero from '../components/Hero'
import Connect from '../components/Connect'
import Carousel from '../components/Carousel'
import { ScrollView } from 'react-native'

const HomeScreen = () => {
    return (

            <ScrollView>

                <Hero />
                <Connect />
                <Carousel />
                
            </ScrollView>
    )
}

export default HomeScreen