import { StatusBar } from "expo-status-bar";
import { ScrollViewComponent, StyleSheet, Text, View } from "react-native";
import Component1 from "./components/component1";
import Box from "./components/box.js";
import Style from "./style/style.js";

export default function App() {
  let vExibir = true;
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box />
        <View style={Style.Text}>
          <Component1 />
        </View>
      </View>
    </View>
  );
}
