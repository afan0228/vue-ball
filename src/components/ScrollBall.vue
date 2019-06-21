<template>
    <div class="ball" :style="style" :id='ballId'><slot></slot></div>
</template>
<script>
export default {
    name:'scroll-bal',
    data(){
        return{

        }
    },
    props:{
        color:{
            type:String,
            default:'blue'
        },
        value:{
            type:Number,
            default:0
        },
        target:{
            type:Number,
            default:400
        }
    },
    methods:{
        stop(){
            cancelAnimationFrame(this.timer)
        },
        start(){
            cancelAnimationFrame(this.timer);
            requestAnimationFrame(this.fn)
        },
        rstart(){
            cancelAnimationFrame(this.timer);
            this.$emit('update:value',this.val);
            this.timer=requestAnimationFrame(this.fn)
        }
    },
    mounted(){
        let ball=document.getElementById(this.ballId);

        this.timer;
        this.val=this.value;
        this.fn=()=>{
            let left=this.value;
            if(left>=this.target){
               return cancelAnimationFrame(this.timer)
            }
            // this.$emit('input',left+2);
            this.$emit('update:value',left+1);
            ball.style.transform=`translate(${this.value}px)`;
            this.timer=requestAnimationFrame(this.fn)
        }
        this.timer=requestAnimationFrame(this.fn)
    },
    computed:{
        style(){
            return {background:this.color}
        },
        ballId(){
            return `ball`+this._uid;
        }
    }
}
</script>

<style scoped lang="less">
.ball{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    border: blue solid 1px;
    color: @color;
}
</style>
