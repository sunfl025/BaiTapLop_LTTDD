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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userStore";
const Login = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("Jamel.Feest@gmail.com");
  const [password, setPassword] = useState("Flwr3n_d0A5bwE2");
  const isFocused = useIsFocused();
  const userStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);

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
  const login = async () => {
    const response = await fetch(
      "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const json = await response.json();
    setData(json);
    json.map((item) => {
      if (item.email == email && item.password == password) {
        // navigation.push('Home',item)
        // localStorage.setItem("user",JSON.stringify(item))
        dispatch(setUser(item));
        navigation.navigate("Home");
      } else {
        //  alert("Thông tin không chính xác")
      }
    });
  };
  const getData = async () => {
    try {
      const response = await fetch(
        "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User",
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [isFocused]);
  // console.log(data);

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
            secureTextEntry={isHidden}
            style={styles.input2}
            value={password}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              setIsHidden(!isHidden);
            }}
          >
            <Image
              style={styles.icon1}
              source={require("../assets/icon1.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login();
        }}
      >
        <Text style={styles.textbutton}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text3}>create an account</Text>
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
    padding: 20,
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
    padding: 20,
  },
  text3: {
    fontSize: "14px",
    fontFamily: "Nunito",
    fontWeight: "500",
    lineHeight: "16.37px",
    color: "#007AFF",
    marginTop: 12,
    //marginLeft: "290px",
    textAlign: "center",
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
    marginTop: "40px",
  },
});