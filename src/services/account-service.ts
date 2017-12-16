/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import flagwind from "flagwind-core";
import { ICredential, IUserProfile } from "src/models";
import ServiceBase from "./service-base";

/**
 * 提供账号相关的服务。
 * @class
 * @version 1.0.0
 */
@flagwind.injectable()
export default class AccountService extends ServiceBase
{
    /**
     * 用户登录。
     * @param  {string} username 用户名。
     * @param  {string} password 密码。
     * @returns Promise
     */
    public async login(username: string, password: string): Promise<ICredential>
    {
        return new Promise<ICredential>((resolve, reject) =>
        {
            // DEBUG:与服务器通讯
            if(username !== "13800138000")
            {
                // 用户实体
                let user: IUserProfile =
                {
                    userId: "001002003",
                    username: username,
                    nickname: "jason",
                    gender: true,
                    avatar: "http://diy.qqjay.com/u2/2014/1026/ba921a7cd9ea599da66731d58c3e8ca2.jpg"
                };
                
                // 安全凭证
                let credential: ICredential =
                {
                    credentialId: "666688889999",
                    expires : new Date("2018-12-15T01:24:00"),
                    userId: user.userId,
                    user: user
                };
                
                // 重要: 一定要保存用户凭票至应用上下文中
                this.applicationContext.principal = new flagwind.Principal(credential);
                
                resolve(credential);
            }
            else
            {
                reject("您的账号已被禁用，请联系代理商。");
            }
        });
    }
    
    /**
     * 退出登录。
     * @async
     * @returns Promise
     */
    public async logout(): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            // DEBUG:与服务器通讯

            // 重要: 一定要重置应用上下文中的凭票
            this.applicationContext.principal = null;
        });
    }
    
    /**
     * 修改密码。
     * @async
     * @param  {string} username 用户名。
     * @param  {string} password 密码。
     * @returns Promise
     */
    public async changePassword(username: string, password: string): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            if(username !== "18682189878")
            {
                resolve();
            }
            else
            {
                reject("您的账号已被禁用，请联系管理员。");
            }
        });
    }
}
