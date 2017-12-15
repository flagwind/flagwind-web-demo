/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

const routes =
[
    {
        name: "login",
        path: "/login",
        component: (resolve: any) => (<any>require)(["@/views/login/login.vue"], resolve)
    },
    {
        name: "500",
        path: "/500",
        component: (resolve: any) => (<any>require)(["@/views/errors/500.vue"], resolve)
    },
    {
        name: "403",
        path: "/403",
        component: (resolve: any) => (<any>require)(["@/views/errors/403.vue"], resolve)
    },
    {
        name: "404",
        path: "/*",
        component: (resolve: any) => (<any>require)(["@/views/errors/404.vue"], resolve)
    }
];

export default routes;
