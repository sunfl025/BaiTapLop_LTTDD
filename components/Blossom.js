import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Blossom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.blossomImg}
        source={require("../assets/Blossom.png")}
      />

      <Text style={styles.text1}>Do you want to be</Text>
      <Text style={styles.text2}>more productive?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start your journey</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Blossom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(#FFFFFF,#f9dbff,#f9dbff,#f9dbff,#FFFFFF)",
    alignItems: "center",
    //justifyContent: "center",
  },
  blossomImg: {
    width: "124px",
    height: "126px",
    marginTop: 120,
  },
  text1: {
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: "20px",
    lineHeight: "27.28px",
    fontWeight: "700",
    marginTop: 16,
  },
  text2: {
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: "20px",
    lineHeight: "27.28px",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#007AFF",
    width: "260px",
    height: "58px",
    borderRadius: "29px",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Nunito",
    fontSize: "17px",
    fontWeight: "700",
    lineHeight: "16.37px",
    textAlign: "center",
    marginTop: 18,
  },
});
