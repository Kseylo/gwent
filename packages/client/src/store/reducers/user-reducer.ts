import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, InferAppActions } from '@/store'
import { AUTH_URL } from '@/shared/api/auth'

export type UserType = {
  avatar: string | null;
  display_name: string | null;
  email: string | null;
  first_name: string | null;
  id: string | null;
  login: string | null;
  phone: string | null;
  second_name: string | null
}

const initialState = {
  user: null as unknown as UserType,
};

const slice = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    setUser(state, actions) {
      state.user = actions.payload;
    }
  },
});

const UserReducer = slice.reducer;
export const { actions } = slice;

export const getUser = () => (dispatch: AppDispatch) => {
  fetch(`${AUTH_URL}/user`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
    .then(function(response) {
      return response.json();
    })
    .then((data) => {
      if (data) {
        dispatch(actions.setUser(data));
      }
    })
}
export type ActionsType = InferAppActions<typeof actions>;
export default UserReducer;
