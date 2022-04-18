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
                borderRadius: 20,
                elevation: 3,
                backgroundColor: '#596066',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginTop: 0,
                marginBottom: -16,
                marginHorizontal: 4,
                bottom: 32,
                borderWidth:1
            },

            cardContent : {
                marginHorizontal: 60,
                //marginVertical: 10,
            }


    

});