import { ThemeProvider } from "@/providers/ThemeProvider";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import Playground from "./components/Playground";

function App() {
  return (
    <ThemeProvider>
      <SideBar />
      <Header />
      <div className="flex mx-auto items-center justify-center min-h-screen">
        <Playground />
      </div>
    </ThemeProvider>
  );
}

export default App;
