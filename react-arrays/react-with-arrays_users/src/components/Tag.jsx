import "./Tag.css";

export default function Tag({ tag, tagHighlight }) {
  return <li className={`tag ${tagHighlight}`}>{tag}</li>;
}
