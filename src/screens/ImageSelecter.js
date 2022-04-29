import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import EditImage from './EditImage';
const ImageSelector = ({navigation}) => {
  // console.log(image, 'images');

  const showpic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      navigation.navigate('FinalImage', {
        image1: image,
      });
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="UpLoadImage" onPress={() => showpic()} />
    </View>
  );
};
export default ImageSelector;
