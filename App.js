import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Enter your ID" />
      <TextInput style={styles.textInput} placeholder="Enter your Password" />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => Alert.alert("you click login button!")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => Alert.alert("you click Assign button!")}
        >
          <Text style={styles.buttonText}>Assign</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    height: 50,
    width: 200,
  },
  buttonView: {
    flexDirection: "row",
  },
  clickButton: {
    width: 80,
    height: 30,
    margin: 10,
    paddingTop: 5,
    backgroundColor: "blue",
    fontSize: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
