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
    console.log("RankDetailComponent",currentRank)
  return (
    <View  style={styles.container}>
    
        <Text style={styles.textFields}>{`Division ${currentRank?.division}`}</Text>
        <Text style={styles.phone}>{`Played ${currentRank?.played}`}</Text>

        <View style={{flexDirection:'row', height: 50, justifyContent: "space-between", marginRight:10 }}>
        <Text style={styles.orderState}>{"Rank"}</Text>
        <Text style={styles.date}>{rank?.rank}</Text>

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
    fontWeight:"bold"
  },  phone: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 10,
    width: '100%',
    fontSize: 17,
  },
  orderState: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 5,
    width: '50%',
    fontSize: 17,
    backgroundColor:'green',
    padding:10
  }, date: {
    color: 'black',
    textAlign: "right",
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
