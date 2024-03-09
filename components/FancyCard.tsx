import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/20276890/pexels-photo-20276890/free-photo-of-a-woman-sitting-on-a-rock-looking-out-over-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }}
        style={styles.cardImage} />
      
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Lorem ipsum</Text>
        <Text style={styles.cardLabel}>Lorem, ipsum dolor.</Text>
        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, totam! Debnath Mahapatra.</Text>
        <Text style={styles.cardFooter}>13 mins away</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 410,
        height: 550,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 9,
    },
    cardElevated: {
        backgroundColor: '#DAE0E2',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 390,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        marginBottom: 5,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#2B2B52',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#218F76',
        fontSize: 18,
        marginBottom: 4,
    },
    cardDescription: {
        color: '#2F363F',
        fontSize: 14,
        marginBottom: 6,
        marginTop: 6,
    },
    cardFooter: {
        color: '#1287A5',
        fontSize: 18,
        marginTop: 4,
    },
})