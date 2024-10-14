import "./Tabs.css";
import Tab from "../components/Tab/Tab";
export default function Tabs() {
  return (
    <div className="tabs__container">
      <Tab tabName={"All Entries"} tabCount={"1"} />
      <Tab tabName={"Favorites"} tabCount={"3"} />
    </div>
  );
}
