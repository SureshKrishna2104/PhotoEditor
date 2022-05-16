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
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'

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
          //marginLeft:30,
          paddingLeft: 15,
        }}>
        <View style={{flexDirection: 'column'}}>
          <Icons
            name="md-color-filter"
            size={26}
            style={{marginLeft: 16}}
            color="#fff"
            onPress={() =>
              navigation.navigate('EditImage', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 12, fontSize: 14, marginTop: -1}}>
            FILTER
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Icons
            name="crop"
            size={26}
            style={{marginLeft: 16}}
            color="#fff"
            onPress={() =>
              navigation.navigate('CropImage', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 12, fontSize: 14, marginTop: -1}}>
            CROP
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Icons
            name="star"
            size={26}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageEffect', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 12, fontSize: 14, marginTop: -1}}>
            EFFECT
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <MIcon
            name="square-opacity"
            size={26}
            style={{marginLeft:15}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageBackground', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 19, fontSize: 14, marginTop: -1}}>
            BG
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Icon
            name="sliders"
            size={26}
            style={{marginLeft: 21}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageAdjust', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 12, fontSize: 14, marginTop: -1}}>
            ADJUST
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <MIcon
            name="format-text"
            size={26}
            style={{marginLeft: 15}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageSketch', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 12, fontSize: 14, marginTop: -1}}>
            TEXT
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <MIcon
            name="sticker-emoji"
            size={26}
            style={{marginLeft: 15}}
            color="#fff"
            onPress={() =>
              navigation.navigate('ImageSticker', {
                image1: productId,
              })
            }
          />
          <Text
            style={{color: '#fff', marginLeft: 12, fontSize: 14, marginTop: -1}}>
            Sticker
          </Text>
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
