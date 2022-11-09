import Rank from 'models/modules/Rank.interface';
import React, { ReactElement} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import State from 'models/State.interface';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {
  rank?:Rank
}

const RankDetailComponent = ({rank}:Props):ReactElement<Props> => {
    
    const currentRank = useSelector((state:State) => state.ranks.currentRank);
  
    return (
    <View  style={styles.container}>
    
        <Text style={styles.textFields}>{`Division: ${currentRank?.division}`}</Text>
        <Text style={styles.played}>{`Played: ${currentRank?.played}`}</Text>

        <View style={{flexDirection:'row', height: 50, marginRight:10 }}>
        <Text style={styles.rankLabel}>{"Rank:"}</Text>
        <Text style={styles.rankValue}>{currentRank?.rank}</Text>

        </View>    

    </View>
  );
};

export default RankDetailComponent;

const styles = StyleSheet.create({
  container: {
    padding:10,
  },
  list: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textFields: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 10,
    width: '100%',
    fontSize: 17,
  },  played: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 10,
    width: '100%',
    fontSize: 17,
  },
  rankLabel: {
    color: 'black',
    textAlign: "left",
    marginTop: 10,
    marginLeft:5,
    fontSize: 17,
    fontWeight:"bold"

  }, rankValue: {
    color: 'black',
    marginTop: 10,
    marginRight:10,
    width: '50%',
    fontSize: 17,
  },
  image: {
    width: '100%',
    height: '75%',
    marginBottom: 15,
  }
});
