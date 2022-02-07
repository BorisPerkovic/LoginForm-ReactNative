import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';
import Colors from '../../constants/colors';
import { useCandidateReportsQuery } from '../../services/reportsAPI';
import { CandidateReportsCard } from '../UI/CandidatesReportsCard';

export const CandidateReportsList = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'CandReports'>>();
  const { data, error, isFetching, isSuccess } = useCandidateReportsQuery(
    params.candidateId,
  );

  return (
    <>
      {isFetching && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
      )}
      {error && (
        // eslint-disable-next-line react-native/no-inline-styles
        <Text style={{ textAlign: 'center' }}>Something went wrong!</Text>
      )}
      {isSuccess && !isFetching && (
        <FlatList
          data={data}
          renderItem={itemData => (
            <CandidateReportsCard
              candidateName={params.name}
              companyName={itemData.item.companyName}
              title="report details"
              interviewDate={itemData.item.interviewDate}
              status={itemData.item.status}
              phase={itemData.item.phase}
              notes={itemData.item.note}
            />
          )}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={20}
          ListHeaderComponent={() => (
            <View>
              <Image
                source={{ uri: params.avatatar_url }}
                style={styles.image}
              />
              <Text style={styles.title}>{params.name}</Text>
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
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
  },
});
