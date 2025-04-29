import { createDrawerNavigator } from "@react-navigation/drawer"
// import Home from "../pages/Home";
import StackRoutes from "../routes/stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import CustomDrawer from "../components/CustomDrawer";

import Feather from "@expo/vector-icons/Feather";

const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={
        {
          headerShown: true,
          drawerStyle: {
            backgroundColor: "#FFF",
            marginTop: 50
          },
          drawerActiveBackgroundColor: "#00DAD4",
          drawerActiveTintColor: "#FFF",
          drawerInactiveBackgroundColor: "#F1F1F1",
          drawerInactiveTintColor: "#000"
        }
      }

    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}

      />
    </Drawer.Navigator>
  );
}
