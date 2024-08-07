import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { Checkbox } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useIsFocused } from "@react-navigation/native";
const Categories = () => {
  const [task, setTask] = useState();
  const userStore = useSelector((state) => state);
  const isFocused = useIsFocused();
  console.log("from categories", userStore.task.tasks);

  const [taskCompleted, settaskCompleted] = useState([]);
  const getTaskCompleted = async (id) => {
    try {
      const url = new URL(
        "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User/" + id + "/Task"
      );
      url.searchParams.append("isCompleted", "true");
      const response = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const json = await response.json();
      settaskCompleted(json);
    } catch (error) {
      console.error(error);
    }
  };

  const [taskUnCompleted, settaskUnCompleted] = useState([]);
  const getTaskUnCompleted = async (id) => {
    try {
      const url = new URL(
        "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User/" + id + "/Task"
      );
      url.searchParams.append("isCompleted", "false");
      const response = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const json = await response.json();
      settaskUnCompleted(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTaskUnCompleted(userStore.authen.user.id);
  }, [isFocused]);
  useEffect(() => {
    getTaskCompleted(userStore.authen.user.id);
  }, [isFocused]);
  // console.log("from categories",userStore.task.tasks.isCompleted)
  //   const count = (keyWord)=> {
  //     var newArr = userStore.task.tasks.
  //     setState([...newArr])
  //  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.bars}
        source={require("../assets/bars-3-bottom-left.png")}
      />
      <View style={styles.groupText}>
        <Text style={styles.text1}>Categories</Text>
      </View>

      <ScrollView>
        <View style={styles.groupCheck}>
          <View style={styles.groupCheck1}>
            <Image
              style={styles.iconCa}
              source={require("../assets/pngwing.com (2).png")}
            />
            <Text style={styles.textCheck}>Completed</Text>
          </View>

          <View style={styles.groupCheck2}>
            <View style={styles.dayView}>
              <Text style={styles.textDay}>
                {/* {console.log("from categorie 2",userStore.task.tasks.isCompleted)} */}
                {/* {userStore.task.tasks.map((item)=>{
                  var newArray = userStore.task.tasks.filter((item) => {
                      return item.isCompleted == true
                  })
                  setTask([...newArray])
                    
                })} */}

                {/* {taskCompleted.map((item) => {
                     
                      console.log(taskCompleted.length);
                    })} */}
                {taskCompleted.length}
              </Text>
            </View>
            <Image
              style={styles.imgVector}
              source={require("../assets/Vector.png")}
            />
          </View>
        </View>

        <View style={styles.groupCheck}>
          <View style={styles.groupCheck1}>
            <Image
              style={styles.iconCa}
              source={require("../assets/pngwing.com (1).png")}
            />
            <Text style={styles.textCheck}>Uncompleted</Text>
          </View>

          <View style={styles.groupCheck2}>
            <View style={styles.dayView}>
              <Text style={styles.textDay}> {taskUnCompleted.length}</Text>
            </View>
            <Image
              style={styles.imgVector}
              source={require("../assets/Vector.png")}
            />
          </View>
        </View>
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
    marginTop: "25px",
    marginBottom: "15px",
  },
  textInput: {
    width: "350px",
    height: "60px",
    outlineStyle: "none",
    borderRadius: "20px",
    color: "#838288",
    fontSize: "12px",
    lineHeight: "16.37px",
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
    fontSize: "13px",
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
  iconCa: {
    width: "20px",
    height: "20px",
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Categories;
