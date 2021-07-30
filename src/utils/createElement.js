export default function createElement(tagName, classList) {
  const element = document.createElement(tagName);
  element.classList.add(classList);

  return element;
}
