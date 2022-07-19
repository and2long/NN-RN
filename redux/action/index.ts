enum actionTypes {
  FIND_USER_POINT = 'FIND_USER_POINT',
}
export default actionTypes;


export const findUserPoint = (userId: number) => {
  return {
    type: actionTypes.FIND_USER_POINT,
    payload: 10,
  } as const;
};
