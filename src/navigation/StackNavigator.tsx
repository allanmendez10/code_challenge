import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RankComponent from '../components/Ranks/rankDetail';
import ListComponent from '../components/Ranks';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import State from '../models/State.interface';
import LoginComponent from '../components/Login';

import Icon from 'react-native-vector-icons/Ionicons';
import {setIsLoggedRedux} from '../store/actions/Login';

const Stack = createStackNavigator();

export default function PostNavigator() {

  const reduxLoaded = useSelector((state:State) => state.user.loggedIn);
  const dispatch = useDispatch();


  return (
    <Stack.Navigator
      initialRouteName="drawer"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff41ff',
        },  
        headerRightContainerStyle:{
          marginRight:10
        },    
        headerRight : () => (
            <Icon onPress = { ()=>{dispatch(setIsLoggedRedux(false))}} name="log-out" color={"white"} size={26} /> ),   
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
       {reduxLoaded?(
         <>
      <Stack.Screen name="MainContainer" component={ListComponent} options={{
          title: 'Rocket League Ranks'}} />

            <Stack.Screen name="RankContainer" component={RankComponent} options={{ title: 'Rank Detail'}}/> 
       </>
       ):(   
         <>   
       <Stack.Screen name="Login" component={LoginComponent} options={{headerShown: false}} /> 
      </>
       )}

    </Stack.Navigator>
  );
}

