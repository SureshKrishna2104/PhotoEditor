import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Icons from 'react-native-vector-icons/Ionicons';
const NavigateCard = ({image}) => {
  const productId = image;

  const navigation = useNavigation();
  return (
    <View
      style={{
        // marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        paddingTop: 3,
      }}>
      <View style={{flexDirection: 'column'}}>
        <Icons
          name="md-color-filter"
          size={30}
          style={{marginLeft: 20}}
          color="#fff"
          onPress={() =>
            navigation.navigate('EditImage', {
              image1: productId,
            })
          }
        />
        <Text style={{color: '#fff', marginLeft: 17}}>Filter</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Icons
          name="crop"
          size={30}
          style={{marginLeft: 20}}
          color="#fff"
          onPress={() =>
            navigation.navigate('CropImage', {
              image1: productId,
            })
          }
        />
        <Text style={{color: '#fff', marginLeft: 17}}>Crop</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Icons
          name="crop"
          size={30}
          style={{marginLeft: 20}}
          color="#fff"
          onPress={() =>
            navigation.navigate('ImageAdjustment')
          
          }
        />
        <Text style={{color: '#fff', marginLeft: 17}}>Crop</Text>
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
