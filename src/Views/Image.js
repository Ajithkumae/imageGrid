import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loading } from '../common/Loaging';
import { CarouselView } from '../components/CarouselView'
import GridView from '../components/GridView';
import { colors, winsize } from '../Gloable/gloableconstant';
import * as LoadImageAction from '../Redux/Actions/LoadimageAction';
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  componentDidMount() {
    debugger
    this.props.loadImage.carosuselData()
    this.props.loadImage.gridData()
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.continer}>
        <Loading isActive={this.props.carosuselimg.length == 0 ? true : false} />

        <CarouselView data={this.props.carosuselimg} />
        <GridView data={this.props.Gridimg} />
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadImage: bindActionCreators(LoadImageAction, dispatch),
});

const mapStateToProps = (state) => {
  return {
    carosuselimg: state.LoadimageReducer.carselData,
    Gridimg: state.LoadimageReducer.gridData,

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);

const styles = StyleSheet.create({

  continer: {
    backgroundColor: colors.background,
    flex: 1,
    width: winsize

  }
})