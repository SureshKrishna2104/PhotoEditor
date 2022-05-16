import React, {Component} from 'react';
import ViewShot from 'react-native-view-shot';

//Native
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  PanResponder,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const ghost = require('../emojis/ghost.png');
const heart = require('../emojis/heart.png');
const heartEyes = require('../emojis/heartEyes.png');
const kiss = require('../emojis/kiss.png');
const party = require('../emojis/party.png');
const robot = require('../emojis/robot.png');
const smile = require('../emojis/smile.png');
const sunglasses = require('../emojis/sunglasses.png');
const thumbsup = require('../emojis/thumbsup.png');

export default class ImageSticker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      showSticker: false,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.pan.x,
            dy: this.state.pan.y,
          },
        ],
        // {useNativeDriver: true},
      ),
      onPanResponderRelease: (e, gesture) => {
        this.state.pan.setOffset({
          x: this.currentPanValue.x,
          y: this.currentPanValue.y,
        });
        this.state.pan.setValue({
          x: 0,
          y: 0,
        });
      },
    });
  }

  componentDidMount() {
    // this._isMounted = true;

    // if (this._isMounted) {
    this.currentPanValue = {x: 0, y: 0};
    this.panListener = this.state.pan.addListener(
      value => (this.currentPanValue = value),
    );
    // }
  }

  componentWillUnmount() {
    //  if (this._isMounted) {
    this.state.pan.removeListener(this.panListener);
    // }

    //    this._isMounted = false;
  }

  takeViewShot() {
    // if (this._isMounted) {
    this.viewShot.capture().then(uri => {
      console.log(uri, 'uri');
      this.props.navigation.navigate('FinalImage', {
        image1: {path: uri},
      });
      // Image.getSize(uri, (width, height) => {
      //   this.props.completedEditing(uri, width, height);
      //   this.setState({
      //     finalImage: {
      //       uri: uri,
      //       width: width,
      //       height: height,
      //     },
      //   });
      // });
    });
    // }
  }

  resetViewShot() {
    //  if (this._isMounted) {
    this.setState({
      finalImage: null,
      pan: new Animated.ValueXY(),
      showSticker: false,
    });
    //  }
  }

  previewStickerImage(imageUrl, size = 15) {
    //if (!this._isMounted) {
    return (
      <Image
        style={{
          width: 50,
          height: 50,
          margin: 5,
        }}
        source={imageUrl}
      />
    );
    // }
  }

  render() {
    const productImage = this.props.route.params.image1;

    const {
      bottomContainer,
      bottomContainerStyle,
      imageSource,
      includeDefaultStickers,
      stickers,
      style,
      topContainer,
      visible,
    } = this.props;

    const {finalImage, showSticker, sticker} = this.state;
    const finalImageUrl = finalImage ? finalImage.uri : null;

    const defaultStickers = [
      [this.previewStickerImage(ghost), ghost],
      [this.previewStickerImage(heart), heart],
      [this.previewStickerImage(heartEyes), heartEyes],
      [this.previewStickerImage(kiss), kiss],
      [this.previewStickerImage(party), party],
      [this.previewStickerImage(robot), robot],
      [this.previewStickerImage(smile), smile],
      [this.previewStickerImage(sunglasses), sunglasses],
      [this.previewStickerImage(thumbsup), thumbsup],
    ];

    let finalStickers = defaultStickers;

    return (
      <>
        {!finalImage && (
          <View style={{backgroundColor:'black'}}>
            <ViewShot
              // style={{flex: null}}
              ref={ref => {
                this.viewShot = ref;
              }}
              options={{format: 'jpg', quality: 1.0}}>
              <ImageBackground
                ref={image => (this.imageComponent = image)}
                source={{
                  uri: productImage,
                }}
                style={styles.attachment}>
                {showSticker && (
                  <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[this.state.pan.getLayout()]}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                      }}
                      source={sticker}
                    />
                  </Animated.View>
                )}
              </ImageBackground>
            </ViewShot>
            <Text style={styles.title}>Select a sticker</Text>
            <ScrollView
              overScrollMode={'always'}
              horizontal={true}
              contentContainerStyle={[
                styles.stickerPickerContainer,
                //this.props.bottomContainerStyle,
              ]}>
              {finalStickers.map((sticker, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.setState({
                        showSticker: true,
                        sticker: sticker[1],
                      })
                    }>
                    {sticker[0]}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TouchableOpacity
              // style={this.props.bottomContainerStyle}
              style={{
                height: '8%',
                width: '60%',
                backgroundColor: 'black',
                // marginBottom: 90,
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: '20%',
              }}
              onPress={() => this.takeViewShot()}>
              {/* // {bottomContainer} */}
              <Text style={{fontSize: 20, color: 'red'}}>Save Picture</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }
}

let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  stickerPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 10,
  },
  actionTitle: {
    color: 'blue',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  attachment: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    //marginTop:10,
    height: 450,
    width: width,
  },
  finalAttachment: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 500,
    width: width,
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    width: width,
    marginVertical: 5,
    fontSize: 20,
    textAlign: 'center',
  },
});
