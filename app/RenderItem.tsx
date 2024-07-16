// RenderItem.js
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';

const Wwidth = Dimensions.get('window').width;
const Wheight = Dimensions.get('window').height;
const ITEM_LENGTH = (Wwidth * 0.6);
const EMPTY_ITEM_LENGTH = (Wwidth - ITEM_LENGTH) / 2;

const AnimatedImage = Animated.createAnimatedComponent(Image);

const RenderItem = ({ item, index, offset }) => {
    if (!item.img) {
        return <View style={{ width: EMPTY_ITEM_LENGTH, height: 20, }} />;
    }

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            offset.value,
            [(index - 2) * ITEM_LENGTH,
            (index - 1) * ITEM_LENGTH,
            index * ITEM_LENGTH,],
            [0.3, 1, 0.3],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );
        return {
            transform: [{ scale }],
        };
    });

    return (
        <Animated.View style={[animatedStyle, styles.renderflat]}>
            <BlurView intensity={130} style={styles.blurview}>
                <AnimatedImage style={[styles.renderimage, animatedStyle]} source={item.img}></AnimatedImage>
            </BlurView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    renderflat: {
        height: (Wheight * 0.5) * 0.60,
        width: Wwidth * 0.6,
        overflow: 'hidden',
        marginHorizontal: 0,
        borderRadius: 30,
        borderColor: 'black',
        // borderWidth: 0.5,

    },
    blurview: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
    },
    renderimage: {
        resizeMode: 'contain',
        height: ((Wheight * 0.5) * 0.60) * 0.7,
        width: (Wwidth * 0.6) * 0.7,
    }
});

export default RenderItem;
