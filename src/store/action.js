export function addCategorie(category) {
  return { type: 'ADD_CATEGORY', payload: category.strCategory };
}

export function addDrink(drink) {
  return { type: 'ADD_DRINK', payload: drink };
}

export function onLoading() {
  return { type: 'ON_LOADING' };
}

export function loadFinish() {
  return { type: 'LOAD_FINISH' };
}
