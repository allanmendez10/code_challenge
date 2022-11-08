import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator  from './StackNavigator';

const RootNavigator = (): ReactElement => {

  //const reduxLoaded = useSelector((state:State) => state.user.is_logged);

  return (
    <NavigationContainer>
      
      <StackNavigator />
    
    </NavigationContainer>
  );
}

export default RootNavigator;
