import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import EditNavigator from '../navigation/EditNavigator';
import NavigateCard from '../components/NavigateCard';

const FinalImage = ({route}) => {
  const productId = route.params.image1?.path;
  console.log(route.params.image1, 'finalImage');
  console.log(productId);
  console.log('file://' + productId);

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
    width: '80%',
    height: '80%',
    //margin: 5,
    backgroundColor:'hsl(155, 30%, 100%)'
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
