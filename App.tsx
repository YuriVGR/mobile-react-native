import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackRoutes from "./src/routes/stack.routes";
import { NavigationContainer } from "@react-navigation/native";

// FontAwesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";


library.add(fas, far, fab, fal);

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
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
