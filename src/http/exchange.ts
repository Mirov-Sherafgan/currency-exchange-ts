import {AppDispatch} from "../store";
import {APIKEY, http} from "./index";
import {setBaseExchange, setCurrencyOptions, setExchangeRate, setFromCurrency, setToCurrency} from "../store/exchange";
import {AxiosError, AxiosResponse, CanceledError} from "axios";
import {HandledError} from "@reduxjs/toolkit/dist/query/HandledError";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {ListenerErrorHandler} from "@reduxjs/toolkit";

export const exchangeApi = () => async (dispatch: AppDispatch) => {
    try {
        const {data}: AxiosResponse = await http.get<object[]>('https://api.apilayer.com/fixer/latest')

        const firstCurrency = Object.keys(data.rates)[0]
        dispatch(setCurrencyOptions(data.rates))
        dispatch(setBaseExchange(data.base))
        dispatch(setFromCurrency(data.base))
        dispatch(setToCurrency(firstCurrency))
        dispatch(setExchangeRate(data.rates[firstCurrency]))
    } catch (e) {
        // @ts-ignore
        console.log(e.message)
    }
}

export const getNewExchangeApi = (to : string, from: string, amount: number) => async (dispatch: AppDispatch) => {
    dispatch(setBaseExchange(''))
    try {
        const {data} = await http.get(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`)
        dispatch(setExchangeRate(data.result))
    } catch (e) {
        // @ts-ignore
        console.log(e.message)
    } finally {
        dispatch(setBaseExchange('EUR'))
    }
}