import {ChangeEvent} from 'react';

const initialState = {
    count: 0,
    start: 8,
    max: 10,
    disabled: false,
    display: true
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INC-BUTTON':
            return {
                ...state, count: state.count + 1
            }
        case 'SET-BUTTON'  :
            return {
                ...state, count: state.start, disabled: true, display: false
            }
        case 'RESET-BUTTON': {
            return {
                ...state, count: state.start
            }
        }
        case 'ON-CHANGE-START-VALUE': {
            return {...state, display: true, disabled: false, start: Number(action.e.currentTarget.value)}
        }
        case 'ON-CHANGE-MAX-VALUE': {
            return {...state, display: true, disabled: false, max: Number(action.e.currentTarget.value)}
        }
        case 'INC-VALUE=FROM-LOCAL-STORAGE':
            return {
                ...state, count: action.count
            }
        default:
            return state
    }

}

export const incButtonAC = () => ({type: 'INC-BUTTON'} as const)
export const setButtonAC = () => ({type: 'SET-BUTTON'} as const)
export const resetButtonAC = () => ({type: 'RESET-BUTTON'} as const)
export const onChangeStartValueAC = (e: ChangeEvent<HTMLInputElement>) => ({type: 'ON-CHANGE-START-VALUE', e} as const)
export const onChangeMaxValueAC = (e: ChangeEvent<HTMLInputElement>) => ({type: 'ON-CHANGE-MAX-VALUE', e} as const)
export const setValueFromLocalStorageAC = (count: number, max: number) => ({type: 'INC-VALUE=FROM-LOCAL-STORAGE', count, max} as const)


export type IncValueActionType = ReturnType<typeof incButtonAC>
export type SetButtonActionType = ReturnType<typeof setButtonAC>
export type ResetButtonActionType = ReturnType<typeof resetButtonAC>
export type OnChangeStartValueActionType = ReturnType<typeof onChangeStartValueAC>
export type OnChangeMaxValueActionType = ReturnType<typeof onChangeMaxValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType =
    IncValueActionType
    | SetValueFromLocalStorageActionType
    | OnChangeStartValueActionType
    | OnChangeMaxValueActionType
    | SetButtonActionType
    | ResetButtonActionType