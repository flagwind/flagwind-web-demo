<template>
    <div class="v-login">
        <div id="v-login-effect" class="v-login-effect"></div>
        <div class="v-login-content">
            <h1>XX系统</h1>
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
    </div>
</template>

<style lang="less">
    @import "./login.less";
</style>

<script lang="ts">
import { component, View } from "flagwind-web";
import { ILoginModel } from "@/models";
import { particle as Particle } from "jparticles";

@component
export default class Login extends View
{
    private particle: any;

    protected model: ILoginModel =
    {
        username: "",
        password: ""
    };

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
    
    protected mounted(): void
    {
        this.particle = new Particle("#v-login-effect",
        // tslint:disable-next-line:align
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

    protected onSubmit(e: MouseEvent)
    {
        let loginForm = this.$refs.loginForm as any;

        loginForm.validate((isValid: boolean) =>
        {
            if(isValid)
            {
                console.log(this.model.username);
                console.log(this.model.password);

                // todo
            }
        });
    }
}
</script>

