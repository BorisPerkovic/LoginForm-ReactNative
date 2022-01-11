import React, { FunctionComponent, useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import Colors from '../../constants/colors';

interface Props {
  technologies: string[];
}

export const AccountCarousel: FunctionComponent<Props> = ({ technologies }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View style={styles.carouselContainer}>
      <View>
        <FlatList
          data={technologies}
          renderItem={itemData => (
            <Image
              style={[styles.carouselImage, { width: windowWidth - 80 }]}
              source={{ uri: itemData.item }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          onViewableItemsChanged={onFlatlistUpdate}
        />
      </View>

      <View style={styles.dotContainer}>
        {technologies.map((image: string, index: number) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex ? Colors.primaryColor : 'white',
              },
            ]}
            key={index}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
  carouselImage: {
    backgroundColor: 'blue',
    height: 170,
    marginHorizontal: 40,
  },
  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    marginHorizontal: 5,
  },
});
