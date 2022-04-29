import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
//import RideOptionsCard from '../components/RideOptionsCard';
import EditImage from '../screens/EditImage';
// import AImage from '../screens/AImage';

const Stack = createStackNavigator();

const EditNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NavigateCard" component={NavigateCard} />
      <Stack.Screen name="EditImage" component={EditImage} />
      {/* <Stack.Screen name="AImage" component={AImage} /> */}
    </Stack.Navigator>
  );
};

export default EditNavigator;
