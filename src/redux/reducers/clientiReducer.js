import { SAVE_CLIENTE, DELETE_CLIENTE } from "../actions/clientiActions";
const initialState = {
  clienti: [],
};

const ClientiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CLIENTE:
      return { clienti: [...state.clienti, action.payload] };
    case DELETE_CLIENTE:
      return {
        clienti: [
          ...state.clienti.slice(0, action.payload),
          ...state.clienti.slice(action.payload, state.clienti.length),
        ],
      };
    default:
      return state;
  }
};
export default ClientiReducer;
