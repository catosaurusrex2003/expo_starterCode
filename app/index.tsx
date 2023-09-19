import { Link, Redirect, useFocusEffect, useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();
  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    // router.replace("/cats");
    // router.replace("/cats");
  });

  return (
    <SafeAreaView>
      <Text className="  font-semibold text-lg text-center my-2">you shouldnt see this SUS</Text>
      <Link className="  font-semibold text-lg text-center my-2" href={"/cats"} >/cats</Link>
      <Link className="  font-semibold text-lg text-center my-2" href={"/(tabs)/cats"} >/(tabs)/cats</Link>
      <Link className="  font-semibold text-lg text-center my-2" href={"/dogs"} >/dogs</Link>
      <Link className="  font-semibold text-lg text-center my-2" href={"/(tabs)/dogs"} >/(tabs)/dogs</Link>
      <Link className="  font-semibold text-lg text-center my-2" href="/modal">Present modal</Link>
      <Link className="  font-semibold text-lg text-center my-2" href="/(drawer)/home">/(drawer)/home</Link>
      <Link className="  font-semibold text-lg text-center my-2" href="/home">/home</Link>
    </SafeAreaView>
  );
};
export default Index;
