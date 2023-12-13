import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error storing data", error);
        Alert.alert("Error", "There was an error storing data.");
    }
};

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error("Error retrieving data", error);
        Alert.alert("Error", "There was an error retrieving data.");
    }
};
