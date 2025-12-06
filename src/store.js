export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],

    character: [],
    favorites: [],
    planet: [],

  }

}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "get_people":

      const { personajes } = action.payload

      return {
        ...store,
        character: personajes
      };

    case "setFavorites":

      const favoriteAdded = store.favorites.some(favoriteId =>
        favoriteId.uid === action.payload.uid
      );

      if (favoriteAdded) {
        return {
          ...store,
          favorites: store.favorites.filter(
            idFav => idFav.uid !== action.payload.uid)
        };
      }

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case "removeFavoriteId":

      return {
        ...store,
        favorites: store.favorites.filter(favorite => favorite.uid !== action.payload)
      };
    case "setPlanets":
      const { planeta } = action.payload

      return {
        ...store,

        planet: planeta
      }


    default:
      throw Error('Unknown action.');
  };

}
