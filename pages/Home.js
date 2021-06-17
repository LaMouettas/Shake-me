import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from "react-native";
import Snooze from "../components/Snooze";
import TimePickerModal from "react-native-modal-datetime-picker";

export const Home = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [snoozeList, setSnoozeList] = useState([]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    let newDate = date.toLocaleTimeString();
    snoozeList.push({
      dateTime: newDate,
    });
    console.log(snoozeList);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {snoozeList.map((el, key) => {
          let s = el.dateTime;
          let time = s.slice(0, -3);
          console.log(time);
          return <Snooze key={key} hour={time} />;
        })}
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={{fontSize: 20,}}>Add an alarm</Text>
        </TouchableOpacity>
        <TimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },

  button: {
    backgroundColor: '#8BC9FF',
    padding: 12,
    borderRadius:5,
    margin: 10,
  }

});

export default Home;
