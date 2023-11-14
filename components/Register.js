import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React,{useEffect, useState} from "react";
import { useIsFocused } from "@react-navigation/native";

const Register = ({ navigation }) => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const isFocused = useIsFocused();


  const save = () => {
    try {
      const response =  fetch('https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User',{
        method:"POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      
          "email":email,
          "password":password,
           
           
        }),
       
      });
      
     
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(()=> {
    save()
  },[isFocused])    
 
 
  return (
    
    <View style={styles.container}>
      <View style={styles.groupText}>
        <Text style={styles.text1}>Welcome to Blossom!</Text>
        <Text style={styles.text1}>Your journey starts here</Text>
      </View>


      {/* <View style={styles.group}>
        <Text style={styles.text2}>NAME</Text>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="User name" value={name} onChangeText={(name)=> setName(name)}></TextInput>
        </View>
      </View> */}

      <View style={styles.group}>
        <Text style={styles.text2}>E-MAIL</Text>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(email)=> setEmail(email)}></TextInput>
        </View>
      </View>



      <View style={styles.group}>
        <Text style={styles.text2}>PASSWORD</Text>
        <View style={styles.group2}>
          <TextInput style={styles.input2} placeholder="Password" value={password} onChangeText={(password)=> setPassword(password)}></TextInput>
          <Image style={styles.icon1} source={require("../assets/icon1.png")} />
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.text2}>CONFIRM PASSWORD</Text>
        <View style={styles.group2}>
          <TextInput style={styles.input2} placeholder="Re-password"></TextInput>
          <Image style={styles.icon1} source={require("../assets/icon1.png")} />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {save(),navigation.navigate('Login')}}
        style={styles.button}
      >
        <Text style={styles.textbutton}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  groupText: {
    marginLeft: "22px",
    marginTop: "50px",
  },
  text1: {
    fontSize: "20px",
    fontFamily: "Nunito",
    fontWeight: "700",
    lineHeight: "27.78px",
  },
  group: {
    flexDirection: "column",
    width: "370px",
    height: "89",

    marginLeft: "8px",
  },
  text2: {
    fontSize: "12px",
    fontFamily: "Nunito",
    fontWeight: "700",
    lineHeight: "16.37px",
    marginTop: 30,
  },
  input: {
    width: "360px",
    height: "54px",
    borderRadius: "29px",

    outlineStyle: "none",
    padding:20
  },
  group2: {
    flexDirection: "row",
    border: "1px solid #3C3C4399",
    width: "370px",
    height: "54px",
    borderRadius: "29px",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    width: "16px",
    height: "16px",
  },
  input2: {
    width: "340px",
    height: "54px",
    borderRadius: "29px",
    outlineStyle: "none",
    textAlign: "justify",
    padding:20
    //backgroundColor: "red",
  },
  text3: {
    fontSize: "12px",
    fontFamily: "Nunito",
    fontWeight: "500",
    lineHeight: "16.37px",
    color: "#007AFF",
    marginTop: 16,
    marginLeft: "290px",
  },
  textbutton: {
    fontSize: "17px",
    fontFamily: "Nunito",
    fontWeight: "700",
    lineHeight: "16.37px",
    color: "white",
    textAlign: "center",
    marginTop: "16px",
  },
  button: {
    width: "370px",
    height: "54px",
    backgroundColor: "#007AFF",
    borderRadius: "29px",
    marginLeft: "8px",
    marginTop: "50px",
  },
});
