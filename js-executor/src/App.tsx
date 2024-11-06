import { ThemeProvider } from "@/providers/ThemeProvider";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <ThemeProvider>
      <SideBar />
    </ThemeProvider>
  );
}

export default App;
