import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";

interface exchangeState {
    currencyOptions: any[] | any
    baseExchange: string
    fromCurrency: string
    toCurrency: string,
    exchangeRate: null | undefined | number
}

const initialState: exchangeState = {
    currencyOptions: [],
    baseExchange: '',
    fromCurrency: '',
    toCurrency: '',
    exchangeRate: null
}

export const exchangeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCurrencyOptions(state, action: PayloadAction<any[]>) {
            state.currencyOptions = action.payload
        },
        setBaseExchange(state, action: PayloadAction<string>) {
            state.baseExchange = action.payload
        },
        setFromCurrency(state, action: PayloadAction<string>) {
            state.fromCurrency = action.payload
        },
        setToCurrency(state, action: PayloadAction<string>) {
            state.toCurrency = action.payload
        },
        setExchangeRate(state, action: PayloadAction<number>) {
            state.exchangeRate = action.payload
        }
    }
})

export const { setCurrencyOptions, setBaseExchange, setFromCurrency, setToCurrency, setExchangeRate } = exchangeSlice.actions;

export default exchangeSlice.reducer