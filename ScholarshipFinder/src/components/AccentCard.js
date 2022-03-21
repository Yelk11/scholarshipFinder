import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function AccentCard(props) {
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
                borderRadius: 8,
                elevation: 3,
                backgroundColor: '#596066',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginTop: 20,
                marginBottom: -16,
                marginHorizontal: 4,
                bottom: 32
            },

            cardContent : {
                marginHorizontal: 140,
                //marginVertical: 10,
            }


    

});