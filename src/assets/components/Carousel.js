import Carousel from "react-native-reanimated-carousel";
import CardMount from "../../utils/CardMount";
import { View, Text } from "react-native";

export default (data, width) => {
  return (
    <Carousel
      loop
      width={width}
      height={width * 0.75}
      data={data}
      scrollAnimationDuration={500}
      style={{ borderRadius: 20 }}
      snapEnabled
      mode="parallax"
      renderItem={(item) => {
        return CardMount(item);
      }}
    />
  );
};
