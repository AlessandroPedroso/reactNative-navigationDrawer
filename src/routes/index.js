import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Home from "../pages/Home";
import StackRoutes from "../routes/stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#FF0000",
        headerStyle: {
          backgroundColor: "#202225",
        },
        tabBarHideOnKeyboard: true, //quando digitar no input e abrir opção de digitar esconde o tabBar
        tabBarShowLabel: false, //esconde nos nomes da tab no menu
        tabBarActiveTintColor: "#FF0000", //cor do menu ativo

        tabBarStyle: {
          backgroundColor: "#202225",
          borderTopWidth: 0,
          height: 100,
          paddingTop: 10,
          color: "#FFF",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          // tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="file-text" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          title: "Contato",
          tabBarLabel: "Contato",
          // headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="phone-call" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
