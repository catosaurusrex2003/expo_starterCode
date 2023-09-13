// import { Stack, useRouter } from "expo-router";
// import { Button, StyleSheet, Text, View } from "react-native";

// const WelcomeScreen = () => {
//   const navigation = useRouter();

//   return (
//     <>
//       <Stack.Screen
//         options={{
//           title: "overWrited TITLE",
//         }}
//       />
//       <View style={styles.container}>
//         <Text style={styles.title}>Cat X Dog</Text>
//         <Text style={styles.subtitle}>Welcome</Text>
//         <Button title="Cats tab" onPress={() => navigation.push("/cats")} />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: "center",
//   },
// });

// export default WelcomeScreen;

import { Redirect, useFocusEffect, useRouter } from "expo-router";
import { Text } from "react-native";

const Index = () => {
  const router = useRouter();
  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    router.replace("/cats");
  });

  // below is depricated
  // return <Redirect href="/cats" />;

  return <Text>you shouldnt see this SUS</Text>
};
export default Index;
