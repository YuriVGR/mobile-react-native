import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Settings from "../screens/settings";
import Profile from "../screens/profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUser, faCog } from "@fortawesome/pro-regular-svg-icons";

const Tab = createBottomTabNavigator();

const farHouse = "fa-regular fa-house";
const farUser = "fa-regular fa-user";
const farCog = "fa-regular fa-cog";

const falHouse = "fa-light fa-house";
const falUser = "fa-light fa-user";
const falCog = "fa-light fa-cog";

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: "#00aa00",
        inactiveTintColor: "#666666",
        tabBarIcon: ({ focused, size, color }) => {
          let iconName: IconDefinition = faHouse;
          if (route.name === "My Profile") {
            iconName = faUser;
          } else if (route.name === "Settings") {
            iconName = faCog;
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          padding: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
