// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ImageSketch = () => {
//   return (
//     <View>
//       <Text>ImageSketch</Text>
//     </View>
//   )
// }

// export default ImageSketch

// const styles = StyleSheet.create({})

import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  ImageBackground,
  Touchable,
  Text,
  Image,
} from 'react-native';
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
import Icon from 'react-native-vector-icons/Feather';
import RNDrawOnScreen from 'react-native-draw-on-screen';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {rgba} from 'react-native-image-filter-kit';
import RNViewShot from 'react-native-view-shot';
import {captureScreen} from 'react-native-view-shot';
import {captureRef} from 'react-native-view-shot';
//import Controls from './Controls';

const ImageSketch = props => {
  const [color, setColor] = useState('black');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [mode, setMode] = useState('colors');
  const RNDraw = useRef();
  const changeColor = color => {
    setColor(color);
  };

  const changeBrushSize = strokeWidth => {
    setStrokeWidth(strokeWidth);
  };
  const undo = () => {
    RNDraw.current.undo();
  };

  const clear = () => {
    RNDraw.current.clear();
  };
  const imgref = useRef();
  const onCapture = () => {
    // captureScreen({
    //   format: 'jpg',
    //   quality: 0.8,
    // }).then(
    //   uri => {
    //     console.log('do something with ', uri);
    //     props.navigation.navigate('FinalImage', {
    //       image1: {path: uri},
    //     });
    //   },
    //   error => console.error('Oops, snapshot failed', error),
    // );

    captureRef(imgref.current, {
      format: 'jpg',
      quality: 0.8,
    }).then(
      uri => {
        console.log('Image saved to', uri);
        props.navigation.navigate('FinalImage', {
          image1: {path: uri},
        });
      },
      error => console.error('Oops, snapshot failed', error),
    );
  };

  const saveImg = () => {
    // console.log(RNDraw.current.updateView(), 'kkk');
    imgref.current.capture().then(uri => {
      console.log('do something with ', uri);
      props.navigation.navigate('FinalImage', {
        image1: {path: uri},
      });
    });
  };
  return (
    <View>
      <View style={{height: '80%', backgroundColor: 'black'}}>
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            border: 'solid',
            borderWidth: 2,
            borderColor: '#ccc',
          }}>
          <RNViewShot ref={imgref} captureMode="update">
            <ImageBackground
              source={{uri: props.route?.params?.image1}}
              style={{height: '100%', width: '100%'}}>
              <RNDrawOnScreen
                penColor={color}
                strokeWidth={strokeWidth}
                ref={r => (RNDraw.current = r)}
              />
            </ImageBackground>
          </RNViewShot>
        </View>
      </View>
      <View style={{height: '20%', backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Icon
            name="rotate-ccw"
            size={26}
            style={{marginLeft: 20, marginTop: 0}}
            color="#fff"
            onPress={() => undo()}
          />

          <Icon
            name="check"
            size={26}
            style={{marginLeft: '75%'}}
            color="#fff"
            onPress={() => clear()}
            // onPress={() => {
            //   saveImg();
            //   // cropViewRef.current.saveImage(true, 90);
            //   //console.log
            //   //   navigation.navigate('FinalImage', {
            //   //     image1:{ "path":cropViewRef.current.saveImage(true, 90)},
            //   //   });
            // }}
          />
        </View>
        <View>
          {mode === 'colors' ? (
            <ScrollView horizontal={true}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: 'red',
                    // marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('red')}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#ff404b',
                    // marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('#ff404b')}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#ffcc2b',
                    //   marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('#ffcc2b')}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#a1d834',
                    // marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('#a1d834')}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#01a5dc',
                    //  marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('#01a5dc')}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#b740a1',
                    //  marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('#b740a1')}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#ff67a1',
                    // borderColor:'white',
                    // borderWidth:3,
                    //   marginTop: 40,
                    marginLeft: 20,
                  }}
                  onPress={() => changeColor('#ff67a1')}
                />
              </View>
            </ScrollView>
          ) : (
            <ScrollView horizontal={true}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'white',

                    marginLeft: 50,
                  }}
                  onPress={() => changeBrushSize(5)}
                />
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    borderRadius: 8,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(10)}
                />
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(10)}
                />
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 13,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(10)}
                />
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: '#fff',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(15)}
                />
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(10)}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#fff',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(20)}
                />
              </View>
            </ScrollView>
          )}

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                borderRadius: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 40,
              }}
              onPress={() => setMode('colors')}>
              <Text style={{fontSize: 20}}>colors</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                borderRadius: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 20,
              }}
              onPress={() => setMode('pensize')}>
              <Text style={{fontSize: 20}}>PenSize</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                borderRadius: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 20,
              }}
              onPress={() => onCapture()}>
              <Text style={{fontSize: 20}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageSketch;
// export default class ImageSketch extends React.Component {
//   state = {
//     color: 'black',
//     strokeWidth: 10,
//   };

//   changeColor = color => {
//     this.setState({color});
//   };

//   changeBrushSize = strokeWidth => {
//     this.setState({strokeWidth});
//   };

//   undo = () => {
//     this.RNDraw.undo();
//   };

//   clear = () => {
//     this.RNDraw.clear();
//   };

//   render() {
//     console.log(this.props.route.params, 'dd');
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View style={{height: '80%', backgroundColor: 'black'}}>
//           <View
//             style={{
//               flex: 1,
//               flexGrow: 1,
//               border: 'solid',
//               borderWidth: 2,
//               borderColor: '#ccc',
//             }}>
//             <ImageBackground
//               source={{uri: this.props.route?.params?.image1}}
//               style={{height: '100%', width: '100%'}}>
//               <RNDrawOnScreen
//                 penColor={this.state.color}
//                 strokeWidth={this.state.strokeWidth}
//                 ref={r => (this.RNDraw = r)}
//               />
//             </ImageBackground>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
