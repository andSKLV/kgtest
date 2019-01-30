function SaveToStore(st) {
  let state = Object.assign({}, st);
  state.favorites = [];
  state.allEvents.forEach(el => { if (el.isFavorite) state.favorites.push(el.id) });
  delete state.allEvents;
  delete state.renderEvents;
  const store = window.localStorage;
  state = JSON.stringify(state);
  store.setItem('saved', state);
}
function GetFromStore() {
  const store = window.localStorage;
  const saved = store.getItem('saved');
  const state = JSON.parse(saved);
  store.clear();
  return state
}
export {
  SaveToStore,
  GetFromStore,
}