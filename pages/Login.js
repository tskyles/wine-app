import React from 'react';
import {Text, View, Button} from 'react-native';
import {Header, Container} from '../components';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>WineBrary</Header>
        <View>
          <Text style={{color: 'white'}}>Hello World</Text>
          <Button
            title="Log In"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </Container>
    );
  }
}
