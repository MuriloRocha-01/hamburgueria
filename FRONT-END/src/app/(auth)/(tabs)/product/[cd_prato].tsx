import { View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { api } from "@/src/config/api";
function Product(){
    const [prato, setPPrato] = useState();
    const params = useLocalSearchParams();
    const id = params.id as string;

    

    return(
        <View>ID do producto: {id}</View>
    )

}

export default Product;