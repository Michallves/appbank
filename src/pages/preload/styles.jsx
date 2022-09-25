import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  viewTitle: {
    backgroundColor: "black",
    height: "70%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  viewButtons: {
    backgroundColor: "white",
    height: "30%",
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button1: {
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textButton1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  button2: {
    backgroundColor: "white",
    width: "90%",
    height: 50,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textButton2: {
    color: "black",
    fontSize: 15,
  },
  buttonAdmin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonAdmin: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
