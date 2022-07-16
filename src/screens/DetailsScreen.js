import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tineraryActions from '../redux/actions/tineraryActions';
import citiesActions from '../redux/actions/citiesActions';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const DetailsScreen = (props) => {

  const { id } = props.route.params // id de mi ciudad

  useEffect(() => {

    props.getIinerariesFromOneCity(id) //action
    props.getOneCity(id) //action


    // eslint-disable-next-line
  }, [id])

  const tineraries = props.tinerariesFromCity; // itinerarios que coincidan con mi city
  const city = props.filterCity; // city que recibo por param

  const navigation = useNavigation();

  const viewActivityAndComment = (tinerary) => {
    navigation.navigate('ActivityComment', { tinerary })
  }

  return (

    <ScrollView style={{ paddingVertical: 40, backgroundColor: '#3a5ba0' }}>

      <CardImage
        source={{ uri: city.image }}
        title={city.city}
      />

      {
        tineraries.length !== 0
          ?
          (
            tineraries?.map((tinerary, index) => {
              return (
                <View style={{ paddingHorizontal: 30, marginBottom: 40, paddingVertical: 20 }} key={index}>

                  <Card >
                    <CardImage
                      source={{ uri: city.image }}
                      title={tinerary.tineraryName}
                    />
                    <CardTitle
                      title={tinerary.tineraryName}
                      subtitle={tinerary.userName}
                      avatarSource={{ uri: tinerary.userPhoto }}

                    />

                    <CardContent text={tinerary.hashtags} />
                    <CardContent text={tinerary.price} />
                    <CardContent text={tinerary.time} />

                    <CardAction
                      separator={true}
                      inColumn={false}
                      >
                      {/* <CardButton
                        onPress={() => { }}
                        title="like"
                        color="blue"
                      /> */}
                      <CardButton
                        onPress={() => { viewActivityAndComment(tinerary) }}
                        title="view more"
                        color="blue"
                      />
                    </CardAction>
                  </Card>

                </View>

              )
            })
          )

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
          >No tineraries yet</Text>
      }

    </ScrollView>

  )
}

const mapStateToProps = (state) => {
  return {
    tinerariesFromCity: state.tineraryReducer.tinerariesFromCity, // accedo a mis itinerarios
    filterCity: state.citiesReducer.filterCity, // accedo a la city
  }
}

const mapDispatchToProps = {
  getIinerariesFromOneCity: tineraryActions.getIinerariesFromOneCity,
  getOneCity: citiesActions.getOneCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

// export default DetailsScreen