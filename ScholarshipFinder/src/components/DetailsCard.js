import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function DetailsCard(props) {
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
                borderRadius: 18,
                elevation: 3,
                backgroundColor: '#FFCE31',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginHorizontal: 4,
                marginTop: 2,
                marginBottom: -28,
                borderWidth: 1,
                borderColor: 'black'
            },

            cardContent : {
                marginTop: 10,
                marginBottom: 60,
                marginHorizontal: 60
            }


    

});