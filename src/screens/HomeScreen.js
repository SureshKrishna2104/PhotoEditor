import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import EditImage from './EditImage';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const HomeScreen = ({navigation}) => {
  const showpic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image, 'img');
        navigation.navigate('FinalImage', {
          image1: image,
        });
      })
      .catch(err => console.log(err, 'errr'));
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E1F5C3" />

      <LinearGradient
        colors={['#E1F5C3', '#A0C382', '#233C4B']}
        style={styles.linearGradient}>
        <Text style={styles.header}>PICSHOT</Text>
        {/* <Icon
          name="android"
          size={60}
          color="#007c00"
          onPress={() => {
            Alert.alert('Android Icon Clicked');
          }}
        /> */}
        <Text style={styles.about}>CREATE NEW</Text>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => showpic()}
            style={{
              height: '75%',
              width: '33%',
              backgroundColor: '#A0C382',
              borderRadius: 50,
              marginLeft: '33%',
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: '50%', width: 70, resizeMode: 'contain'}}
              source={require('../assets/images/imgtouch.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 23,
              marginLeft: '40%',
              marginBottom: 22,
              fontWeight: 'bold',
            }}>
            Photo
          </Text>
        </View>
      </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    margin: 2,
    //marginLeft: '30%',
    marginBottom: '30%',
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    fontFamily: 'DancingScript-Bold',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  about: {
    fontSize: 20,
    // paddingLeft: 40,
    color: '#fff',
  },
  card: {
    marginTop: 10,
    height: '25%',
    width: '85%',
    backgroundColor: '#fff',
    // marginLeft: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    marginBottom: '20%',
    justifyContent: 'center',
    flexDirection: 'column',

    // alignItems:'center'
  },
});
