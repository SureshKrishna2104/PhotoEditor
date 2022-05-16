import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  Alert,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CropView} from 'react-native-image-crop-tools';
import Icon from 'react-native-vector-icons/Feather';

import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
  Achromatomaly,
  Achromatopsia,
} from 'react-native-color-matrix-image-filters';
import RNViewShot from 'react-native-view-shot';
const ImageEffect = ({route, navigation}) => {
  const productImage = route.params.image1;
  console.log(productImage);
  const cropViewRef = useRef();
  // console.log(cropViewRef.current,"ref")
  const [canvas, setCanvas] = useState('');
  const [imgWidth, setImgwidth] = useState(10);
  const [imgHeight, setImgHeight] = useState(10);
  const [effect, setEffect] = useState('');
  const imgref = useRef();
  const saveImg = () => {
    imgref.current.capture().then(uri => {
      console.log('do something with ', uri);
      navigation.navigate('FinalImage', {
        image1: {path: uri},
      });
    });
  };
  console.log(imgWidth, imgHeight);

  return (
    <View>
      <StatusBar backgroundColor="black" />
      <View style={{height: '80%', backgroundColor: 'black'}}>
        {effect === 'sepia' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Achromatopsia>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Achromatopsia>
          </RNViewShot>
        ) : effect === 'grayScale' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Grayscale>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Grayscale>
          </RNViewShot>
        ) : effect === 'ColorMatrix' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <ColorMatrix
              matrix={concatColorMatrices([
                saturate(-0.9),
                contrast(5.2),
                invert(),
              ])}
              // alt: matrix={[saturate(-0.9), contrast(5.2), invert()]}
            >
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </ColorMatrix>
          </RNViewShot>
        ) : (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Image
              source={{uri: productImage}}
              style={{width: '100%', height: '100%'}}
            />
          </RNViewShot>
        )}
      </View>
      <View style={{height: '20%', backgroundColor: 'black', paddingTop: 20}}>
        <View style={{flexDirection: 'row', marginBottom: -10}}>
          <Icon
            name="slash"
            size={26}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={() => setEffect('')}
          />
          <Icon
            name="check"
            size={26}
            style={{marginLeft: '75%'}}
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
        <ScrollView
          horizontal={true}
          style={{
            width: '100%',
            marginLeft: 40,
          }}>
           <View style={{flexDirection:'column'}}>
           <Text style={{color: '#fff', fontSize: 15,paddingLeft:40,paddingBottom:2}}>Sepia</Text>
          <TouchableOpacity
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              backgroundColor: 'red',
            //  marginTop: -20,
              marginLeft: 20,
            }}
            //onPress={() => setBlur(3)}
            onPress={() => setEffect('sepia')}>
            <Sepia>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Sepia>
          </TouchableOpacity>
          </View> 
          <View style={{flexDirection:'column'}}>
           <Text style={{color: '#fff', fontSize: 15,paddingLeft:20,paddingBottom:2}}>GrayScalled</Text>
          <TouchableOpacity
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              backgroundColor: 'red',
            //  marginTop: -20,
              marginLeft: 20,
            }}
            //onPress={() => setBlur(3)}
            onPress={() => setEffect('grayScale')}>
            <Grayscale>
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </Grayscale>
          </TouchableOpacity>
          </View> 
          <View style={{flexDirection:'column'}}>
           <Text style={{color: '#fff', fontSize: 15,paddingLeft:20,paddingBottom:2}}>ColorMatrix</Text>
          <TouchableOpacity
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              backgroundColor: 'red',
            //  marginTop: -20,
              marginLeft: 20,
            }}
            //onPress={() => setBlur(3)}
            onPress={() => setEffect('ColorMatrix')}>
             <ColorMatrix
              matrix={concatColorMatrices([
                saturate(-0.9),
                contrast(5.2),
                invert(),
              ])}
              // alt: matrix={[saturate(-0.9), contrast(5.2), invert()]}
            >
              <Image
                source={{uri: productImage}}
                style={{width: '100%', height: '100%'}}
              />
            </ColorMatrix>
          </TouchableOpacity>
          </View> 
         
        </ScrollView>
      </View>
    </View>
  );
};

export default ImageEffect;

const styles = StyleSheet.create({});
