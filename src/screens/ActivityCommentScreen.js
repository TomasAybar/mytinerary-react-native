import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import tw from 'twrnc';
import activityActions from '../redux/actions/activityActions';

const ActivityCommentScreen = (props) => {

    const [activities, setActivities] = useState() // guardo mis actividades
    const { tinerary } = props.route.params // itinerario

    useEffect(() => {

        props.getActivitiesFromItinerary(tinerary._id)
            .then(res => setActivities(res.data.response))

        // eslint-disable-next-line

    }, [tinerary._id])

    return (
        <ScrollView style={{ backgroundColor: '#3a5ba0', paddingVertical: 25 }}>

            {/* Actividades */}
            <View style={tw`shadow-md`}>
                {   
                    activities?.length !== 0
                    ? (

                        activities?.map(activity => {
                            return (
                                <View style={tw`container mx-auto mb-5`} key={activity._id}>
                                    <Text
                                        style={tw`text-center uppercase text-yellow-400 font-bold text-lg`}>
                                        {activity.name}
                                    </Text>
                                    <Image
                                        source={{ uri: activity.image }}
                                        style={{ width: 350, height: 200, borderRadius: 15 }}
                                    />
                                </View>
    
                            );
                        })
                    )
                    :
                    <Text style={tw`text-center font-bold uppercase mb-5 text-lg text-yellow-400`}>No activities yet!</Text>
                }
            </View>

            {/* Comentarios */}
            <View style={tw`container mx-auto mb-10 px-2 shadow-md`}>
                {
                    tinerary.comments.length !== 0
                        ? (
                            tinerary.comments.map(comment => {

                                return (

                                    <View key={comment._id} style={tw`bg-yellow-400 mb-5 rounded-md p-5 text-center`}>

                                        {/* IMAGEN */}
                                        <View style={tw`flex justify-center items-center mb-2`}>
                                            <Image
                                                source={{ uri: comment.userID.photoUrl }}
                                                style={{ width: 80, height: 80, borderRadius: 100 }}
                                            />
                                        </View>

                                        {/* NOMBRE Y COMENTARIO */}
                                        <View>
                                            <Text
                                                style={tw`text-white uppercase font-bold text-center mb-1`}
                                            >
                                                {comment.userID.firstName} {comment.userID.lastName}
                                            </Text>

                                            <Text style={tw`text-center text-lg text-gray-900`}>{comment.comment}</Text>
                                        </View>

                                    </View>

                                )
                            })
                        )

                        :

                        <Text>No hay comentarios</Text>
                }
            </View>

        </ScrollView>
    )
}

const mapDispatchToProps = {
    getActivitiesFromItinerary: activityActions.getActivitiesFromItinerary, // traigo ciudades
}

export default connect(null, mapDispatchToProps)(ActivityCommentScreen);