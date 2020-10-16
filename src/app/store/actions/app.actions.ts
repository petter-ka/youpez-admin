import {createAction, props} from '@ngrx/store'

export const loadApps = createAction(
  '[App] Load Apps'
)

export const loadAppsSuccess = createAction(
  '[App] Load Apps Success',
  props<{ data: any }>()
)

export const loadAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
)
