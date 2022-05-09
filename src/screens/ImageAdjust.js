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
  Saturate,
  Brightness,
  Temperature,
} from 'react-native-color-matrix-image-filters';
import RNViewShot from 'react-native-view-shot';
import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
const ImageAdjust = props => {
  const [brightvalue, setBrightValue] = useState(0.5);
  const [contrastvalue, setContrastValue] = useState(0.5);
  const [saturatvalue, setSaturatValue] = useState(0.5);
  const [tintvalue, setTintValue] = useState(0.5);
  const [warmthValue, setWarmthValue] = useState(0.5);
  const [type, setType] = useState('brightness');

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
        ) : type === 'saturation' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Saturate amount={saturatvalue}>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Saturate>
          </RNViewShot>
        ) : type === 'tint' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Tint amount={tintvalue}>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Tint>
          </RNViewShot>
        ) : type === 'warmth' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Temperature amount={warmthValue}>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Temperature>
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
        {type === 'brightness' ? (
          <Slider
            style={{width: '80%', height: 40, marginLeft: 30}}
            value={brightvalue}
            onValueChange={value => setBrightValue(value)}
          />
        ) : type === 'contrast' ? (
          <Slider
            style={{width: '80%', height: 40, marginLeft: 30}}
            value={contrastvalue}
            onValueChange={value => setContrastValue(value)}
          />
        ) : type === 'saturation' ? (
          <Slider
            style={{width: '80%', height: 40, marginLeft: 30}}
            value={saturatvalue}
            onValueChange={value => setSaturatValue(value)}
          />
        ) : type === 'tint' ? (
          <Slider
            style={{width: '80%', height: 40, marginLeft: 30}}
            value={tintvalue}
            onValueChange={value => setTintValue(value)}
          />
        ) : type === 'warmth' ? (
          <Slider
            style={{width: '80%', height: 40, marginLeft: 30}}
            value={warmthValue}
            onValueChange={value => setWarmthValue(value)}
          />
        ) : null}

        <View style={{flexDirection: 'row', paddingLeft: 20}}>
          <View>
            <MIcon
              name="brightness-5"
              color={type === 'brightness' ? '#fff' : 'grey'}
              size={30}
              style={{marginLeft: 17}}
              onPress={() => setType('brightness')}
            />
            <Text style={{color: type === 'brightness' ? '#fff' : 'grey'}}>
              LIGHTNESS
            </Text>
          </View>
          <View style={{paddingLeft: 13}}>
            <IIcon
              name="contrast"
              color={type === 'contrast' ? '#fff' : 'grey'}
              size={30}
              style={{marginLeft: 13, marginTop: -3}}
              onPress={() => setType('contrast')}
            />
            <Text style={{color: type === 'contrast' ? '#fff' : 'grey'}}>
              CONTRAST
            </Text>
          </View>
          <View style={{paddingLeft: 15}}>
            <MIcon
              name="wifi"
              color={type === 'tint' ? '#fff' : 'grey'}
              size={30}
              style={{marginLeft: 1, marginTop: -3}}
              onPress={() => setType('tint')}
            />
            <Text style={{color: type === 'tint' ? '#fff' : 'grey'}}>TINT</Text>
          </View>
          <View style={{paddingLeft: 13}}>
            <SIcon
              name="drop"
              color={type === 'saturation' ? '#fff' : 'grey'}
              size={30}
              style={{marginLeft: 17, marginTop: -3}}
              onPress={() => setType('saturation')}
            />
            <Text style={{color: type === 'saturation' ? '#fff' : 'grey'}}>
              SATURATION
            </Text>
          </View>
          <View style={{paddingLeft: 13}}>
            <MIcon
              name="sun-thermometer-outline"
              color={type === 'warmth' ? '#fff' : 'grey'}
              size={30}
              style={{marginLeft: 17, marginTop: -3}}
              onPress={() => setType('warmth')}
            />
            <Text style={{color: type === 'warmth' ? '#fff' : 'grey'}}>
              WARMTH
            </Text>
          </View>
        </View>
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
