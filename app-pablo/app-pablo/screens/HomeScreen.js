import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
export default class HomeScreen extends Component{
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word  : "Cargando...",
      lexicalCategory :'',
      definition : ""
    };
  }

  render(){
    return(
      <View style={{flex:1, borderWidth:2, backgroundColor: 'cyan'}}>
        <Header
          backgroundColor={'navy'}
          centerComponent={{
            text: 'ComicStro',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
         <Text style={{fontSize:20,marginTop:30, justifyContent: 'center', alignItems: 'center',marginLeft: 125, background: 'white', width: 61}}>Correo</Text>
        <View style={styles.inputBoxContainer}>
       
          <TextInput
            style={styles.inputBox}
          />
          
        </View>
        <View style = {{flex: 1, width: '100%', alignSelf: 'center',
        height: 50, textAlign: 'center', borderWidth: 0}}>
        <Text style={{fontSize:20,marginTop:30, background: 'white', width: 100, marginLeft: 103}}>Contraseña</Text>
        <TextInput
        style = {styles.inputBox2}/>
        
        </View>
        <View style={{marginTop: -100}}>
        <TouchableOpacity
            style={styles.searchButton}
           >
            <Text style={styles.searchText}>Log In</Text>
          </TouchableOpacity>
          </View>
        <Image style = {styles.logo} source = {require ('../assets/pencilguy.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 185,
    textAlign: 'center',
    borderWidth: 4,
    marginTop:50,
    backgroundColor: 'white'
  },
  inputBox2: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    marginTop:50,
    backgroundColor: 'white'
  },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'orange'
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  logo:{
    height:215,
    width: 215,
    marginLeft: 59,
    marginTop: 50,
    marginBottom:0,
  }
});
