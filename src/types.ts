export const SAY_HI = "SAY_HI";
export const SAY_BYE = "SAY_BYE";
export const SAY_SOMETHING = 'SAY_SOMETHING';

interface SayHiAction {
  type: typeof SAY_HI;
}

interface SayByeAction {
  type: typeof SAY_BYE;
}

interface SaySomethingAction {
    type: typeof SAY_SOMETHING,
    payload: string
}

export interface MessageState {
  message: string
}

export type ActionTypes = SayHiAction | SayByeAction | SaySomethingAction
