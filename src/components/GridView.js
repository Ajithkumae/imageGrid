import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, Animated, StyleSheet } from 'react-native';
import { ratioheight, ratiowidth, winsize } from '../Gloable/gloableconstant';


export default class GridView extends Component {
    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;

        this.state = {
        };
    }

    renderItem({ item }) {
        return (
            <View
                style={styles.imagecontiner}
            >
                <Image
                    source={{ uri: item }}
                    style={styles.ImageView}
                />
            </View>
        )
    }
    loadmore = () => {
        console.log('hellow');
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.flatList} >
                <FlatList
                    style={{ alignSelf: 'center' }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={this.props.data}
                    renderItem={(this.renderItem)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadmore}
                    onEndReachedThreshold={0}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        margin: 10 * ratioheight,
        flex: 1
    },
    ImageView: {
        height: 140 * ratioheight,
        width: 140 * ratiowidth,
    },
    imagecontiner: { padding: 10 * ratiowidth, }
})