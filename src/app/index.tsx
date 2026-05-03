import { globalStyles } from "@/styles/global";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Block It</Text>
      <Text style={styles.date}>Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  }
});
