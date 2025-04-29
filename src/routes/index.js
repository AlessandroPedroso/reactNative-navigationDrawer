import { createDrawerNavigator } from "@react-navigation/drawer"
// import Home from "../pages/Home";
import StackRoutes from "../routes/stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

import Feather from "@expo/vector-icons/Feather";

const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <Drawer.Navigator

      screenOptions={
        {
          headerShown: true
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
