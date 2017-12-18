<template>
    <div>
        <fw-number-counter style="font-size:48px;" :value="value"></fw-number-counter>
        <br />
        <i-button @click="value += 10">加值</i-button>
        <i-button @click="value -= 10">减值</i-button>
    </div>
</template>

<style lang="less">
    @import "./dashboard.less";
</style>

<script lang="ts">
import { component, View } from "flagwind-web";

@component
export default class Dashboard extends View
{
    protected value: number = 123456;
}
</script>
