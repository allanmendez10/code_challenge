import React, {ReactElement, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getRanks, setCurrentOrderRedux, setCurrentRankRedux} from '../../store/actions/Rank';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo
} from 'react-native';
import State from 'models/State.interface';
import Rank from 'models/modules/Rank.interface';
import RankComponet from './rank';

const MainContainer = (): ReactElement => {
  const dispatch = useDispatch();

  const reduxRanks = useSelector((state:State) => state.ranks.ranks);
  const reduxLoaded = useSelector((state:State) => state.ranks.loaded);
  const navigation = useNavigation();

  // Simulando el componentDidMount
  useEffect(() => {
    dispatch(getRanks() as any);
  }, [getRanks, dispatch]);

  const goToRankDetail = (rank:Rank) => {

    console.log(rank)
    dispatch(setCurrentRankRedux(rank));
    navigation.navigate('RankContainer');

  }

  return (
    <SafeAreaView style={styles.container}>
      {reduxLoaded ? (
        <>
     
               <FlatList
        data={reduxRanks}
        renderItem={({ item }: ListRenderItemInfo<Rank>) => (
          <RankComponet  onPress={() => {goToRankDetail(item)}} rank={item} />
        )}        keyExtractor={item => item.mmr}
      />
        </>
      ) : (
        <ActivityIndicator
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  footer: {
    width: '100%',
    backgroundColor: '#2E99F7',
    padding: 20,
    alignItems: 'center',
    marginBottom: 3
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
  scrollView: {
    height: '10%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

export default MainContainer;
