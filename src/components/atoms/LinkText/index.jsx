export default function LinkText({ classname, text, link, newTab }) {
  return (
    <a className={classname} href={link} target={newTab ? "_blank" : ""}>
      {text}
    </a>
  );
}
