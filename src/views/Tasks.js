import { Text, View, Dimensions, TouchableOpacity, Enty } from "react-native";
import React, { useEffect, useState } from "react";
import { ROUTES, STYLES, COLORS } from "../assets/constants";
import Api from "../services/Api";
import Carousel from "../assets/components/Carousel";
import { TextInput, FlatList } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

deleteItemById = (id) => () => {
  const filteredData = this.state.data.filter((item) => item.id !== id);
  this.setState({ data: filteredData });
};

const HomeScreen = (props) => {
  const { navigation } = props;

  const [quotes, setQuotes] = useState(["So empty..."]);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderTask = ({ item, index }) => {
    return (
      <View style={STYLES.taskConteiner}>
        <Text style={STYLES.task}>{item}</Text>

        <TouchableOpacity
          style={STYLES.addButton}
          onPress={() => handleDeleteTask(index)}
        >
          <Entypo name="check" size={30} color={COLORS.ligth} />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    Api.get()
      .then((res) => {
        const data = res.data;
        const quotesArray = [];
        for (var i = 0; i < 3; i++) {
          quotesArray.push(`${data[i]["q"]}\n\n${data[i]["a"]}`);
        }
        setQuotes(quotesArray);
      })
      .catch((err) => {
        const quotesArray = [];
        quotesArray.push("Connection Error");
        setQuotes(quotesArray);
      });
  }, []);

  return (
    <View style={[STYLES.sContainer]}>
      <View style={{ alignItems: "center", flexDirection: "row", padding: 5 }}>
        <TextInput
          style={[STYLES.taskInput, { width: "80%" }]}
          placeholder="Let's get duty!"
          onChangeText={(newText) => setTask(newText)}
          defaultValue={task}
        />

        <TouchableOpacity style={STYLES.addButton} onPress={handleAddTask}>
          <Entypo name="plus" size={30} color={COLORS.ligth} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ backgroundColor: COLORS.ligth, width: "100%", height: "60%" }}
        data={tasks}
        renderItem={renderTask}
      />

      {Carousel(quotes, width)}
    </View>
  );
};

export default HomeScreen;
