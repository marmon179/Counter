const initialState = {
    count: 0,
    start: 0,
    max: 0,
    disabled: false,
    display: true
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INC-BUTTON':
            const stateCopy = {...state}

            return {
                ...state,
            }
        case 'SET-BUTTON'  : {
            const stateCopy = {...state}
            stateCopy.count = stateCopy.start
            stateCopy.disabled = true
            stateCopy.display = false
            return {
                ...state
            }
        }
        case 'RESET-BUTTON': {
            const stateCopy = {...state}
            stateCopy.count = stateCopy.start
            return {
                ...state
            }
        }
        case 'ON-CHANGE-START-VALUE': {
            const stateCopy = {...state}
            // const setStart = (e: ChangeEvent<HTMLInputElement>) => {
            //    return  Number(e.currentTarget.value)
            // }
            // stateCopy.start = setStart
            stateCopy.display = true
            stateCopy.disabled = false
        }
            return {
                ...state,
            }
        case 'ON-CHANGE-MAX-VALUE': {
            const stateCopy = {...state}
            const setMax = () => {
            }
            stateCopy.display = true
            stateCopy.disabled = false
            return {...state}
        }
        case 'INC-VALUE=FROM-LOCAL-STORAGE':
            return {
                ...state, count: action.count
            }
        default:
            return state
    }

}

export const incButtonAC = (count:number,max:number) => ({type: 'INC-BUTTON'} as const)
export const setButtonAC = () => ({type: 'SET-BUTTON'} as const)
export const resetButtonAC = () => ({type: 'RESET-BUTTON'} as const)
export const onChangeStartValue = () => ({type: 'ON-CHANGE-START-VALUE'} as const)
export const onChangeMaxValue = () => ({type: 'ON-CHANGE-MAX-VALUE'} as const)
export const setValueFromLocalStorageAC = (count: number, max: number) => ({
    type: 'INC-VALUE=FROM-LOCAL-STORAGE',
    count,
    max
} as const)


export type IncValuesActionType = ReturnType<typeof incButtonAC>
export type setButtonActionType = ReturnType<typeof setButtonAC>
export type resetButtonActionType = ReturnType<typeof resetButtonAC>
export type onChangeStartValueActionType = ReturnType<typeof onChangeStartValue>
export type onChangeMaxValueActionType = ReturnType<typeof onChangeMaxValue>
export type setValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType =
    IncValuesActionType
    | setValueFromLocalStorageActionType
    | onChangeStartValueActionType
    | onChangeMaxValueActionType
    | setButtonActionType
    | resetButtonActionType