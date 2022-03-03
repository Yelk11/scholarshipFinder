import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function LoginSystemCard(props) {
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
                marginHorizontal: 2,
                marginVertical: 1,
                position: 'absolute',
                bottom: 0.01,
                width: '100%',
            },

            cardContent : {
                marginHorizontal: 10,
                marginVertical: -20,
            }

    

});