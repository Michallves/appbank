import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view: {
    flex: 1,
  },
  card: {
    backgroundColor: "black",
    height: 220,
    marginVertical: 10,
    marginHorizontal: "5%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 1 },
  },
  line: {
    backgroundColor: "white",
    position: "absolute",
    top: 30,
    height: 50,
    width: "99.2%",
    marginHorizontal: "0.4%",
  },
  typeView: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  textType: {
    color: "white",
    fontSize: 10,
  },
  textTypeCard: {
    color: "white",
    fontSize: 20,
  },
  cvcView: {
    backgroundColor: "white",
    position: "absolute",
    right: 20,
    bottom: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 1,
  },
  titleCvc: {
    fontSize: 10,
    fontWeight: "bold",
  },
  textCvc: {
    fontSize: 20,
    fontWeight: "bold",
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
