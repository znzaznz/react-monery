import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Tags from "../../views/Tags/Tags";
import Money from "../../views/Money/Money";
import Statistics from "../../views/Statistics/Statistics";
import NoShow from "../../views/NoShow/NoShow";
import Tag from "../../views/Tag"

export default function index() {
    return (
        <Switch>
            <Route path={"/tags/:tag"} exact>
                <Tag/>
            </Route>
            <Route path={"/tags"} exact={true}>
                <Tags/>
            </Route>
            <Route path={"/money"} exact>
                <Money/>
            </Route>
            <Route path={"/statistics"} exact>
                <Statistics/>
            </Route>
            <Redirect exact from={"/"} to={"/money"}/>
            <Route path={"*"}>
                <NoShow/>
            </Route>
        </Switch>
    )
}