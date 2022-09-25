import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewInput: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    backgroundColor: "transparent",
    height: 80,
    width: "90%",
    fontSize: 26,
  },
  viewInputPassword: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  inputPassword: {
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
  textRegisterAccount: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  textRecoverPassword: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
    height: 50,
    borderRadius: 30,
  },
  contentButton: { width: "100%", height: "100%" },
});
