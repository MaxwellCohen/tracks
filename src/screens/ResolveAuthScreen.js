import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';


const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(()=> {
    tryLocalSignin();
  }, [])
  return null;
};

ResolveAuthScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({

});

export default ResolveAuthScreen;
