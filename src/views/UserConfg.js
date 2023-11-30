import { View, Text, Image, Button } from "react-native";
import { COLORS, STYLES } from "../assets/constants";
import { AuthContext } from "../contexts/Auth";

export default ({ route }) => {
  const params = route["params"];
  const { LogOut } = AuthContext();
  return (
    <View style={STYLES.userContainer}>
      <Image
        source={require("../../src/assets/defaultUserIcon.jpg")}
        style={{ width: 420, height: 420, borderRadius: 100 }}
      />
      <Text style={STYLES.bold}>Hi there!</Text>
      <Text style={STYLES.ultraBold}>{params["user"]}</Text>
      <Text style={STYLES.bold}>It's really great to have you around :D</Text>
      <View style={STYLES.sContainer}>
        <Button title="Log-Off" color={COLORS.button} onPress={LogOut} />
        <Text style={STYLES.ligth}>
          Inspirational quotes provided by https://zenquotes.io/
        </Text>
      </View>
    </View>
  );
};
