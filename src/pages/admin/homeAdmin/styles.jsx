import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewBnts: {
    width: "90%",
    marginHorizontal: "5%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bntR: {
    width: 100,
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  bntA: {
    width: 100,
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
