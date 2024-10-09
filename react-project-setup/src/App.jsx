import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tabs from "./Tabs/Tabs";
import Entry from "./components/Entry/Entry";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Tabs />
      <Entry date={"FEB 26, 2028"} titleName={"“That’s life in the city“"} />
      <Entry date={"FEB 26, 2028"} titleName={"“That’s life in the city“"} />
      <Entry date={"FEB 26, 2028"} titleName={"“That’s life in the city“"} />
      <Footer />
    </>
  );
}
