import React, { useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { useData } from "../../../navigation/context";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Modalize } from "react-native-modalize";
import { getFirestore, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";

export default ({ navigation }) => {
  const { user, idUser } = useData();
  const db = getFirestore();

  const modalizeImage = useRef(null);
  const openModalizeImage = () => {
    modalizeImage.current?.open();
  };
  const closeModalizeImage = () => {
    modalizeImage.current?.close();
  };

  const pickCamera = async () => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      updateDoc(doc(db, "users", idUser), {
        image: result.uri,
      });
      closeModalizeImage();
    }
  };

  const pickGallery = async () => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      updateDoc(doc(db, "users", idUser), {
        image: result.uri,
      });
      closeModalizeImage();
    }
  };

  function removeImage() {
    updateDoc(doc(db, "users", idUser), {
      image: null,
    });
    closeModalizeImage();
  }

  function deleteAccount() {
    const auth = getAuth();
    const uuser = auth.currentUser;
    deleteUser(uuser)
      .then(() => {
        const db = getFirestore();
        deleteDoc(doc(db, "users", uuser.uid));
        navigation.navigate("preload");
      })
      .catch((error) => {
        window.alert("Error");
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewAvatar}>
        <Pressable onPress={openModalizeImage}>
          {user?.image ? (
            <Avatar.Image size={200} source={{ uri: user?.image }} />
          ) : (
            <Avatar.Text
              size={200}
              label={String(user?.name).toLocaleUpperCase().substring(0, 2)}
            />
          )}
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("editNameProfile", { name: user?.name })
          }
          style={styles.bntName}
        >
          <Text numberOfLines={2} style={styles.textName}>
            {user?.name}
          </Text>
        </Pressable>
      </View>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="#c0c0c0"
        onPress={() => navigation.navigate("editPasswordProfile")}
      >
        Alterar senha
      </Button>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="#bd0000"
        onPress={() => deleteAccount()}
      >
        Excluir conta
      </Button>
      <Modalize
        ref={modalizeImage}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        disableScrollIfPossible
        adjustToContentHeight
        withHandle={false}
        HeaderComponent={
          <View
            style={{
              backgroundColor: "white",
              height: 50,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 0.5,
              borderColor: "#C0C0C0",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
              Adicionar foto
            </Text>
            <TouchableOpacity style={{ position: "absolute", right: 10 }}>
              <MaterialIcons
                onPress={() => closeModalizeImage()}
                name="close"
                size={30}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        }
      >
        {user?.image != null ? (
          <TouchableOpacity
            onPress={() => removeImage()}
            style={{
              height: 65,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 0.5,
              borderColor: "#dcdcdc",
            }}
          >
            <MaterialCommunityIcons
              name="image-off-outline"
              size={30}
              color={"black"}
              style={{ marginLeft: 15 }}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "black",
                marginLeft: 20,
              }}
            >
              Remover foto atual
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <TouchableOpacity
          onPress={pickCamera}
          style={{
            height: 65,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 0.5,
            borderColor: "#dcdcdc",
          }}
        >
          <MaterialCommunityIcons
            name="camera-outline"
            size={30}
            color={"black"}
            style={{ marginLeft: 15 }}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "black",
              marginLeft: 20,
            }}
          >
            Tirar foto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pickGallery}
          style={{
            height: 65,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="image-outline"
            size={30}
            color={"black"}
            style={{ marginLeft: 15 }}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "black",
              marginLeft: 20,
            }}
          >
            Escolher foto
          </Text>
        </TouchableOpacity>
      </Modalize>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewAvatar: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  bntName: {
    width: "100%",
    alignItems: "center",
  },
  textName: {
    width: "90%",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 10,
    height: 50,
    borderRadius: 30,
  },
  contentButton: { width: "100%", height: "100%" },
});
