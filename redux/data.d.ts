export type NNResponse<T> = {
  success: boolean
  retMsg: string
  retData: T
}

export type UserPoint = {
  userId: number
  point: number
}

export type AppState = {
  userPoint: UserPoint;
};


export type Actions = ReturnType<typeof findUserPoint>;