//好友资料组件
<template>
    <div class="friendWindow">
        <div class="friendArea">
            <div id="friendAvatar">
                头像：<el-avatar  shape="square" :size="100" fit="cover" :src="friendAvatar"></el-avatar>
            </div>
            <div id="friendNickname">
                昵称：<span class="headText">{{friendNickname}}</span>
            </div>
            <div id="friendId">
                账号：{{friendId}}
            </div>
            <el-button id="send" @click="toChat()">发送消息</el-button>
            <el-button id="delete" @click="deleteFriend()">删除好友</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            friendId:String,    //好友ID
            friendNickname:String,  //好友昵称
            friendAvatar:String,    //好友头像
        },
        data(){
            return{
            }
        },
        methods:{
            toChat(){
                if(this.$store.getters['friendInfo/getFriend'](this.friendId).recentMessage.message === undefined) // 好友未在聊天列表中
                {
                    let info = [];
                    info.push({id:this.friendId,newInfo:false,unread_num:0,message:"",time:""});
                    this.$store.commit('friendInfo/addRecent',info);
                }
                this.$emit('toChat',this.friendId,this.friendNickname,this.friendAvatar);
            },
            deleteFriend(){
                this.$emit('deleteFriend',this.friendId);
            }

        }
    };
</script>

<style lang="css" scoped>
    .friendWindow{
        font-size: 20px;
        background: rgba(249, 249, 249, 0.98);
        height: 100%;
        width: 100%;
        position: fixed;
        text-align: left;
        color: black;
        font-family: sans-serif;
    }
    .friendArea{
        background-color: #e8e6e6;
        width: 480px;
        height: 320px;
        position: fixed;
        left:48%;
        top:20%;
        box-shadow: 8px 8px 10px #888888;
        border-radius: 5px;
    }
    #friendAvatar{
        position:relative;
        top:30px;
        left:140px;
    }
    #friendNickname{
        position:relative;
        top:45px;
        left:140px;
    }
    #friendId{
        position:relative;
        top:60px;
        left:140px;
    }
    #send{
        position:relative;
        top:80px;
        left:120px;
        background-color: rgb(62, 204, 58);
        color:white;
    }
    #send:hover{
        background-color:  rgb(30, 122, 30);
        color:white;
    }
    #delete{
        position:relative;
        top:80px;
        left:170px;
        background-color: rgb(241, 48, 48);
        color:white;
    }
    #delete:hover{
        background-color:  rgb(189, 19, 19);
        color:white;
    }

</style>
