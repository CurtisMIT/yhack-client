import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator'
import styles from './styles';
import Toolbar from './Toolbar'
import Gallery from './Gallery'
import Expanded from './Expanded'
import Deals from './Deals'


export default class CameraPage extends React.Component {
  state = {
    hasCameraPermission: null,
    captures: [],
    cameraType: Camera.Constants.Type.back,
    expand: false,
    loading: false,
    dealTime: false,
    name: ''
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  setCameraType = (cameraType) => this.setState({ cameraType })

  handleShortCapture = async () => {
    this.setState({
      loading: true
    })
    console.log("HANDLE SHORT CAPTURE");
    let photoData = await this.camera.takePictureAsync();
    let resizedPhoto = await ImageManipulator.manipulateAsync(photoData.uri, [{resize: {width: 300}}], {compress: 0, format: "png", base64: true});
    this.handleUpload(resizedPhoto);
    // console.log(photoData.uri)
    // this.getMoviesFromApi()
  }

  // getMoviesFromApi = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://facebook.github.io/react-native/movies.json',
  //     );
  //     let responseJson = await response.json();
  //     return responseJson.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  handleUpload = async (data) => {
    console.log("next step");
    try {
      const res = await fetch('http://006f8787.ngrok.io/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          base64Str: data.base64,
        })
      });
      // console.log("GOT RESPONSE!");
      // console.log(res);

      const { labels } = await res.json()
      // console.log(labels);
      // let max = labels.reduce(function(a, b) {
      //   console.log(a.topicality)
      //   return Math.max(a.topicality, b.topicality)
      // })
      // console.log('HERE IS MAX: ' + max)
      const success = res.status == 201
      if (success) {
        this.setState({ dealTime: true, loading: false, captures: [data, ...this.state.captures] });
      } else {
        this.setState({ loading: false })
      }

    } catch (err) {
      console.error(err)
    }
  }

  cameraToggle = () => {
    this.setState( prevState => {
      return {
        dealTime: !prevState.dealTime
      }
    })
  }

  albumToggle = () => {
    this.setState((prevState) => {
      return {
        expand: !prevState.expand
      }
    })
  }

  render() {
    const { hasCameraPermission, cameraType, captures } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <React.Fragment>
            { this.state.dealTime ? <Deals name={this.state.name} cameraToggle={this.cameraToggle}/> : this.state.expand ? (
              <Expanded captures={captures} albumToggle={this.albumToggle}/>
            ) : (
              <React.Fragment>
                { this.state.loading && <ActivityIndicator size="large" color="#0000ff" />}
                <View style={{ flex: 1 }}>
                  <Camera 
                      style={styles.preview} 
                      type={this.state.cameraType}
                      ref = { ref => {
                          this.camera = ref
                      }}
                  />
                </View>
                {captures.length > 0 && <Gallery captures={captures}/>}
                <Toolbar 
                  cameraType={cameraType}
                  setCameraType={this.setCameraType}
                  onShortCapture={this.handleShortCapture}
                  albumToggle={this.albumToggle}
                />
              </React.Fragment>
            )}
            
        </React.Fragment>
      );
    }
  }
}