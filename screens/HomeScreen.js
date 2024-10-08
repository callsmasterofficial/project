import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, LogBox } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as Google from "expo-auth-session/providers/google";
const HomeScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const iosClientId =
    "583220945607-po2ab6fio1tr8450rsdsra2ofq4p024k.apps.googleusercontent.com";
  const androidClientId =
    "583220945607-vt7msacemjstvv8o80ahkfg13crr9pt3.apps.googleusercontent.com";
  const webClientId =
    "583220945607-111kdom1nruhqadn3caeb3s5ol0nvo04.apps.googleusercontent.com";
  WebBrowser.maybeCompleteAuthSession();

  const config = { webClientId, iosClientId, androidClientId };
  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const handleToken = () => {
    if (response?.type == "success") {
      const { authentication } = response;
      const token = authentication?.accessToken;
      console.log("access token", token);
      getUserInfo(token);
    }
  };
  useEffect(() => {
    handleToken(), [response];
  });

  async function getUserInfo(token) {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  }

  return (
    <View className="flex-1 bg-black justify-center items-center">
      {userInfo ? (
        <View className="bg-white w-[90%] text-">
          <Text>Welcome, {userInfo.name}</Text>
          <Text>Email: {userInfo.email}</Text>
        </View>
      ) : (
        <>
          <View
            className="w-[90%] flex justify-center items-center"
            style={{ height: RFPercentage(30), marginBottom: RFPercentage(8) }}
          >
            <Text className="text-white text-5xl font-bold">PRAKRIA</Text>
            <Text className="text-white text-5xl font-bold">DIRECT</Text>
          </View>
          <View className="w-full flex justify-center items-center">
            <TouchableOpacity
              className="bg-white w-[90%] px-4 py-3 flex justify-evenly rounded-full flex-row items-center relative"
              style={{ marginBottom: RFPercentage(0.8) }}
            >
              <View className="w-[20%] absolute left-[10%]">
                <FontAwesome name="phone" size={25} color="red" />
              </View>
              <Text className="ml-3 text-red-500 text-lg">
                Continue with mobile number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-black border border-white px-4 py-3 flex justify-evenly w-[90%] rounded-full mb-4 flex-row items-center relative"
              style={{ marginBottom: RFPercentage(0.8) }}
              onPress={() => promptAsync()}
            >
              <View className="w-[20%] absolute left-[10%]">
                <FontAwesome name="google" size={20} color="white" />
              </View>
              <Text className="ml-3 text-white text-lg">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-black border border-white px-4 py-3 flex justify-evenly w-[90%] rounded-full mb-4 flex-row items-center"
              style={{ marginBottom: RFPercentage(0.8) }}
            >
              <View className="w-[20%] absolute left-[10%]">
                <FontAwesome name="facebook" size={20} color="white" />
              </View>
              <Text className="ml-3 text-white text-lg">
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-black border border-white px-4 py-3 flex justify-evenly w-[90%] rounded-full mb-4 flex-row items-center"
              style={{ marginBottom: RFPercentage(0.8) }}
            >
              <View className="w-[20%] absolute left-[10%]">
                <FontAwesome name="apple" size={20} color="white" />
              </View>
              <Text className="ml-3 text-white text-lg">
                Continue with Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-black border border-white px-4 py-3 flex justify-evenly w-[90%] rounded-full mb-4 flex-row items-center"
              style={{ marginBottom: RFPercentage(0.8) }}
            >
              <View className="w-[20%] absolute left-[10%]">
                <FontAwesome name="eye" size={20} color="white" />
              </View>
              <Text className="ml-3 text-white text-lg">Set up Face ID</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-black border border-white px-4 py-3 flex justify-evenly w-[90%] rounded-full mb-4 flex-row items-center"
              style={{ marginBottom: RFPercentage(0.8) }}
            >
              <Text className="text-white text-lg ">Guest</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-white text-lg">Log in</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
