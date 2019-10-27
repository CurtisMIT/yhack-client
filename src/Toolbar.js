import React from 'react'
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

import styles from './styles'

// const { Type: CameraTypes } = Camera.Constants

export default ({
    capturing = false,
    cameraType = Camera.Constants.Type.back,
    setCameraType,
    onShortCapture,
    albumToggle
}) => (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={albumToggle}>
                    <Ionicons
                        name='md-albums'
                        color='white'
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableOpacity 
                    onPress={onShortCapture}
                >
                    <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal} />}
                    </View>
                </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setCameraType(
                    cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                )}>
                    <Ionicons
                        name='md-reverse-camera'
                        color='white'
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
)