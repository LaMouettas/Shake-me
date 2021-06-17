import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const Snooze = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <View style={styles.snooze}>
        <Text style={styles.hour}>{props.hour}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#1520ed" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  snooze: {
    width: 340,
    height: 110,
    backgroundColor: "#efefef",
    margin: 10,
    borderRadius: 5,
  },

  hour: {
    fontSize: 50,
    paddingLeft: 16,
    /* backgroundColor: "red", */
    width: "50%",
    paddingVertical: 22,
  },

  switch: {
    /* backgroundColor: "blue", */
    width: 60,
    height: 30,
    alignSelf: "flex-end",
    transform: [{ scale: 1.5 }, { translateY: -45 }],
    marginRight: 20,
  },
});

export default Snooze;
