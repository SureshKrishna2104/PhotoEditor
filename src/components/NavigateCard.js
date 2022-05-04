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
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigateCard = ({image}) => {
  const productId = image;
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          // marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'black',
          paddingTop: 5,
          marginLeft:30,
          paddingLeft:10
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
          <Text style={{color: '#fff', marginLeft: 17,fontSize:14,marginTop:2}}>FILTER</Text>
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
          <Text style={{color: '#fff', marginLeft: 17,fontSize:14,marginTop:2}}>CROP</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Icons
            name="star"
            size={28}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageEffect', {
                image1: productId,
              })
            }
          />
          <Text style={{color: '#fff', marginLeft: 13,fontSize:14,marginTop:2}}>EFFECT</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Icon
            name="sliders"
            size={28}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageAdjust', {
                image1: productId,
              })
            }
          />
          <Text style={{color: '#fff', marginLeft: 13,fontSize:14,marginTop:2}}>ADJUST</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Icon
            name="text-height"
            size={24}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageSketch', {
                image1: productId,
              })
            }
          />
          <Text style={{color: '#fff', marginLeft: 18,fontSize:18,marginTop:2}}>Text</Text>
        </View>
      </View>
    </ScrollView>
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
