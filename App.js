import { StyleSheet, Text, View } from "react-native";
import StackNavigatorApp from "./components/Navigators/StackNavigatorApp";

export default function App() {
  return (
    <>
      <StackNavigatorApp />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
