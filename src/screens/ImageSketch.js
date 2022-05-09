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
  KeyboardAvoidingView,
  Platform,
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
import Icon from 'react-native-vector-icons/Entypo';
import OIcon from 'react-native-vector-icons/Octicons';
import RNDrawOnScreen from 'react-native-draw-on-screen';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {rgba} from 'react-native-image-filter-kit';
import RNViewShot from 'react-native-view-shot';
import {captureScreen} from 'react-native-view-shot';
import {captureRef} from 'react-native-view-shot';
import Draggable from 'react-native-draggable';
//import Controls from './Controls';

const ImageSketch = props => {
  const [color, setColor] = useState('black');
  const [strokeWidth, setStrokeWidth] = useState(30);
  const [mode, setMode] = useState('colors');
  const [text, setText] = useState('  ');
  const [handle, setHandle] = useState(false);
  const [bold, setBold] = useState('');
  const [italic, setItalic] = useState('');
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
  console.log(text, 'ddd');

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
          ref={imgref}
          collapsable={false}
          style={{
            flex: 1,
            flexGrow: 1,
            border: 'solid',
            borderWidth: 2,
            borderColor: '#ccc',
          }}>
          {/* <RNViewShot ref={imgref} captureMode="update"> */}
          <ImageBackground
            source={{uri: props.route?.params?.image1}}
            style={{height: '100%', width: '100%'}}>
            {/* <RNDrawOnScreen
              penColor={color}
              strokeWidth={strokeWidth}
              ref={r => (RNDraw.current = r)}
            /> */}

            {handle ? (
              <View>
                <Draggable x={50} y={50}>
                  <TextInput
                    value={text}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      minHeight: 50,
                      minWidth: 100,
                      maxWidth: '100%',
                      color: color,
                      fontSize: strokeWidth,
                      fontWeight: bold,
                      letterSpacing: 2,
                      fontStyle: italic,
                    }}
                    onChangeText={e => setText(e)}
                  />
                </Draggable>
              </View>
            ) : null}
          </ImageBackground>
          {/* </RNViewShot> */}
        </View>
      </View>
      <View style={{height: '20%', backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Icon
            name="keyboard"
            size={28}
            style={{marginLeft: 20, marginTop: 0}}
            color="#fff"
            onPress={() => setHandle(true)}
          />
          <TouchableOpacity
            style={{
              marginLeft: '45%',

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
          <Icon
            name="cross"
            size={28}
            style={{marginLeft: '10%'}}
            color="#fff"
            onPress={() => setHandle(false)}
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
          ) : mode === 'pensize' ? (
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
                  onPress={() => changeBrushSize(20)}
                />
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    borderRadius: 8,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(25)}
                />
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(30)}
                />
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 13,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(35)}
                />
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: '#fff',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(40)}
                />
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    backgroundColor: 'white',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(45)}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#fff',

                    marginLeft: 20,
                  }}
                  onPress={() => changeBrushSize(50)}
                />
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <OIcon
                name="bold"
                size={28}
                style={{marginLeft: 20, paddingLeft: 10}}
                color="#fff"
                onPress={() => setBold('bold')}
              />
              <OIcon
                name="italic"
                size={28}
                style={{marginLeft: 20, paddingLeft: 10}}
                color="#fff"
                onPress={() => setItalic('italic')}
              />
              <OIcon
                name="circle-slash"
                size={28}
                style={{marginLeft: 20, paddingLeft: 10}}
                color="#fff"
                onPress={() => setItalic('normal')}
              />
            </View>
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
              <Text style={{fontSize: 20}}>TextSize</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
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
              onPress={() => onCapture()}
              >
              <Text style={{fontSize: 20}}>Save</Text>
            </TouchableOpacity> */}
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
              onPress={() => setMode('textStyle')}>
              <Text style={{fontSize: 20}}>TextStyle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageSketch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
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
