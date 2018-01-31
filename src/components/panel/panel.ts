/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import { component, Component } from "flagwind-web";

import "./panel.less";

@component({ template: require("./panel.html") })
export default class Panel extends Component
{
    protected mounted(): void
    {
        console.log("panel....");
    }
}
