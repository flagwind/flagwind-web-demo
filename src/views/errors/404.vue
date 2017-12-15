<template>
    <div class="v-error v-error-404">
        <div class="v-error-content">
                <i-card>
                    <p class="v-error-content-title">4<span class="v-error-404-icon-1"><i-icon type="ios-navigate-outline"></i-icon></span>4</p>
                    <p class="v-error-content-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
                    <p class="v-error-button-strip">
                        <i-button @click="onBackHome" size="large" type="text">返回首页</i-button>
                        <i-button @click="onBackPrev" size="large" type="primary">返回上一页</i-button>
                    </p>
                </i-card>
        </div>
    </div>
</template>

<style lang="less">
    @import "./404.less";
</style>

<script lang="ts">
import { component, View } from "flagwind-web";

@component
export default class Error404 extends View
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