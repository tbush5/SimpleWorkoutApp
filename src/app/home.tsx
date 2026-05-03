import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Block It</Text>
      <HomeHeader/>
    </ScrollView>
  );
}
