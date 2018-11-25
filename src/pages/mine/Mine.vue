<template>
<div>
    <app-header title="我的">

    </app-header>
    <div class="box">
        <marquee >
            <span>欢迎尊敬的超级VIP用户：</span>
            <span class="user" v-text="msg"></span>
        </marquee> 
    </div>
    <div class="leaveBox">
       <a @click="leaveAction()">退出登录</a> 
    </div>
</div>
</template>

<script>
export default {
    data(){
        let user=localStorage.getItem('user');
        return{
            msg:user
        }
    },
    methods:{
        leaveAction(){
            localStorage.removeItem('token');
            this.$router.push("/login");
        }
    }
};
</script>

<style lang="scss" scoped>

.box{
    background: red;
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    
    .user{
        color: yellow;
    }
}
.leaveBox{
    background: red;
    position: absolute;
    bottom: 49px;
    left: 0;
    width: 100%;
    a{
        display: block;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #fff;
    }
}
</style>


