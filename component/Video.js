import _ from "lodash";
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import Rnvideo from "react-native-video";

class Video extends Component<{foo: string}>{
    render(){
        return (
            <View style={[styles.container, this.props.style]}>
                <Rnvideo source={require("./assets/video.mp4")}
                rate={1.0}
                volume={1.0}
                muted={false}
                paused={false}
                resizeMode={true}
                repeat={true} />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default Video;