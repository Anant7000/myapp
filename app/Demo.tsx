import React, { useEffect, useRef, useState } from 'react';

import { StyleSheet, View, FlatList, Dimensions, Text, ImageBackground, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Animated, { useSharedValue, useAnimatedScrollHandler, runOnJS, runOnUI, useDerivedValue, useAnimatedProps } from 'react-native-reanimated';
import RenderItem from './RenderItem';
ImageBackground
const Wwidth = Dimensions.get('window').width;
const Wheight = Dimensions.get('window').height;

const DATA = [
    { id: '0' },
    { id: '1', img: require('../assets/proimages/mango.png'), fruitname: 'Alphonso  Mango', Des: 'Mangoes are tropical stone fruits known for their sweet, juicy, and flavorful flesh. They are rich in vitamins A an,d C, making them great for skin health and immune support.' },
    { id: '2', img: require('../assets/proimages/dragon.png'), fruitname: 'Dragon fruit', Des: 'Dragon fruit, also known as pitaya, is a vibrant tropical fruit known for its striking pink or yellow skin and speckled flesh. Its rich in antioxidants and vitamins, particularly vitamin C, and has a mildly sweet flavor' },
    { id: '3', img: require('../assets/proimages/grape.png'), fruitname: 'Graphes', Des: ' Grapes come in various colors such as green, red, and purple and are enjoyed both fresh and as dried raisins. They are a good source of vitamins C and K and are known for their heart-healthy benefits due to their high levels of antioxidants.' },
    { id: '4', img: require('../assets/proimages/kiwi.png'), fruitname: 'Kiwi', Des: 'Kiwis are small, fuzzy fruits with bright green flesh that is both sweet and tangy. They are packed with nutrients, including vitamin C, vitamin K, and potassium, and are known for their digestive health benefits due to their high fiber content.' },
    { id: '5', img: require('../assets/proimages/cherry.png'), fruitname: 'Cherry', Des: 'Cherries are small, round fruits with a juicy, sweet flavor that can be either sweet or tart. They are rich in antioxidants, particularly anthocyanins, which are believed to have anti-inflammatory properties and health benefits.' },
    { id: '6', img: require('../assets/proimages/mulbery.png'), fruitname: 'Morus', Des: 'Morus, commonly known as mulberry, is a genus of flowering plants in the family Moraceae. Mulberries are known for their sweet fruit, which can be red, black, or white, and are rich in vitamins and antioxidants.' },
    { id: '7' },
];

const ITEM_LENGTH = Wwidth * 0.6;
const EMPTY_ITEM_LENGTH = (Wwidth - ITEM_LENGTH) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const AnimatedText = Animated.createAnimatedComponent(Text);


const Demo = () => {
    const offset = useSharedValue(0);
    const currentIndex = useSharedValue(1);
    const [currentDescription, setCurrentDescription] = useState(DATA[1].Des);
    const [currentName, setCurrentName] = useState(DATA[1].fruitname);

    const scrollHandler = useAnimatedScrollHandler((event) => {

        offset.value = event.contentOffset.x;


    });
    const handleScrollEnd = () => {

        setTimeout(() => {
            const index = Math.round(offset.value / ITEM_LENGTH);
            if (index >= 0 && index < 7) {
                runOnJS(setCurrentDescription)(DATA[index + 1].Des);
                runOnJS(setCurrentName)(DATA[index + 1].fruitname);
            }
        }, 500);

    }



    return (
        <View style={{ flex: 1 }}>
            {/* colors={['#F469F9', '#F89E00', '#57F57F', '#57E3F5']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            // locations={[0, 0.5, 0.8]} */}
            <ImageBackground
                blurRadius={5}
                source={require('../assets/images/img5.jpeg')}
                style={styles.mainview}
            >
                <View style={styles.flatlistview}>

                    <AnimatedFlatList
                        contentContainerStyle={styles.flalist1}
                        horizontal={true}
                        data={DATA}
                        renderItem={({ item, index }) => (
                            <RenderItem item={item} index={index} offset={offset} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        onScroll={scrollHandler}
                        onScrollEndDrag={handleScrollEnd}
                        scrollEventThrottle={16}
                        snapToInterval={ITEM_LENGTH}
                        // bounces={false}
                        decelerationRate={1}
                        pagingEnabled
                        renderToHardwareTextureAndroid
                    />

                </View>


                <BlurView intensity={130} style={styles.textView}>
                    <Text style={styles.fruitnamestyle}>{currentName}</Text>
                    <Text key={currentDescription} style={styles.textStyle}>
                        {currentDescription}
                    </Text>

                </BlurView>

            </ImageBackground>


        </View>
    );
};

export default Demo;

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        resizeMode: 'cover'
    },
    flatlistview: {
        height: "50%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    flalist1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    textView: {
        height: "40%",
        width: "90%",
        borderRadius: 30,



        paddingHorizontal: 15,
        overflow: 'hidden',

    },
    fruitnamestyle: {
        fontSize: 21,
        marginVertical: 10,
        fontWeight: '700'
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});
