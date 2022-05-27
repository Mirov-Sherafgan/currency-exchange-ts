import React, {useEffect} from 'react';
import {useAppDispatch} from "./hooks/useReduxHooks";
import {Route, Routes} from "react-router-dom";
import CurrentExchange from "./components/CurrentExchange/CurrentExchange";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/Home";
import {exchangeApi} from "./http/exchange";

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(exchangeApi())
    }, [])

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route index element={<CurrentExchange/>}/>
                    <Route path='exchange' element={<Exchange/>}/>
                </Route>
            </Routes>
        </React.Fragment>
    )
}
export default App;