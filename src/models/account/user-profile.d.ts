/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

/**
 * 表示一个用户模型的定义。
 * @interface
 * @version 1.0.0
 */
export default interface IUserProfile
{
    /**
     * 获取或设置用户编号。
     * @member
     * @returns string
     */
    userId: string;
    
    /**
     * 获取或设置用户名。
     * @member
     * @returns string
     */
    username: string;
    
    /**
     * 获取或设置用户昵称。
     * @member
     * @returns string
     */
    nickname?: string;
    
    /**
     * 获取或设置用户性别。
     * @member
     * @returns boolean
     */
    gender?: boolean;

    /**
     * 获取或设置用户的头像标识(图片URL)。
     * @member
     * @returns string
     */
    avatar?: string;
}
