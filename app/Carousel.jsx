import { Animated, FlatList,  StyleSheet,  View } from "react-native";
import React, { useRef, useState } from "react";
import Slides from "../data";
import SlideItem from "../components/SlideItem";
import Pagination from "../components/Pagination";

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = event => {
        Animated.event([
            {
                nativeEvent:{
                    contentOffset:{
                        x: scrollX
                    }
                }
            }
        ], {
            useNativeDriver: false
        },)(event);
    };


    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    }).current

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        // onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        // screenOptions={{ headerShown: false }}
        // option={{headerShown: false}}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} style={styles.pagination} />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  // pagination:{
  //   marginTop: -50
  // }
});
