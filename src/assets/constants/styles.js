import { StyleSheet } from "react-native";
import COLORS from "./Colors";

const STYLES = StyleSheet.create({
  // Estilos básicos
  sContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.ligth,
  },

  justNAlign: {
    justifyContent: "center",
    alignItems: "center",
  },

  // Estilos da tela de login
  loginInput: {
    height: 50,
    width: 350,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.ligth,
    borderColor: COLORS.primary,
  },

  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 350,
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.button,
  },

  loginErrorBox: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: 300,
    borderRadius: 100,
    backgroundColor: COLORS.ligth,
  },

  header: {
    backgroundColor: COLORS.header,
    borderBottomColor: COLORS.button,
    borderBottomWidth: 4,
  },

  // Estilos da tela de Tasks
  cards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tidal,
    padding: 20,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: COLORS.undertone,
  },

  taskInput: {
    backgroundColor: COLORS.fadeOut,
    alignSelf: "flex-start",
    height: 70,
    padding: 10,
    borderRadius: 100,
    borderWidth: 3,
  },

  addButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: 70,
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.button,
  },

  taskConteiner: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRigtht: 20,
    borderRadius: 100,
    backgroundColor: COLORS.button,
  },

  profileButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 45,
    width: 45,
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.button,
  },

  // Painel do usuário
  userContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: COLORS.ligth,
  },

  // Fontes
  bold: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ultraBold: {
    fontSize: 24,
    fontWeight: "900",
  },
  ligth: {
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.black,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "300",
    color: COLORS.ligth,
    textAlign: "center",
  },
  task: {
    flex: 1,
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.black,
    textAlign: "left",
    width: "8%",
  },
});

export default STYLES;
