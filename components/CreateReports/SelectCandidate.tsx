import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { FunctionComponent } from 'react';

import Colors from '../../constants/colors';

interface SelectCandidateProps {
  position: number;
  candidates: any;
  newReport: {};
  setPosition: (param: number) => void;
  setNewReport: (params: any) => void;
}

export const SelectCandidate: FunctionComponent<SelectCandidateProps> = ({
  position,
  candidates,
  newReport,
  setPosition,
  setNewReport,
}) => {
  return (
    <View>
      <FlatList
        data={candidates}
        renderItem={itemData => (
          <Pressable
            onPress={() => {
              setPosition(position + 1);
              setNewReport({
                ...newReport,
                candidateId: itemData.item.id,
                candidateName: itemData.item.name,
              });
            }}
            style={styles.listContainer}>
            <Image
              source={{ uri: itemData.item.avatar }}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ color: Colors.textColor }}>
              {itemData.item.name}
            </Text>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: Colors.primaryColor,
  },
});
