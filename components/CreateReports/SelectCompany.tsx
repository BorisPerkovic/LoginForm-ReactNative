import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { FunctionComponent } from 'react';

import Colors from '../../constants/colors';

interface SelectCompanyProps {
  position: number;
  companies: any;
  newReport: any;
  setPosition: (param: number) => void;
  setNewReport: (params: any) => void;
}

export const SelectCompany: FunctionComponent<SelectCompanyProps> = ({
  position,
  companies,
  newReport,
  setPosition,
  setNewReport,
}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
      <View style={styles.selectedItems}>
        <Text style={styles.selectedItemstext}>
          Selected Candidate: {newReport.candidateName}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={() => setPosition(position - 1)}
          color={Colors.primaryColor}
        />
      </View>
      <FlatList
        data={companies}
        renderItem={itemData => (
          <Pressable
            onPress={() => {
              setPosition(position + 1);
              setNewReport({
                ...newReport,
                companyId: itemData.item.id,
                companyName: itemData.item.name,
                company_img: itemData.item.company_img,
              });
            }}
            style={styles.listContainer}>
            <Image
              source={{ uri: itemData.item.company_img }}
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
    flex: 1,
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
  selectedItems: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItemstext: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
});
