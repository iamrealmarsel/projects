import user from "./user";
import {ActionType} from 'const';


const initialState = {
  isAuthenticated: false,
};

test(`reducer user without parameters`, () => {
  expect(user(initialState, {})).toEqual(initialState);
});

test(`reducer user with authenticate`, () => {
  expect(user(initialState, {
    type: ActionType.ENABLE_AUTH,
    status: true,
  })).toEqual({
    isAuthenticated: true,
  });
});
