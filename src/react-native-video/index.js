import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Video from "react-native-video";

export default class Demo extends Component{
  render() {
    console.log('debug');
    return (
      <View style={styles.container}>
       
        <Video source={require("./component/assets/video.mp4")}
                rate={1.0}
                volume={1.0}
                muted={false}
                paused={false}
                resizeMode="cover"
                repeat={true}
                style={styles.backgroundVideo} />
        <Text style={styles.abtext}>this is text</Text>  
      </View>
    );
  }
}