import React, { Component } from 'react';
import { styles } from './styles';
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';

export default class Example extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }
  showInterstitial() {
    AdMobInterstitial.showAd().catch((e) => console.warn(e));
  }

  render() {
    const background = require('./img/menu.png');
    const startButton = require('./img/start.png');
    return (
      <>
        <SafeAreaView />
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
          ref={(el) => (this._smartBannerExample = el)}
        />
        <View style={styles.container}>
          <ImageBackground source={background} style={styles.bg} />
          <Text style={styles.text}>Lava Pit</Text>
          <TouchableOpacity style={styles.button}>
            <Image source={startButton} style={styles.button} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
