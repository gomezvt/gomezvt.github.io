import React, {Component} from 'react';
import {styles} from './styles';
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'react-native-admob';
import GameScene from './src/GameScene';
import {GameEngine, GameLoop} from 'react-native-game-engine';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      didStart: false,
    };
  }

  componentDidMount = () => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
  };

  componentWillUnmount = () => {
    AdMobInterstitial.removeAllListeners();
  };

  showInterstitial = () => {
    AdMobInterstitial.showAd().catch((e) => console.warn(e));
  };

  displayMenu = () => {
    const background = require('./img/menu.png');
    const startButton = require('./img/start.png');
    return (
      <>
        <ImageBackground source={background} style={styles.bg} />
        <Text style={styles.text}>Lava Pit</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setStartState(true)}>
          <Image source={startButton} style={styles.button} />
        </TouchableOpacity>
      </>
    );
  };

  setStartState = (didStart) => {
    this.setState({didStart: didStart});
  };

  render() {
    return (
      <>
        <SafeAreaView />
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
          ref={(el) => (this._smartBannerExample = el)}
        />
        <View style={styles.container}>
          {this.state.didStart ? (
            <GameScene setStartState={this.setStartState} />
          ) : (
            this.displayMenu()
          )}
        </View>
      </>
    );
  }
}
