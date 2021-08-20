import React, {Component} from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      datapost: [],
    };
  }
  getDAta = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => this.setState({data: json}, console.log(json)))
      .catch(err => console.log(err));
  };

  postData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: 'Rama',
        kelas: 12,
      }),
    })
      .then(response => response.json())
      .then(json => this.setState({datapost: json}, console.log(json)))
      .catch(err => console.log(err));   

  };
  

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.getDAta()}>
          <Text>Dapatkan data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.postData()}>
          <Text>Kirimkan Data Baru</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>p
            </View>
          )}
        />
      </View>
    );
  }
}

export default App;
