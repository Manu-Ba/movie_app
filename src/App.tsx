import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieSearch } from "./components/MovieSearch";

function App() {
  return (
    <>
      <Header page="home" />
      <MovieSearch />
      <Footer />
    </>
  );
}

export default App;
