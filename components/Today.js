import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  CheckBox,
  TouchableOpacity
  
} from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/taskStore";

const Today = () => {
  const userStore = useSelector(state => state)
  console.log("from completed",userStore)
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();

  const getTask = async (id) => {
    try {
      const response = await fetch(
        "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User/" + id + "/Task",
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      const json = await response.json();
      setTask(json);

      dispatch(setTasks(json))
      // console.log("task",userStore);
    } catch (error) {
      console.error(error);
    }
  };
  const remove = async (id_user, id) => {
    try {
      const response = await fetch(
        "https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User/" +
          id_user +
          "/Task/" +
          id,
        {
          method: "DELETE",
        }
      ).then(
        (task)=>{
          getTask(id_user);
        }
        
      );
    
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const setNewCompleted = (user_id,id, newIsCompleted) => {
    fetch("https://65533ab65449cfda0f2e5ffa.mockapi.io/api/User/"+ user_id + "/Task/" + id, {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isCompleted: newIsCompleted,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        getTask(user_id);
      })
      .catch((error) => {
        // handle error
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.bars}
        source={require("../assets/bars-3-bottom-left.png")}
      />
      <View style={styles.groupText}>
        <Text style={styles.text1}>Completed</Text>
      </View>

     
      <ScrollView>
          {
              userStore.task.tasks.map((item)=> {
                  if(item.isCompleted==false){
                    return (
                      <View style={styles.groupCheck}>
                        <View style={styles.groupCheck1}>
                          <CheckBox
                            // type="checkbox"
                            style={styles.checkbox}
                            value={item.isCompleted}
                            onValueChange={() =>
                              setNewCompleted(userStore.authen.user.id,item.id, !item.isCompleted)
                            }
                          ></CheckBox>
                          {/* <input   style={styles.checkbox}  /> */}
                          <Text style={styles.textCheck}>{item.name}</Text>
                        </View>
          
                        <View style={styles.groupCheck2}>
                          <View style={styles.dayView}>
                            <Text style={styles.textDay}>Jan 28</Text>
                          </View>
                         <TouchableOpacity onPress={()=>{remove(userStore.authen.user.id,item.id)}}>
                          <Image
                              style={styles.imgVector}
                              source={require("../assets/x-png-icon-27.jpg")}
                            />
                         </TouchableOpacity>
                        </View>
                      </View>
                    );
                  }
              })
          }

       
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
    width: 24,
    height: 24,
    marginLeft: 10,
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
    width: "10.25px",
    height: "10.25px",
    marginLeft: 15,
    marginTop: 5,
  },
});


export default Today;
