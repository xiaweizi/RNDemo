import React, {Component} from "react";
import {StyleSheet, Image, Text, Dimensions, TouchableOpacity} from "react-native";
import ToastUtil from "../utils/ToastUtil";

export default class VideoListItem extends Component {
    static onItemClick() {
        ToastUtil.show("点击了")
    };

    constructor(props) {
        super(props)
        this.state = {
            videoModel: {
                title: '这里显示标题',
                playUrl: 'https://v.youku.com/v_show/id_XMzY1NzIyMTU1Mg==.html?spm=a2h0k.11417342.soresults.dposter',
                imgUrl: 'http://source.51yrz.com/1466071007.jpg?imageView2/1/w/600/h/300',
            },
        }
    }


    render() {
        return (
            <TouchableOpacity >
                <Image source={{uri: this.props.imgUrl}}/>
            </TouchableOpacity>
        )
    }
}
const screenWidth = Dimensions.get('window').width;

const VideoListItemStyle = StyleSheet.create({
    image_bg: {
        height: 220,
        resizeMode: "cover",
    },
    title: {
        width: 100,
        flex: 1,
        backgroundColor: "#0000008C",
        textAlignVertical: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    }
})