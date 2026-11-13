import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";

export default function CustomApplicationBar({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ?
        <Appbar.BackAction onPress={navigation.goBack} />
      : null}
      <Appbar.Content title={title} />
      {!back ?
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("SecondScreen")}
        />
      : null}
    </Appbar.Header>
  );
}
