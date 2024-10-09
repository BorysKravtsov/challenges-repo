export default function Link({ href, Children }) {
  return (
    <a className="navigation__link" href={href}>
      {Children}
    </a>
  );
}
