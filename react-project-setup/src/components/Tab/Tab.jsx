import "./Tab.css";
export default function Tab({ tabName, tabCount }) {
  return (
    <a href="#" className="tab">
      <p className="tab__title">{tabName}</p>
      <div className="tab__counter">{tabCount}</div>
    </a>
  );
}
