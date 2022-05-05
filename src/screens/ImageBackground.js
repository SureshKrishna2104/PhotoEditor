// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ImageBackground = () => {
//   return (
//     <View>
//       <Text>ImageBackground</Text>
//     </View>
//   )
// }

// export default ImageBackground

// const styles = StyleSheet.create({})
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
  ImageBackground,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CropView} from 'react-native-image-crop-tools';
import Icon from 'react-native-vector-icons/Feather';
import {DragResizeBlock} from 'react-native-drag-resize';

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
const ImageBackgroundEdit = ({route, navigation}) => {
  const productImage = route.params.image1;
  console.log(productImage);
  const cropViewRef = useRef();
  // console.log(cropViewRef.current,"ref")
  const [canvas, setCanvas] = useState('');
  const [imgWidth, setImgwidth] = useState(10);
  const [imgHeight, setImgHeight] = useState(10);
  const [effect, setEffect] = useState('');
  const imgref = useRef();
  // const saveImg = () => {
  //   imgref.current.capture().then(uri => {
  //     console.log('do something with ', uri);
  //     navigation.navigate('FinalImage', {
  //       image1: {path: uri},
  //     });
  //   });
  // };
  // console.log(imgWidth, imgHeight);

  return (
    <View>
      <StatusBar backgroundColor="black" />
      <View style={{height: '92%', backgroundColor: 'black'}}>
        <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
          <ImageBackground
            source={{uri: productImage}}
            blurRadius={2}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DragResizeBlock x={60} y={50} h={550} w={350}  >
              <Image
                source={{uri: productImage}}
                style={{width: '80%', height: '80%', position: 'relative'}}
              />
            </DragResizeBlock>
          </ImageBackground>
        </RNViewShot>
      </View>
    </View>
  );
};

export default ImageBackgroundEdit;

const styles = StyleSheet.create({});
