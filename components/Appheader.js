import React,{Component} from "react"
import{View,Text} from "react-native"

export default class AppHeader extends Component{
  render(){
    return(
     < View style={{
       backgroundColor:"yellow",padding:0,alignSelf:"center",flex:80,marginTop:0
     }}>
     
     <Text style={{
    fontSize:45
     }}>
     Techno Dj
     </Text>
     
     </ View>
    )
  }
}