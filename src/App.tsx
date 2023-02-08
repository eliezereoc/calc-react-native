import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Button from './components/Button';
import Display from './components/Display';

export default class App extends Component {
  state = {
    displayValue: '0',
  };

  addDigit = (n: number) => {
    this.setState({displayValue: n});
  };

  clearMemory = () => {
    this.setState({displayValue: '0'});
  };

  setOparation = (operation: string) => {};

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory}></Button>
          <Button label="/" operation onClick={this.setOparation}></Button>
          <Button label="7" onClick={this.addDigit}></Button>
          <Button label="8" onClick={this.addDigit}></Button>
          <Button label="9" onClick={this.addDigit}></Button>
          <Button label="*" operation onClick={this.setOparation}></Button>
          <Button label="4" onClick={this.addDigit}></Button>
          <Button label="5" onClick={this.addDigit}></Button>
          <Button label="6" onClick={this.addDigit}></Button>
          <Button label="-" operation onClick={this.setOparation}></Button>
          <Button label="1" onClick={this.addDigit}></Button>
          <Button label="2" onClick={this.addDigit}></Button>
          <Button label="3" onClick={this.addDigit}></Button>
          <Button label="+" operation onClick={this.setOparation}></Button>
          <Button label="0" double onClick={this.addDigit}></Button>
          <Button label="." onClick={this.addDigit}></Button>
          <Button label="=" operation onClick={this.setOparation}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
