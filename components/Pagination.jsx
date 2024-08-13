import { StyleSheet, Animated, View, Dimensions } from 'react-native'
import React from 'react'


const {width} = Dimensions.get('screen')

const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
        {
            data.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate:'clamp'
                })
                const backgroundColor = scrollX.interpolate({
                  inputRange,
                  outputRange: ["#00968888", "#009688", "#00968888"],
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    key={idx.toString()}
                    style={[
                      styles.dot,
                      { width: dotWidth, backgroundColor },
                    //   idx === index && styles.dotActive,
                    ]}
                  />
                );
            })
        }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    // bottom: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00968888",
    marginHorizontal: 3,
  },
  dotActive:{
    backgroundColor: "#009688"
  }
});