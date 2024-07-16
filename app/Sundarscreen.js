import { FlatList, StyleSheet, Text, View, Image, Dimensions, PanResponder, Animated, ImageBackground, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'

const windowWidth = Dimensions.get('window').width;
const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd137e.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];
const Sundarscreen = () => {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden></StatusBar>

            <View style={[StyleSheet.absoluteFillObject,]}>
                {data.map((item, index) => {
                    const opacity = scrollX.interpolate({
                        inputRange: [
                            (index - 1) * windowWidth,
                            index * windowWidth,
                            (index + 1) * windowWidth
                        ],
                        outputRange: [0, 1, 0],
                    })
                    return <Animated.Image key={index} style={[StyleSheet.absoluteFillObject, { opacity }]} source={{ uri: item }} blurRadius={10}></Animated.Image>

                })}

            </View>




            <Animated.FlatList
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )
                }
                style={{}}

                horizontal
                data={data}


                renderItem={({ item, index }) => {


                    return (
                        <View style={{ width: windowWidth, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={{ uri: item }} style={[styles.image,]} />
                        </View>
                    )
                }}

                pagingEnabled
                // snapToInterval={windowWidth}
                keyExtractor={(item, index) => index.toString()}
            />


        </View >
    );
}

export default Sundarscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
    },
    image: {
        borderRadius: 15,
        resizeMode: 'cover',
        width: windowWidth - 100,
        height: windowWidth - 100,
        // marginLeft: (100)/2,
        // marginRight: (100)/2,
    },
})