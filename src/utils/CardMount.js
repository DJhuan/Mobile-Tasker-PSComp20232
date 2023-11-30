import { View, Text } from "react-native";
import { STYLES } from "../assets/constants";
export default (item) => {
  return (
    <View style={STYLES.cards}>
      <Text style={STYLES.cardText}>{item.item}</Text>
    </View>
  );
};
