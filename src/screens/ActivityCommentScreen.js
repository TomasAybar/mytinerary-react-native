import { View, Text } from 'react-native'
import React from 'react'

const ActivityCommentScreen = (props) => {

    const { tinerary } = props.route.params // itinerario
    console.log('ITINERARIO: ', tinerary)
    return (
        <View>
            {
                tinerary.comments.length !== 0
                    ? (
                        tinerary.comments.map(comment => {

                            return (

                                <View key={comment._id} style={{marginBottom: 30}}>
                                    <Text style={{textTransform: 'uppercase'}}>{comment.userID.firstName} {comment.userID.lastName}</Text>
                                    <Text>{comment.comment}</Text>
                                </View>

                            )
                        })
                    )

                    :

                    <Text>No hay comentarios</Text>
            }
        </View>
    )
}

export default ActivityCommentScreen