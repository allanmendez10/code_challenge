import Rank from 'models/modules/Rank.interface';
import React, { ReactElement} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

interface Props {
  rank?:Rank
  onPress:any
}

const RankComponent = ({rank, onPress}:Props):ReactElement<Props> => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
    
        <Text style={styles.textFields}>{`Division ${rank?.division}`}</Text>
        <Text style={styles.phone}>{`Played ${rank?.played}`}</Text> 

    </TouchableOpacity>
  );
};

export default RankComponent;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    marginBottom: 20,
    padding:10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fafafa',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
