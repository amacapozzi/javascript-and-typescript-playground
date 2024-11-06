import { ThemeProvider } from "@/providers/ThemeProvider";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <SideBar />
      <Header />
    </ThemeProvider>
  );
}

export default App;
