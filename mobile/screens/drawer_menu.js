import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, ScrollView, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Expo, { Permissions, Notifications } from 'expo';
import firebase from 'firebase';
import * as Actions from '../../redux/actions';
import Container from '../../components/Container';
import Button from '../../components/Button';
import config from '../../config/config';
import AppStyles from '../../styles/AppStyles.js';
import LoginStyles from '../../styles/LoginStyles.js';
import SideMenu from 'react-native-side-menu';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkIfLoggedIn: () => {
      dispatch(Actions.checkUserLogin());
    },
    updateUser: userData => {
      dispatch(Actions.updateUser(userData));
    },
  };
};

class DrawerMenu extends React.Component {
  reder() {
    const menu = (
      <View>
        <Text>{this.props.user.displayName}</Text>
      </View>
    );
    return <SideMenu menu={menu}>{this.props.children}</SideMenu>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
