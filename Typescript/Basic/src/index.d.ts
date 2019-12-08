interface String {
  toLower: () => string;
}

interface HTMLCollectionBase {
  forEach: (callback: (element: Element) => void ) => void;
}