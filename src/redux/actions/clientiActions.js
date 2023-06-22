export const SAVE_CLIENTE = "SAVE_CLIENTE";
export const DELETE_CLIENTE = "DELETE_CLIENTE";

export const saveCliete = (cliente) => {
  return {
    type: SAVE_CLIENTE,
    payload: cliente,
  };
};
export const removeCliente = (id) => {
  return {
    type: DELETE_CLIENTE,
    paylod: id,
  };
};
