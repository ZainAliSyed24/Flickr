import React,{useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import { User } from './interfaces';
import axios, {AxiosResponse} from 'axios';
import { url } from 'inspector';
import FastImage from 'react-native-fast-image';
import ButtonView from './src/reuseableComponents/ButtonView';
import { createRef } from 'react';


const App: React.FC = () => {

  const [searchText, setSearchText] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [userData, setUserData] = useState<User[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [searchListData, setSearchListData] = useState<any[]>([]);

  const myRef = React.useRef<any>(null)



  const fetchUser = async () =>{
    const {data} = await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=11c40ef31e4961acf4f98c8ff4e945d7&format=json&nojsoncallback=1&text=kittens');
    setUserData(data.photos.photo);
    // console.log('kia he ', data.photos.photo)
  }

  useEffect(() => {
    fetchUser();
  },[]);

  
  const updateSearch = (searchText) => {
    setSearchText( searchText );
  };

  const YourImage = ({farm, title, id, server, secret}) => {
    // console.log("YourImage", item)
    return(
      <FastImage
          source={{
            uri: `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg}`,
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
          }}
          style={styles.imgs}
      />
    )
  };

  const renderItem = ({ item }) => { 
    // console.log("item.photos i photo ya nahi", item)

    return(
      <View style={styles.check3}>
        {YourImage(item)}
        <Text>{item.title.length <= 20 ? item.title : item.title.slice(0, 20)}</Text>
      </View>
    )
  };

  const renderSearchList = ({ item }) => { 
    // console.log("item.photos i photo ya nahi kuch", item)
    return(
      <ButtonView
        onPress={() => {
          setSearchText(item)
          setSearch(item)
        }}
      >
        <Text style={{paddingVertical: 5}}>{item}</Text>
      </ButtonView>
    )
  };

  return (
    <View style={styles.check}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          ref={myRef}
          placeholder="Search Here..."
          value={searchText}
          onChangeText={updateSearch}
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          onFocus={() => setShowList(true)}
          // onBlur={() => setShowList(false)}
        />
        <ButtonView
          style={styles.btnStyle}
          onPress={() => {
            setSearchText('')
            setSearch("")
            setShowList(false)
          }}>
          <Text>X</Text>
        </ButtonView>
        <ButtonView
          style={styles.btnStyle1}
          onPress={() => {
            console.log("myRef", myRef)
            setSearch(searchText)
            setShowList(false)
            if(searchText.trim() != "" && !searchListData.includes(searchText)){
              
              setSearchListData([...searchListData, searchText])
            }
            }}>
          <Text>Ok</Text>
        </ButtonView>
      </View>
      {showList ? <View style={{paddingVertical: 5, marginBottom: 20, paddingHorizontal: 10, width: '100%',borderWidth: 1}}>
        <FlatList 
          data={searchListData}
          renderItem={renderSearchList}
          keyExtractor={item => item.id}
        />
      </View> : null}

      <FlatList
        // data={userData.map((item) => item.title.toLowerCase() == search.toLowerCase() ? item : userData)}
        data={search.length > 0 ? userData.filter(({title}) => title.toLowerCase().includes(search.toLowerCase())) : userData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.check2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormTextInput: {
    height: 50,
    fontSize: 14,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    width: '75%'
  },
  check:{
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  check3: {
    width: "50%",
    paddingHorizontal: 5,
    marginVertical: 5,
  },

  check2:{
    marginBottom: "auto",
  },
  imgs:{
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
  btnStyle:{
    height: 50,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    marginTop: 5,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 40,
    borderRightWidth: 0,
  },
  btnStyle1:{
    height: 50,
    fontSize: 14,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 40,
  }
});

export default App;