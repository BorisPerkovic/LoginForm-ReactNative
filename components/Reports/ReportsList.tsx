import React from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import { ReportsCard } from '../UI/ReportsCard';
import { useReportsQuery } from '../../services/reportsAPI';

import Colors from '../../constants/colors';

export const ReportsList = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useReportsQuery();

  return (
    <>
      {isLoading && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
      )}
      {error && <Text>Something went wrong!</Text>}
      {isSuccess && !isFetching && (
        <FlatList
          data={data}
          renderItem={itemData => (
            <ReportsCard
              candidateName={itemData.item.candidateName}
              companyName={itemData.item.companyName}
              companyImage={itemData.item.companyImage}
              interviewDate={itemData.item.interviewDate}
              status={itemData.item.status}
              phase={itemData.item.phase}
              notes={itemData.item.note}
            />
          )}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={30}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.title}>REPORTS</Text>
            </View>
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
    marginVertical: 15,
  },
});
