/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

/**
 * 表示一个登录模型的定义。
 * @interface
 * @version 1.0.0
 */
export default interface ILoginModel
{
    /**
     * 获取或设置用户名。
     * @property
     * @returns string
     */
    username: string;
    
    /**
     * 获取或设置密码。
     * @property
     * @returns string
     */
    password: string;
}
