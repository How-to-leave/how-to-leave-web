import { Action } from 'overmind'
import { rehydrate } from 'overmind'

export const changePage: Action<MutationCallback> = ({ state }, mutations) => {
  rehydrate(state, mutations || [])
}
