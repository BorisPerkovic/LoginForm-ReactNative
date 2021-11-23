import React, { FunctionComponent } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Colors from '../../constants/colors';

interface ElipsisProps {
  onPressIcon: () => void;
}

export const Menu: FunctionComponent<ElipsisProps> = ({ onPressIcon }) => {
  return (
    <View style={styles.svg}>
      <Pressable onPress={onPressIcon}>
        <Svg width={40} height={30} viewBox={'5 0 50 50'}>
          <Path
            d="M11.214 20.956c0 3.091-2.509 5.589-5.607 5.589C2.51 26.544 0 24.046 0 20.956c0-3.082 2.511-5.585 5.607-5.585 3.098 0 5.607 2.503 5.607 5.585zM26.564 20.956c0 3.091-2.509 5.589-5.606 5.589s-5.607-2.498-5.607-5.589c0-3.082 2.511-5.585 5.607-5.585 3.098 0 5.606 2.503 5.606 5.585zM41.915 20.956c0 3.091-2.509 5.589-5.607 5.589-3.097 0-5.606-2.498-5.606-5.589 0-3.082 2.511-5.585 5.606-5.585 3.098 0 5.607 2.503 5.607 5.585z"
            fill={Colors.textColor}
            fillRule="evenodd"
          />
        </Svg>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
