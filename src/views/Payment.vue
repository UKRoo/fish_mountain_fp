<template>
    <div class="pay-wrap">
        <h2>Payment options</h2>
        <div class="pay-logo">
            <div v-for="(n, index) in 6" :key="index">
                <img :src="`/img/pay/pay_${n}.png`">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.pay-wrap {
display: flex;
flex-direction: column;
}
.pay-logo {
    margin-top: 82px;
display: flex;
justify-content: space-between;
}
    h2 {
        font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
letter-spacing: 0.06em;
color: #302640;
    }
</style>