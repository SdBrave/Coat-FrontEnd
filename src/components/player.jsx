import React from 'react';
import Cards from './cards';
import { useSearchParams } from "react-router-dom";
function Players() {
    let [searchParams, setSearchParams] = useSearchParams();
    return (<div className='container'><Cards id={searchParams.get("id")}/></div>); 
}

export default Players;