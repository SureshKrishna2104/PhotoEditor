// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { FILTERS } from './Filter'

// const EditImage = () => {
//   return (
//     <View>
//       <Text>EditImage</Text>
//     </View>
//   )
// }

// export default EditImage

// const styles = StyleSheet.create({})

import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from 'react-native';

import {FILTERS} from './Filter';
const EditImage = ({route, props,navigation}) => {
  const productId = route.params.image1;
  const [editImage, setEditImage] = useState(route.params.image1);
  const extractedUri = useRef(productId);
  const [selectedFilterIndex, setIndex] = useState(0);

  const onExtractImage = ({nativeEvent}) => {
    extractedUri.current = nativeEvent.uri;
    setEditImage(nativeEvent.uri);
  };

  const onSelectFilter = selectedIndex => {
    setIndex(selectedIndex);
  };

  const renderFilterComponent = ({item, index}) => {
    //console.log(item, index);
    const FilterComponent = item.filterComponent;
    // console.log(FilterComponent,"oio");
    const image = (
      <Image
        style={styles.filterSelector}
        source={{
          uri: productId,
        }}
        resizeMode={'contain'}
      />
    );

    return (
      <TouchableOpacity onPress={() => onSelectFilter(index)}>
        <Text style={styles.filterTitle}>{item.title}</Text>
        <FilterComponent image={image} />
      </TouchableOpacity>
    );
  };

  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;
  //  console.log(editImage,"edit")
  return (
    <ScrollView>
      <TouchableOpacity
        style={{
          height: '6%',
          width: '30%',
          backgroundColor: 'red',
          marginLeft: '65%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop: 5,
        }}
        onPress={() => {
          navigation.navigate('FinalImage', {
            image1:{"path":editImage}
          });
        }}>
        <Text style={{fontSize: 18, color: '#fff'}}>Save</Text>
      </TouchableOpacity>

      {selectedFilterIndex === 0 ? (
        <Image
          style={styles.image}
          source={{uri: productId}}
          resizeMode={'contain'}
        />
      ) : (
        <SelectedFilterComponent
          onExtractImage={onExtractImage}
          extractImageEnabled={true}
          image={
            <Image
              style={styles.image}
              source={{uri: productId}}
              resizeMode={'contain'}
            />
          }
        />
      )}

      <FlatList
        data={FILTERS}
        keyExtractor={item => item.title}
        horizontal={true}
        renderItem={renderFilterComponent}
      />
    </ScrollView>
  );
};
export default EditImage;
const styles = StyleSheet.create({
  image: {
    width: 520,
    height: 520,
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    width: 100,
    height: 100,
    margin: 5,
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
