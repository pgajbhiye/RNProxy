
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  const [data, setData] = useState("No Result");

  const makeRequest = async ()=> {
    try{
      let response = await fetch("https://randomuser.me/api/");
      if (response.ok) {
        let json = await response.json();
        console.log("api response ",json.results);
        setData(JSON.stringify(json.results, null, 4));

      } else {
        alert("HTTP-Error: " + response.status);
      }
    } catch (e) {
      alert("HTTP-Error: " + e);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={"Get Random User"} onPress={makeRequest}/>
        <ScrollView style={{marginTop:20, paddingHorizontal :20}}>
          <Text>{data}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
