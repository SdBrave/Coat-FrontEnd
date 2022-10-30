import React from 'react';
import Cards from './cards';
import { useSearchParams } from "react-router-dom";
function Players() {
    let [searchParams, setSearchParams] = useSearchParams();
    return (<Cards id={searchParams.get("id")}/>); 
}

export default Players;