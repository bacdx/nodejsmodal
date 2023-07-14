import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Pressable } from 'react-native';


const Data=[
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <Image
      style={[imagesStyle,{marginRight:20}]}
      source={{
        uri:"https://tse2.mm.bing.net/th?id=OIP.akz0hTxRH7ofWzOzjjH3zQHaDn&pid=Api&P=0&h=180"
      }}
      ></Image>

      <Image
      style={imagesStyle}
      source={
        require("../firstapp/img/ai.jpg")
      }
      ></Image>
      </View>
      
      <Pressable
      onPress={null}
      style={styles.button}>
         <Text>Next</Text>
      </Pressable>
     
      {/* <FlatList
      data={Data}
      renderItems={renderItems}
      keyExtractor={item => item.id}
      extraData={selectedId}
      ></FlatList> */}
      
      <StatusBar style="auto"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontStyle: 'italic',
    fontSize: 40,
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column"
    //alignItems and justifyContent sẽ căn theo flexDirection
    
  
  },
  button:{
    alignItems: 'center',
    minWidth:100,
    backgroundColor:"#2196F3",
    padding:10,
    margin:20,
  borderRadius:10,
  borderWidth:1,
  borderColor:'#2196F3'
  }
});

const imagesStyle = StyleSheet.create({
  
  width: 100, height:100,
  borderRadius:10,
  borderWidth:1,
  borderColor:'#2196F3'
});
