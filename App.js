import React,{Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Sound from "./components/Sounds" 
import{Audio} from "expo-av"
import Appheader from "./components/Appheader"



export default class App extends Component {
PlaySound=async(sounduri)=>{
 await Audio.Sound.createAsync({
    uri:sounduri

  },
  {shouldPlay:true}
  )

  

}
  render(){

 
  return (


    <View >
      <Appheader>
    </Appheader>

     <TouchableOpacity onPress={()=>{
       this.PlaySound("http://soundbible.com/grab.php?id=557&type=mp3")
     }} style={{marginLeft:80,margin:2,
     
     borderWidth:0,
     borderColor:"blue",
     alignItems:"center",justifyContent:"center",width:200,height:90,backgroundColor:"blue",borderRadius:80
     }}>
     <Text style={{fontWeight:"bold",color:"white",fontSize:25}}>

    Sound1
    </ Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={()=>{
         this.PlaySound("http://soundbible.com/grab.php?id=2026&type=mp3")
       }} style={{marginLeft:80,margin:25,
     borderWidth:0,
     borderColor:"blue",
     alignItems:"center",justifyContent:"center",width:200,height:90,backgroundColor:"red",borderRadius:80,
     }}>
     <View>
     <Text style={{fontWeight:"bold",color:"white",fontSize:25}}>
     Sound 2
     </Text>
     </View>
    </ TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.PlaySound("http://soundbible.com/grab.php?id=77&type=mp3")
      }} style={{marginLeft:80,
     borderWidth:0,
     borderColor:"blue",
     alignItems:"center",justifyContent:"center",width:200,height:90,backgroundColor:"black",borderRadius:80,
     }}>
     <View>
     <Text style={{fontWeight:"bold",color:"white",fontSize:25}}>
     Sound 3
     </Text>
     </View>
    </ TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.PlaySound("http://soundbible.com/grab.php?id=1917&type=mp3")
      }} style={{marginLeft:80,margin:20,
     borderWidth:0,
     borderColor:"blue",
     alignItems:"center",justifyContent:"center",width:200,height:90,backgroundColor:"purple",borderRadius:80,
     }}>
     <View>
     <Text style={{fontWeight:"bold",color:"white",fontSize:25}}>
     Sound 4 
     </Text>
     </View>
    </ TouchableOpacity>
      <TouchableOpacity onPress={()=>{
       
        Audio.setIsEnabledAsync(false);
      }} style={{marginLeft:80,
     borderWidth:0,
     borderColor:"blue",
     alignItems:"center",justifyContent:"center",width:200,height:90,backgroundColor:"green",borderRadius:80,
     }}>
     <View>
     <Text style={{fontWeight:"bold",color:"white",fontSize:25}}>
     Stop Sound
     
     </Text>
     
     </View>

     
    </ TouchableOpacity>


  
    </View>
    
  );}
}

