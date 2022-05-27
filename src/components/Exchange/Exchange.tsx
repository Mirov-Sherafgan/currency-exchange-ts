import React from 'react';
import {useAppSelector} from "../../hooks/useReduxHooks";

interface ICurrency {
    exchangeBy: string
    exchangeRate: number
    label: string
    value: string,
    base: string,
    baseExchangeRate: number
}

const Exchange: React.FC = () => {
    const {currencyOptions, baseExchange} = useAppSelector(state => state.exchange)
    const newCurrency: Array<ICurrency> = Object.entries(currencyOptions).map((elem: any[]) => {
        const exchangeBy = elem[0]
        const exchangeRate = elem[1]
        return {
            label: exchangeBy,
            value: exchangeRate,
            exchangeBy,
            exchangeRate,
            base: baseExchange,
            baseExchangeRate: currencyOptions[baseExchange]
        }
    }).slice(0, 21);
    return (
        <div>
            <h2 className='text-3xl mb-12'>Курс валют</h2>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">Таблица</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <main className='max-h-[450px] overflow-auto grid grid-cols-3'>
                {newCurrency.map(el => <ul className='grid border-b-2 items-center  py-4 font-bold grid-cols-[20px_50px_20px_120px_auto] grid-rows-1' key={el.value}>
                    <li>{el.baseExchangeRate}</li>
                    <li>{el.base}</li>
                    <li>=</li>
                    <li>{el.value}</li>
                    <li>{el.exchangeBy}</li>
                </ul>)}
            </main>
        </div>
    );
};

export default Exchange;