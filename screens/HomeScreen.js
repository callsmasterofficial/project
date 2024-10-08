import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, LogBox } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

const HomeScreen = () => {
  const [userInfo, setUserInfo] = useState();
  console.log(response, "response");
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      getUserInfo(authentication.accessToken);
    }
  }, [response]);

  // Fetch user info using access token
  const getUserInfo = async (token) => {
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
      console.log(error);
    }
  };
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
            <Text className="text-white text-5xl font-bold">Hello</Text>
            <Text className="text-white text-5xl font-bold">World</Text>
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
              disabled={!request}
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
