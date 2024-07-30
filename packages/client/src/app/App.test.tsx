import App from './App'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';

const appContent = 'Home Page'

const initialState = {
  UserReducer: {
    user: {
      "id": 123,
      "first_name": "Petya",
      "second_name": "Pupkin",
      "display_name": "Petya Pupkin",
      "phone": "+79001001100",
      "login": "userLogin",
      "avatar": "/path/to/avatar.jpg",
      "email": "string@ya.ru"
    }
  }
};

import configureStore from 'redux-mock-store'
import {thunk} from 'redux-thunk'
import {AppDispatch} from "@/store";

const middlewares: any[] = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}

function getUser () {
  return (dispatch: AppDispatch ) => {
    return fetch('https://jsonplaceholder.typicode.com/users/1') // Some async action with promise
      .then(() => dispatch(success()))
  };
}

it('should execute fetch data', () => {
  const store = mockStore({})

  // Return the promise
  // @ts-ignore
  return store.dispatch(getUser())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(success())
    })
})

test('Example test',  () => {
  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(screen.getByText(appContent)).toBeDefined()
})
