//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
        }}
      />
      <Drawer.Screen
        name="2login" 
        options={{
          drawerLabel: "Login",
          title: "Login",
        }}
      />
      <Drawer.Screen
        name="3escolher" 
        options={{
          drawerLabel: "escolher cardapio",
          title: "cardapios",
    
        }}
      />
      
      <Drawer.Screen
        name="5cardapio" 
        options={{
          drawerLabel: "cardapio do dia",
          title: "cardapio do dia",
    
        }}
      
      />
      <Drawer.Screen
        name="7sugestoes" 
        options={{
          drawerLabel: "Sugestões",
          title: "Sugestões",
    
        }}
      />

    </Drawer>

  );
}