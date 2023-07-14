export function dataFormater(collectionAllDecks) {
  let decksObject = {};
  collectionAllDecks.forEach((object) => {
    decksObject = { ...decksObject, [object.name]: object };
  });
  return decksObject;
}
