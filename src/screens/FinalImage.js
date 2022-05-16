import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import EditNavigator from '../navigation/EditNavigator';
import NavigateCard from '../components/NavigateCard';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/Feather';
const FinalImage = ({route}) => {
  const productId = route.params.image1?.path;
 

  const checkPermission = async () => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image

    var destPath =
      RNFS.DownloadDirectoryPath + '/' + 'IMG' + Date.now() + '.jpg';
    RNFS.moveFile(productId, destPath)
      .then(success => {
        console.log('file moved!');
        alert('Image Downloaded Successfully.');
      })
      .catch(err => {
        console.log('Error: ' + err.message);
      });
  };

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return (
    <View>
      <StatusBar backgroundColor="black" />
      <View
        style={{
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <TouchableOpacity
          style={{
            height: '6%',
            width: '30%',
            backgroundColor: 'red',
            marginLeft: '65%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: -10,
          }}
          onPress={checkPermission}
          // onPress={() => {
          //   navigation.navigate('FinalImage', {
          //     image1: {path: editImage},
          //   });
          // }}
        >
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 18, color: '#fff',paddingLeft:2}}>Save</Text>
          <Icon name="download" size={20} style={{paddingLeft:10,color:'white'}}/>
          </View>
        </TouchableOpacity>

        <Image
          style={styles.filterSelector}
          source={{
            uri: productId,
          }}
          resizeMode={'contain'}
        />
      </View>
      <View style={{height: '10%', backgroundColor: 'black'}}>
        <NavigateCard image={productId} />
      </View>
    </View>
  );
};

export default FinalImage;
const styles = StyleSheet.create({
  image: {
    width: 520,
    height: 520,
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    width: '90%',
    height: '90%',

    //margin: 5,
    backgroundColor: 'black',
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
