<template>
        <div class="tab-bar-item" @click="itemClick":style="{color:changeColor}" >
            <slot name="icon"></slot>
            <slot name="text"></slot>
        </div>
</template>

<script>
    export default {
        name: "TabBarlitenm",
        props:{
            path:String,
            col:{
             type:String,
             default:"red"
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !==-1
            },
            changeColor(){
                return this.isActive ? this.col :""
            }
        },
        methods:{
            itemClick(){
                console.log(this.$router);
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        margin-top: 5px;
        flex: 1;
    }
   /* .active{
        color: red;
    }
*/
</style>