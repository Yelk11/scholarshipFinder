import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

        const styles = StyleSheet.create({
            card: {
                borderRadius: 24,
                elevation: 3,
                backgroundColor: '#3E4347',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginHorizontal: 10,
                marginVertical: 6,
                //position: 'absolute',
                //top: 50,
            },

            cardContent : {
                marginHorizontal: 18,
                marginVertical: 10,
            }


    

});