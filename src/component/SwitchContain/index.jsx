import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Tags from "../../views/Tags/Tags";
import Money from "../../views/Money/Money";
import Statistics from "../../views/Statistics/Statistics";
import NoShow from "../../views/NoShow/NoShow";

export default function index() {
    return (
        <Switch>
            <Route path={"/tags"}>
                <Tags/>
            </Route>
            <Route path={"/money"}>
                <Money/>
            </Route>
            <Route path={"/statistics"}>
                <Statistics/>
            </Route>
            <Redirect exact from={"/"} to={"/money"}/>
            <Route path={"*"}>
                <NoShow/>
            </Route>
        </Switch>
    )
}