import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import Slider from 'react-native-slider';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  Contrast,
  saturate,
  Brightness,
} from 'react-native-color-matrix-image-filters';
import RNViewShot from 'react-native-view-shot';
import Icon from 'react-native-vector-icons/Feather';
const ImageAdjust = props => {
  const [brightvalue, setBrightValue] = useState(0.5);
  const [contrastvalue, setContrastValue] = useState(0.5);
  const [type, setType] = useState('');
  const imgref = useRef();

  const productImage = props.route.params.image1;
  const saveImg = () => {
    imgref.current.capture().then(uri => {
      console.log('do something with ', uri);
      props.navigation.navigate('FinalImage', {
        image1: {path: uri},
      });
    });
  };

  return (
    <View>
      <StatusBar backgroundColor="black" />
      <View style={{height: '75%', backgroundColor: 'black'}}>
        {type === 'brightness' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Brightness amount={brightvalue}>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Brightness>
          </RNViewShot>
        ) : type === 'contrast' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Contrast amount={contrastvalue}>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Contrast>
          </RNViewShot>
        ) : (
          <Image
            source={{uri: productImage}}
            style={{width: '100%', height: '100%'}}
          />
        )}
      </View>

      <View style={{height: '25%', backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Icon
            name="check"
            size={26}
            style={{marginLeft: '85%'}}
            color="#fff"
            onPress={() => {
              saveImg();
              // cropViewRef.current.saveImage(true, 90);
              //console.log
              //   navigation.navigate('FinalImage', {
              //     image1:{ "path":cropViewRef.current.saveImage(true, 90)},
              //   });
            }}
          />
        </View>
        <Text style={{fontSize: 20, color: '#fff', marginLeft: 30}}>
          Brightness
        </Text>
        <Slider
          style={{width: '80%', height: 40, marginLeft: 30}}
          value={brightvalue}
          onValueChange={value => (
            setType('brightness'), setBrightValue(value)
          )}
        />
        <Text style={{fontSize: 20, color: '#fff', marginLeft: 30}}>
          Contrast
        </Text>
        <Slider
          style={{width: '80%', height: 40, marginLeft: 30}}
          value={contrastvalue}
          onValueChange={value => (
            setType('contrast'), setContrastValue(value)
          )}
        />
      </View>
    </View>
  );
};

export default ImageAdjust;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
