import React, {FormEvent, useState, Suspense, useEffect} from 'react';
import Dropdown from "../../layout/Dropdown";
import {useAppDispatch, useAppSelector} from "../../../hooks/useReduxHooks";
import {setFromCurrency, setToCurrency} from "../../../store/exchange";
import {getNewExchangeApi} from "../../../http/exchange";

const Form = () => {
    const dispatch = useAppDispatch()
    const {
        currencyOptions,
        baseExchange,
        fromCurrency,
        toCurrency,
        exchangeRate
    } = useAppSelector((state) => state.exchange)
    const optionList = Object.keys(currencyOptions).slice(0, 20)
    const [amount, setAmount] = useState<number>(1)

    useEffect(() => {
        if (currencyOptions.length !== 0 && exchangeRate !== null) {
            dispatch(getNewExchangeApi(toCurrency, fromCurrency, amount))
        }
    }, [fromCurrency, toCurrency])

    const handleFromChange = (currency: string) => {
        dispatch(setFromCurrency(currency))
    }

    const handleToChange = (currency: string) => {
        dispatch(setToCurrency(currency))
    }

    const handleAmountChange = (event: FormEvent<HTMLInputElement>) => {
        const newValue = +event.currentTarget.value
        setAmount(newValue)
    }

    if (currencyOptions.length === 0 || !baseExchange) return <h1>Loading....</h1>

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <form className="w-full max-w-2xl">
                <div className="flex -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name">
                            Amount
                        </label>
                        <input
                            className="appearance-none block w-full bg-blue-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-first-name"
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <Dropdown
                        label='From'
                        onChangeCurrency={handleFromChange}
                        selectedCurrency={fromCurrency}
                        options={[baseExchange, ...optionList]}
                    />
                    <Dropdown
                        label='To'
                        onChangeCurrency={handleToChange}
                        selectedCurrency={toCurrency}
                        options={[baseExchange, ...optionList]}
                    />
                </div>
                <div className="flex flex-wrap items-end -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            Result
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="text"
                            disabled
                            value={exchangeRate ? exchangeRate * amount : ''}
                        />
                    </div>
                </div>
            </form>
        </Suspense>
    );
};

export default Form;