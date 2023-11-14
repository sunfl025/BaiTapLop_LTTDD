import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";

const Categories = () => {
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
              source={require("../assets/iconCa1.png")}
            />
            <Text style={styles.textCheck}>Weekly goals</Text>
          </View>

          <View style={styles.groupCheck2}>
            <View style={styles.dayView}>
              <Text style={styles.textDay}>1</Text>
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
              source={require("../assets/iconCa2.png")}
            />
            <Text style={styles.textCheck}>Personal</Text>
          </View>

          <View style={styles.groupCheck2}>
            <View style={styles.dayView}>
              <Text style={styles.textDay}>2</Text>
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
              source={require("../assets/iconCa3.png")}
            />
            <Text style={styles.textCheck}>Study</Text>
          </View>

          <View style={styles.groupCheck2}>
            <View style={styles.dayView}>
              <Text style={styles.textDay}>3</Text>
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
  iconCa: {
    width: "15px",
    height: "15px",
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Categories;
