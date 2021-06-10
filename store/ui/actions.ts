import { Action } from 'overmind'

export const changeCountry: Action<string> = ({ state }, value) => {
  state.ui.currentCountry = value
}
