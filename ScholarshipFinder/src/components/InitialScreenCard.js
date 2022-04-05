import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function InitialScreenCard(props) {
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
                borderRadius: 12,
                elevation: 3,
                backgroundColor: '#FFCE31',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginHorizontal: 4,
                marginVertical: 6,
                position: 'absolute',
                bottom: -5,
                width: '100%',
            },

            cardContent : {
                marginHorizontal: 18,
                marginVertical: 45,
            }

    

});