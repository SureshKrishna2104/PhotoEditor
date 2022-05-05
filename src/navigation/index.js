import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import EditImage from '../screens/EditImage';
import ImageSelector from '../screens/ImageSelecter';
import FinalImage from '../screens/FinalImage';
import HomeScreen from '../screens/HomeScreen';
import CropImage from '../screens/CropImage';
import ImageEffect from '../screens/ImageEffect';
import ImageAdjust from '../screens/ImageAdjust';
import ImageSketch from '../screens/ImageSketch';
import ImageBackground from '../screens/ImageBackground';
//import ImageAdjustment from '../screens/ImageAdjustment';
// import AImage from '../screens/AImage';
const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
        <Stack.Screen name="EditImage" component={EditImage} />
        <Stack.Screen name="FinalImage" component={FinalImage} />
        <Stack.Screen name="CropImage" component={CropImage} />
        <Stack.Screen name="ImageEffect" component={ImageEffect} />
        <Stack.Screen name="ImageAdjust" component={ImageAdjust} />
        <Stack.Screen name="ImageSketch" component={ImageSketch} />
        <Stack.Screen name="ImageBackground" component={ImageBackground} />
        {/* <Stack.Screen name="ImageAdjustment" component={ImageAdjustment} /> */}
        {/* <Stack.Screen name="AImage" component={AImage} /> */}
        {/* <Stack.Screen name="MapScreen" component={MapScreen} />
    <Stack.Screen name="EatsScreen" component={EatsScreen} />
    <Stack.Screen name="MapOptions" component={NavOptions} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
