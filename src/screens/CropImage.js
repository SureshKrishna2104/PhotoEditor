import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  Alert,
  View,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CropView} from 'react-native-image-crop-tools';
import Icon from 'react-native-vector-icons/Feather';
import RNFS from 'react-native-fs';
import {ScrollView} from 'react-native-gesture-handler';

const CropImage = ({props, route, navigation}) => {
  const productImage = route.params.image1;
  //console.log(productImage);
  const cropViewRef = useRef();
  // console.log(cropViewRef.current,"ref")
  const [canvas, setCanvas] = useState('');
  const [imgWidth, setImgwidth] = useState(10);
  const [imgHeight, setImgHeight] = useState(10);
  console.log(imgWidth, imgHeight);
  return (
    <View>
      <StatusBar backgroundColor="black" />
      <View style={{height: '80%', backgroundColor: 'black'}}>
        <CropView
          sourceUrl={productImage}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={res => {
            navigation.navigate('FinalImage', {
              image1: {path: 'file://' + res.uri},
            });
          }}
          keepAspectRatio
          aspectRatio={{width: imgWidth, height: imgHeight}}
        />
      </View>
      <View style={{height: '20%', backgroundColor: 'black', paddingTop: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Icon
            name="rotate-ccw"
            size={26}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={() => {
              cropViewRef.current.rotateImage(true);
            }}
          />
          <Icon
            name="check"
            size={26}
            style={{marginLeft: '75%'}}
            color="#fff"
            onPress={() => {
              cropViewRef.current.saveImage(true, 90);
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
          }}>
          <TouchableOpacity
            onPress={() => (setCanvas('1:1'), setImgwidth(1), setImgHeight(1))}
            style={{
              marginLeft: 25,
              marginTop: 10,
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              //opacity: canvas==="1:1"?1:0.5 ,
              backgroundColor: canvas === '1:1' ? '#fff' : 'grey',
            }}>
            <Icon
              name="instagram"
              size={20}
              // style={{marginLeft: 20}}
              color="black"
            />
            <Text style={{color: 'black', fontSize: 15}}>1:1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (setCanvas('4:5'), setImgwidth(4), setImgHeight(5))}
            style={{
              marginLeft: 25,
              // marginTop: 0,
              height: 60,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              
              // opacity: canvas === '4:5' ? 1 : 0.5,
              // backgroundColor: 'red',
              backgroundColor: canvas === '4:5' ? '#fff' : 'grey',
            }}>
            <Icon
              name="instagram"
              size={20}
              // style={{marginLeft: 20}}
              color="black"
            />
            <Text style={{color: 'black', fontSize: 15}}>4:5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (
              setCanvas('16:9'), setImgwidth(16), setImgHeight(9)
            )}
            style={{
              marginLeft: 25,
              marginTop: 20,
              height: 40,
              width: 75,
              justifyContent: 'center',
              alignItems: 'center',
              //   opacity: canvas === '16:9' ? 1 : 0.5,
              //   backgroundColor: 'red',
              backgroundColor: canvas === '16:9' ? '#fff' : 'grey',
            }}>
            <Icon
              name="youtube"
              size={20}
              // style={{marginLeft: 20}}
              color="black"
            />
            <Text style={{color: 'black', fontSize: 15}}>16:9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (setCanvas('3:4'), setImgwidth(3), setImgHeight(4))}
            style={{
              marginLeft: 25,
              marginTop: 10,
              height: 50,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              //   opacity: canvas === '9:16' ? 1 : 0.5,
              //   backgroundColor: 'red',
              backgroundColor: canvas === '3:4' ? '#fff' : 'grey',
            }}>
            <Icon
              name="youtube"
              size={20}
              // style={{marginLeft: 20}}
              color="black"
            />
            <Text style={{color: 'black', fontSize: 15}}>3:4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (setCanvas('4:3'), setImgwidth(4), setImgHeight(3))}
            style={{
              marginLeft: 25,
              marginTop: 20,
              height: 40,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              //   opacity: canvas === '16:9' ? 1 : 0.5,
              //   backgroundColor: 'red',
              backgroundColor: canvas === '4:3' ? '#fff' : 'grey',
            }}>
            <Icon
              name="youtube"
              size={20}
              // style={{marginLeft: 20}}
              color="black"
            />
            <Text style={{color: 'black', fontSize: 15}}>4:3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (setCanvas('2:1'), setImgwidth(2), setImgHeight(1))}
            style={{
              marginLeft: 25,
              marginTop: 20,
              height: 40,
              width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              //   opacity: canvas === '16:9' ? 1 : 0.5,
              //   backgroundColor: 'red',
              backgroundColor: canvas === '2:1' ? '#fff' : 'grey',
            }}>
            <Icon
              name="youtube"
              size={20}
              // style={{marginLeft: 20}}
              color="black"
            />
            <Text style={{color: 'black', fontSize: 15}}>2:1</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CropImage;

const styles = StyleSheet.create({
  cropView: {
    height: '100%',
    width: '100%',
  },
});
