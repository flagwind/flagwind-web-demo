<template>
    <div class="v-login" @keydown.enter="onSubmit">
        <!--粒子特效 BEGIN-->
        <div class="v-login-effect"></div>
        <!--粒子特效 END-->
        
        <!--登录正文 BEGIN-->
        <div class="v-login-content">
            <h1>SAAS</h1>
            <h2>数据管理中心</h2>
            <i-form ref="loginForm" :model="model" :rules="rules" inline>
                <i-form-item prop="username">
                    <i-input v-model="model.username" size="large" placeholder="用户名">
                    </i-input>
                </i-form-item>

                <i-form-item prop="password">
                    <i-input v-model="model.password" size="large" placeholder="密码">
                    </i-input>
                </i-form-item>
            </i-form>
            <i-button @click="onSubmit" type="primary">登录</i-button>
        </div>
        <!--登录正文 END-->
    </div>
</template>

<style lang="less">
    @import "./login.less";
</style>

<script lang="ts">
import iView from "@iview/index";
import { component, View } from "flagwind-web";
import { ILoginModel } from "src/models";
import { AccountService } from "src/services";
import { particle as Particle } from "jparticles";

/**
 * 登录视图。
 * @class
 * @version 1.0.0
 */
@component
export default class LoginView extends View
{
    private _particle: any;                             // 背景粒子动画实例
    private _accountService: AccountService;            // 账户服务实例
    
    /**
     * 获取或设置视图使用的模型实例。
     * @protected
     * @member
     * @returns ILoginModel
     */
    protected model: ILoginModel =
    {
        username: "",

        password: ""
    };

    /**
     * 获取或设置视图使用的模型验证规则。
     * @protected
     * @member
     * @returns any
     */
    protected rules: any =
    {
        username:
        [
            {
                required: true,
                message: "用户名不能为空",
                trigger: "blur"
            }
        ],
        password:
        [
            {
                required: true,
                message: "密码不能为空",
                trigger: "blur"
            }
        ]
    };
    
    /**
     * 获取或设置当前视图使用的表单组件实例。
     * @protected
     * @property
     * @returns IForm
     */
    protected get $form(): iView.IForm
    {
        return this.$refs.loginForm as iView.IForm;
    }
    
    /**
     * 获取账户服务实例。
     * @protected
     * @property
     * @returns AccountService
     */
    protected get accountService(): AccountService
    {
        if(!this._accountService)
        {
            this._accountService = this.serviceProvier.resolve<AccountService>(AccountService);
        }
        
        return this._accountService;
    }
    
    /**
     * 创建组件时调用的钩子方法。
     * @protected
     * @returns void
     */
    protected mounted(): void
    {
        // 初始化背景动画
        this._particle = new Particle(".v-login-effect",
        {
            minSpeed: 0.2,
            maxSpeed: 0.4,
            color: "#52a7e6",
            lineShape: "spider",
            range: 10000,
            proximity: 100,
            lineWidth: 1,
            minR: 3.5,
            maxR: 3.5,
            parallax: false
        });
    }
    
    /**
     * 当提交登录表单时调用。
     * @protected
     * @param  {MouseEvent} e 鼠标事件参数。
     * @returns void
     */
    protected onSubmit(e: MouseEvent)
    {
        this.$form.validate(async(isValid: boolean) =>
        {
            if(isValid)
            {
                try
                {
                    // 同步调用服务进行登陆
                    await this.accountService.login(this.model.username, this.model.password);
                    
                    // 登陆成功跳转至 dashboard 路由
                    this.$router.push("dashboard");
                }
                catch(error)
                {
                    this.$message.error(error);
                }
            }
        });
    }
}
</script>
