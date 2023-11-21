import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
const Home = ({ route, navigation }) => {
  // const [data,setData] = useState([]);
  const [task, setTask] = useState([]);
  const isFocused = useIsFocused();
  // const routeState = useRoute();
  // const data = route.params;
  const userStore = useSelector((state) => state);
  console.log("userStore", userStore);
  const getTask = async (id) => {
    try {
      const res = await fetch(
        "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User/" + id + "/Task"
      );
      const json = await res.json();
      setTask(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTask(userStore.authen.user.id);
  }, [isFocused]);
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.bars}
        source={require("../assets/bars-3-bottom-left.png")}
      /> */}
      <View style={styles.groupText}>
        <Text style={styles.text1}>
          Good morning {userStore.authen.user.name},
        </Text>
        <Text style={styles.text1}>
          It’s {Date()} - {task.length} tasks
        </Text>
      </View>

      <View style={styles.groupTI}>
        <TextInput
          style={styles.textInput}
          placeholder="Create a new task"
        ></TextInput>
        <TouchableOpacity style={styles.buttonInput}>
          <Text style={styles.textButtonInput}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {task.map((item) => {
          // console.log(item)
          return (
            <View style={styles.groupCheck}>
              <View style={styles.groupCheck1}>
                <input type="checkbox" style={styles.checkbox} />
                <Text style={styles.textCheck}>{item.name}</Text>
              </View>

              <View style={styles.groupCheck2}>
                <View style={styles.dayView}>
                  <Text style={styles.textDay}>Jan 28</Text>
                </View>
                <Image
                  style={styles.imgVector}
                  source={require("../assets/Vector.png")}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  bars: {
    width: "26px",
    height: "26px",
    marginLeft: "10px",
    marginTop: "20px",
  },
  groupText: {
    marginLeft: "10px",
    marginTop: "10px",
  },
  text1: {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "27.28px",
  },
  groupTI: {
    width: "370px",
    height: "60px",
    backgroundColor: "#EDECEF",
    borderRadius: "20px",
    justifyContent: "center",
    borderRadius: "20px",
    marginLeft: "10px",
    alignItems: "center",
    // marginTop: "25px",
    // marginBottom: "15px",
    flexDirection: "row",
  },
  textInput: {
    width: "290px",
    height: "60px",
    outlineStyle: "none",

    color: "#838288",
    fontSize: "12px",
    lineHeight: "16.37px",
    borderRightColor: "#838288",
    borderRightWidth: "1px",
  },
  buttonInput: {
    width: "60px",
    height: "60px",
  },
  textButtonInput: {
    color: "#838288",
    fontSize: "12px",
    lineHeight: "16.37px",
    textAlign: "center",
    marginTop: "20px",
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  groupCheck: {
    flexDirection: "row",
    width: "370px",
    height: "60px",
    backgroundColor: "#EDECEF",
    borderRadius: "20px",
    marginLeft: "10px",
    marginTop: "25px",
    alignItems: "center",
  },
  groupCheck1: {
    flexDirection: "row",
  },
  groupCheck2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    left: "280px",
    position: "absolute",
  },
  textCheck: {
    fontfamily: "Nunito",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "16px",
    marginTop: 6,
    marginLeft: 10,
  },
  dayView: {
    width: "48px",
    height: "22px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  textDay: {
    fontSize: "10px",
    lineHeight: "13.64px",
    textAlign: "center",
    color: "#838288",
    fontWeight: "600",
    fontFamily: "Nunito",
    marginTop: 3,
  },
  imgVector: {
    width: "3.25px",
    height: "13.25px",
    marginLeft: 15,
    marginTop: 5,
  },
});

export default Home;
