import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

export default function Home() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    setArea((base * height) / 2);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>Calculate the area of a triangle</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the base"
          keyboardType="numeric"
          onChangeText={(text) => setBase(Number(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the height"
          keyboardType="numeric"
          onChangeText={(text) => setHeight(Number(text))}
        />
        <TouchableOpacity style={styles.button} onPress={calculateArea}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          The area of the triangle is <Text style={styles.textBold}>{area}</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    width: "80%",
    borderRadius: 8,
    padding: 10,
    paddingVertical: 15,
    margin: 10,
  },
  button: {
    padding: 15,
    borderRadius: 32,
    margin: 10,
    width: "60%",
    alignItems: "center",
    backgroundColor: "#779977",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textBold: {
    fontWeight: "bold",
    color: "#779977",
    fontSize: 20,
  },
});
