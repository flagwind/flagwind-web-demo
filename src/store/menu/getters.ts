/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import { IMenuItem } from "src/models";
import { Getter, GetterTree } from "vuex";
import State from "./state";

export function items(state: State): Array<IMenuItem>
{
    return state.items;
}

export function item(state: State): Function
{
    return (path: string) =>
    {
        return state.findItem(path);
    };
}

export default <GetterTree<State, any>>
{
    items,
    item
};
