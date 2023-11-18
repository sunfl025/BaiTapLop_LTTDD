<Image />;
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const Login = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFocused = useIsFocused();
  // const getData = async () => {
  //   try {
  //     const res = await fetch("https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User")
  //     const json = await res.json();
  //     setData(json)
  //     console.log(data)

  //   } catch (error) {
  //     console.log(error)

  //   }
  // }
  // const getUser = () => {
  //   fetch("https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User", {
  //     method: "GET",
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       // handle error
  //     })
  //     .then((user) => {
  //       // Do something with the list of tasks
  //       setData(user);
  //     })
  //     .catch((error) => {
  //       // handle error
  //     });
  // };
  const getData = async () => {
    try {
      const response = await fetch('https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User',{
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const json = await response.json();
      setData(json);

     
    } catch (error) {
      console.error(error);
    } 
  };
  useEffect(() => {
    getData();
  }, [isFocused]);
      console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome Back</Text>
      <View style={styles.group}>
        <Text style={styles.text2}>E-MAIL</Text>
        <View style={styles.group2}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.text2}>PASSWORD</Text>
        <View style={styles.group2}>
          <TextInput
            style={styles.input2}
            value={password}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
          <Image style={styles.icon1} source={require("../assets/icon1.png")} />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text3}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          data
            .filter((item) => {
              return item.email == email && item.password == password;
            })
            .map((item) => {
                navigation.navigate('Home',item)
            });
          //           data.map((item)=> {
          //             console.log(item)
          //              if(item.email == email && item.password == password)
          //              {
          //                navigation.navigate('Home',item)

          //              }
          //              else{
          //               //  alert("Thông tin không chính xác")
          //              }
          // })
        }}
      >
        <Text style={styles.textbutton}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text1: {
    fontSize: "20px",
    fontFamily: "Nunito",
    fontWeight: "700",
    lineHeight: "27.78px",
    marginLeft: "22px",
    marginTop: "50px",
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
    marginTop: "20px",
  },
});
