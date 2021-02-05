import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { colors, ratioheight, ratiowidth, winsize } from '../Gloable/gloableconstant';


export class CarouselView extends Component {

    state = {
        active: 0
    }
    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== this.state.active) {
            this.setState({
                active: slide
            })
        }
    }
    render() {
        console.log(this.state.active);
        return (
            <View style={styles.continer}>
                <ScrollView horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.change}
                >

                    {
                        this.props.data.map((item, index) => (
                            <Image source={{ uri: item }}
                                key={index}
                                style={styles.imageview}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.indicater}>
                    {
                        this.props.data.map((item, index) => (
                            <Text
                                key={index}
                                style={[styles.indicaterColor, { color: index == this.state.active ? colors.white : colors.lightgray}]}>
                                ⬤
                            </Text>
                        ))
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    indicater: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    indicaterColor: {
        margin: 3,
        fontSize: 15 * ratiowidth
    },
    imageview: {
        width: winsize,
        height: 250 * ratioheight,
        resizeMode: 'cover'
    },
    continer: {
        marginTop: 10 * ratioheight,
        marginHorizontal: 5 * ratiowidth,
        width: winsize,
        height: 250 * ratioheight,
    }
})