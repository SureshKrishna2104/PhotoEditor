import React, {useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {Emboss} from 'react-native-image-filter-kit';
import ImageSelector from './src/screens/ImageSelecter';
import EditImage from './src/screens/EditImage';
import RootNavigator from './src/navigation';

const App = () => {
  const [image, setImage] = useState(null);

  // return <ImageSelector  />;
  //  return <RootNavigator/>

  return <RootNavigator />;
};
export default App;
const styles = {
  image: {
    width: 320,
    height: 320,
    marginVertical: 10,
    alignSelf: 'center',
  },
};
