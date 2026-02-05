import React from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Hello there</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_86E80wUbAxZlj3d1ZbYQvs_sRP737da1HvaM5rHTdElWI16",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button title="Click me"></Button>
      <TouchableOpacity onPress={() => Alert.alert("You pressed me!!")}>
        {" "}
        <Text>I am touhed</Text>{" "}
      </TouchableOpacity>
      <Pressable onLongPress={() => Alert.alert("you long pressed me!!")}>
        <Text>i am pressed</Text>
      </Pressable>
    </View>
  );
};
export default App;
