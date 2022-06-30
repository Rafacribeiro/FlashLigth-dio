import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [Toggle, setToggle] = useState(false);
  const handleChangeToggle = () =>  setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(Toggle)
  }, [Toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    })

    return () => subscription.remove();
  }, [])

  return (
    <View styles={Toggle ? styles.containerLigth : styles.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          styles={Toggle ? styles.lightOn : styles.lightOff}
          source={
            Toggle
              ? require('./assets/icons/eco-light-off.png')
              : require('./assets/icons/eco-light.png')
          }
        />
        <Image
          styles={styles.dioLogo}
          source={
            Toggle
              ? require('./assets/icons/logo-dio-white.png')
              : require('./assets/icons/logo-dio.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLigth: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightOn: {
    realizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff: {
    realizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    realizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,
  },
});

export default App;
