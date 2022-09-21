import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "transparent",
    width: 45,
    height: 55,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
    height: 50,
    borderRadius: 30,
  },
  contentButton: { width: "100%", height: "100%" },
  rs: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
