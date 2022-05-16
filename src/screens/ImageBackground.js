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

import {DragResizeBlock} from 'react-native-drag-resize';

import RNViewShot from 'react-native-view-shot';
import LinearGradient from 'react-native-linear-gradient';

const ImageBackgroundEdit = ({route, navigation}) => {
  const productImage = route.params.image1;
  const [mode, setMode] = useState('image');
  const [blur, setBlur] = useState(0);
  const [firstColor, setFirstColor] = useState('#cc2b5e');
  const [secondColor, setSecondColor] = useState('#753a88');

  const imgref = useRef();
  const onCapture = () => {
    imgref.current.capture().then(uri => {
      console.log('do something with ', uri);
      navigation.navigate('FinalImage', {
        image1: {path: uri},
      });
    });
  };

  return (
    <View>
      <StatusBar backgroundColor="black" />
      <View style={{height: '73%', backgroundColor: 'black'}}>
        {mode === 'image' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <ImageBackground
              source={{uri: productImage}}
              blurRadius={blur}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DragResizeBlock x={60} y={50} h={550} w={350} isDisabled={true}>
                <Image
                  source={{uri: productImage}}
                  style={{width: '80%', height: '70%', position: 'relative'}}
                />
              </DragResizeBlock>
            </ImageBackground>
          </RNViewShot>
        ) : (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <LinearGradient
              colors={[firstColor, secondColor]}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DragResizeBlock x={60} y={50} h={550} w={350} isDisabled={true}>
                <Image
                  source={{uri: productImage}}
                  style={{width: '80%', height: '70%', position: 'relative'}}
                />
              </DragResizeBlock>
            </LinearGradient>
          </RNViewShot>
        )}
      </View>
      <View style={{height: '27%', backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <TouchableOpacity
            style={{
              marginLeft: '75%',

              backgroundColor: 'red',
              height: 30,
              width: 75,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={() => onCapture()}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
        {mode === 'image' ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: 'red',
                // marginTop: 40,
                marginLeft: 20,
              }}
              onPress={() => setBlur(0)}>
              <ImageBackground
                source={{uri: productImage}}
                blurRadius={0}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: 'red',
                }}>
                <Image
                  source={{uri: productImage}}
                  style={{width: '60%', height: '80%', position: 'relative'}}
                />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: 'red',
                //marginTop: 40,
                marginLeft: 20,
              }}
              onPress={() => setBlur(1)}>
              <ImageBackground
                source={{uri: productImage}}
                blurRadius={1}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: 'red',
                }}>
                <Image
                  source={{uri: productImage}}
                  style={{width: '60%', height: '80%', position: 'relative'}}
                />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: 'red',
                //marginTop: 40,
                marginLeft: 20,
              }}
              onPress={() => setBlur(2)}>
              <ImageBackground
                source={{uri: productImage}}
                blurRadius={2}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: 'red',
                }}>
                <Image
                  source={{uri: productImage}}
                  style={{width: '60%', height: '80%', position: 'relative'}}
                />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: 'red',
                //marginTop: 40,
                marginLeft: 20,
              }}
              onPress={() => setBlur(3)}>
              <ImageBackground
                source={{uri: productImage}}
                blurRadius={3}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: 'red',
                }}>
                <Image
                  source={{uri: productImage}}
                  style={{width: '60%', height: '80%', position: 'relative'}}
                />
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row',marginTop:-10}}>
            <TouchableOpacity
              onPress={() => (
                setFirstColor('#cc2b5e'), setSecondColor('#753a88')
              )}>
              <LinearGradient
                colors={['#cc2b5e', '#753a88']}
                style={styles.linearGradient}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (
                setFirstColor('#36d1dc'), setSecondColor('#5b86e5')
              )}>
              <LinearGradient
                colors={['#36d1dc', '#5b86e5']}
                style={styles.linearGradient}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (
                setFirstColor('#141e30'), setSecondColor('#243b55')
              )}>
              <LinearGradient
                colors={['#141e30', '#243b55']}
                style={styles.linearGradient}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (
                setFirstColor('#4568dc'), setSecondColor('#b06ab3')
              )}>
              <LinearGradient
                colors={['#4568dc', '#b06ab3']}
                style={styles.linearGradient}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (
                setFirstColor('#ccfbff'), setSecondColor('#ef96c5')
              )}>
              <LinearGradient
                colors={['#ccfbff', '#ef96c5']}
                style={styles.linearGradient}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={{flexDirection: 'row', padding: 10}}>
          <TouchableOpacity
            style={{
              marginLeft: '15%',
              backgroundColor: '#fff',
              height: 30,
              width: 95,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              marginTop: -5,
            }}
            onPress={() => setMode('image')}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              IMAGE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: '25%',
              backgroundColor: '#fff',
              height: 30,
              width: 95,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              marginTop: -5,
            }}
            onPress={() => setMode('gradient')}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              GRADIENT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ImageBackgroundEdit;

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '50%',
    width: '90%',
    marginLeft: 30,
    marginTop: 5,
    //marginBottom: 20,
    padding: 20,
  },
});
