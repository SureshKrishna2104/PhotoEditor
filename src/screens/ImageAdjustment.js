// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const ImageAdjustment = () => {
// //   return (
// //     <View>
// //       <Text>ImageAdjustment</Text>
// //     </View>
// //   )
// // }

// // export default ImageAdjustment

// // // const styles = StyleSheet.create({})

// // import React, {Component} from 'react';
// // import {
// //   Dimensions,
// //   StyleSheet,
// //   View,
// //   ScrollView,
// //   Text,
// //   Button,
// // } from 'react-native';
// // // import {
// // //   Container,
// // //   Content,
// // //   Header,
// // //   Body,
// // //   Title,
// // //   Text,
// // //   Button,
// // // } from 'native-base';
// // import {Surface} from 'gl-react-native';
// // import ImageFilters from 'react-native-gl-image-filters';
// // import Filters from './Filters';

// // const width = Dimensions.get('window').width - 40;

// // const settings = [
// //   {
// //     name: 'hue',
// //     minValue: 0,
// //     maxValue: 6.3,
// //   },
// //   {
// //     name: 'blur',
// //     minValue: 0,
// //     maxValue: 30,
// //   },
// //   {
// //     name: 'sepia',
// //     minValue: -5,
// //     maxValue: 5,
// //   },
// //   {
// //     name: 'sharpen',
// //     minValue: 0,
// //     maxValue: 15,
// //   },
// //   {
// //     name: 'negative',
// //     minValue: -2.0,
// //     maxValue: 2.0,
// //   },
// //   {
// //     name: 'contrast',
// //     minValue: -10.0,
// //     maxValue: 10.0,
// //   },
// //   {
// //     name: 'saturation',
// //     minValue: 0.0,
// //     maxValue: 2,
// //   },
// //   {
// //     name: 'brightness',
// //     minValue: 0,
// //     maxValue: 5,
// //   },
// //   {
// //     name: 'temperature',
// //     minValue: 0.0,
// //     maxValue: 40000.0,
// //   },
// // ];

// // class ImageAdjustment extends Component {
// //   state = {
// //     ...settings,
// //     hue: 0,
// //     blur: 0,
// //     sepia: 0,
// //     sharpen: 0,
// //     negative: 0,
// //     contrast: 1,
// //     saturation: 1,
// //     brightness: 1,
// //     temperature: 6500,
// //   };

// //   saveImage = async () => {
// //     if (!this.image) return;

// //     const result = await this.image.glView.capture();
// //     console.warn(result);
// //   };

// //   render() {
// //     return (
// //       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

// //         {settings.map(filter => (
// //           <Filters
// //             key={filter.name}
// //             name={filter.name}
// //             minimum={filter.minValue}
// //             maximum={filter.maxValue}
// //             onChange={value => this.setState({[filter.name]: value})}
// //           />
// //         ))}
// //         <Button title="save" style={styles.button} onPress={this.saveImage} />
// //       </ScrollView>
// //     );
// //   }
// // }
// // export default ImageAdjustment;
// // const styles = StyleSheet.create({
// //   content: {marginTop: 20, marginHorizontal: 20},
// //   button: {marginVertical: 20, borderRadius: 0},
// // });

// import React, {Component} from 'react';
// import {Screen, Button, Text} from '@shoutem/ui';
// import Camera from 'react-native-camera';
// import {Surface} from 'gl-react-native';
// import {PanResponder} from 'react-native';
// import {scaleLinear} from 'd3-scale';

// import HelloGL from './HelloGL.js';
// import Saturate from './Saturate';

// export default class ImageAdjustment extends Component {
//   state = {
//     width: null,
//     height: null,
//     path: 'https://i.imgur.com/uTP9Xfr.jpg',
//     contrast: 1,
//     brightness: 1,
//     saturation: 1,
//   };

//   onLayout = event => {
//     const {width, height} = event.nativeEvent.layout;

//     this.setState({
//       width,
//       height,
//     });

//     this.start();
//   };

//   // refreshPic = () => {
//   //   this.camera
//   //     .capture({
//   //       target: Camera.constants.CaptureTarget.temp,
//   //       jpegQuality: 70,
//   //     })
//   //     .then(data =>
//   //       this.setState({
//   //         path: data.path,
//   //       }),
//   //     )
//   //     .catch(err => console.error(err));
//   // };

//   // start() {
//   //   this.timer = setInterval(() => this.refreshPic(), 8);
//   // }

//   dragScaleX = scaleLinear();
//   dragScaleY = scaleLinear();

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onMoveShouldSetResponderCapture: () => true,
//       onMoveShouldSetPanResponderCapture: () => true,

//       onPanResponderGrant: (e, {x0, y0}) => {
//         const {width, height} = this.state;

//         this.dragScaleX.domain([-x0, width - x0]).range([-1, 1]);

//         this.dragScaleY.domain([-y0, height - y0]).range([1, -1]);
//       },

//       onPanResponderMove: (e, {dx, dy}) => {
//         this.setState({
//           saturation: 1 + this.dragScaleX(dx),
//           brightness: 1 + this.dragScaleY(dy),
//         });
//       },

//       onPanResponderRelease: (ev, {vx, vy}) => {
//         console.log('released');
//       },
//     });
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     const {width, height, brightness, contrast, saturation} = this.state;

//     const filter = {
//       brightness,
//       contrast,
//       saturation,
//     };

//     if (width && height) {
//       return (
//         <Screen onLayout={this.onLayout} {...this._panResponder.panHandlers}>
//           {/* <Camera
//             style={{flex: 1}}
//             ref={cam => (this.camera = cam)}
//             captureQuality={Camera.constants.CaptureQuality['720p']}
//             aspect={Camera.constants.Aspect.fill}> */}
//             <Surface style={{width, height}}>
//               <Saturate {...filter}>{{uri: this.state.path}}</Saturate>
//             </Surface>
//           {/* </Camera> */}
//         </Screen>
//       );
//     } else {
//       return <Screen onLayout={this.onLayout} />;
//     }
//   }
// }
