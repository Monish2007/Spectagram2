import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Feed extends React.Component{

    render(){

        return (
            <View style={styles.container}>
            <safeAreaView style={styles.droidsafeArea} />
            <View style={styles.appTitle}>
            <View style={styles.appIcon}>
            <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
            >
            </Image>
            </View>
            <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
            </View>
            <View style={styles.cardContainer}>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderitem}
            />
            </View>
            </View>
        
        )
    }
    

}