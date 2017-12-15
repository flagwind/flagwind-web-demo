<template>
    <div class="v-error v-error-500">
        <div class="v-error-content">
                <i-card>
                    <p class="v-error-content-title">
                        5<span class="v-error-500-icon"><i-icon type="social-freebsd-devil"></i-icon></span><span class="v-error-500-icon"><i-icon type="social-freebsd-devil"></i-icon></span>
                    </p>
                    <p class="v-error-content-message">Sorry! the server has an error.</p>
                    <p class="v-error-button-strip">
                        <i-button @click="onBackHome" size="large" type="text">返回首页</i-button>
                        <i-button @click="onBackPrev" size="large" type="primary">返回上一页</i-button>
                    </p>
                </i-card>
        </div>
    </div>
</template>

<style lang="less">
    @import "./500.less";
</style>

<script lang="ts">
import { component, View } from "flagwind-web";

@component
export default class Error500 extends View
{
    protected onBackHome(e: MouseEvent): void
    {
        this.$router.push("home");
    }
    
    protected onBackPrev(e: MouseEvent): void
    {
        this.$router.go(-1);
    }
}
</script>
