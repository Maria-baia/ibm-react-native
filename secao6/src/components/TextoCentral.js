/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React from "react";
import {View, Text} from "react-native";

export default props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.corFundo || "#E5BEED",
      }}>
      <Text style={{fontSize: 50, color: props.corTexto || "#9593D9"}}>
        {props.children}
      </Text>
    </View>
  );
};
