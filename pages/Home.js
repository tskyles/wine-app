import React from 'react';
import {Text, View, Button} from 'react-native';
import {Header, Container} from '../components';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>WineBrary</Header>
        <Text style={{color: 'white'}}>HomePage!</Text>
        <Button
          title="Log Out"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </Container>
    );
  }
}
