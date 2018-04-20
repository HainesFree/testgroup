<template>
  <div class="clearfix mov">
    <div class="mov-container" v-for="item in data.moments" >
      <div class="mov-item" >
        <div class="mov-img" v-for="photo in item.moment.medias" @click="toOther">
          <img :src="photo" alt="">
          <img src="../../../assets/image/player.png" alt="" class="player">
        </div>
        <div class="mov-con">{{item.moment.content}}</div>
        <div class="mov-data">
          <div class="mov-data-l"><img :src="item.user.avatar" alt=""><span>{{item.user.nickname}}</span></div>
          <div class="mov-data-r" :class="{bg1:chose1,bg2:chose2}" @click="changeBg"><span>{{item.moment.like}}</span> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img1 from "../../../../static/image/head.png"
  import img2 from "../../../../static/image/cat.png"
  import img3 from "../../../../static/image/cm.png"
  import img4 from "../../../../static/image/pada.png"
  import img5 from "../../../../static/image/sport.png"
    export default {
      name: "mov_hot",
      data() {
        return {
          chose1: true,
          chose2: false,
          data:{
            "users": [
              {
                "id": "123456",
                "avatar": img1,
                "nickname": "陈粒1"
              },
              {
                "id": "123456",
                "avatar": img2,
                "nickname": "陈粒2"
              },
              {
                "id": "123456",
                "avatar": img3,
                "nickname": "陈粒3"
              },
              {
                "id": "123456",
                "avatar": img4,
                "nickname": "陈粒4"
              },
              {
                "id": "123456",
                "avatar": img1,
                "nickname": "陈粒5"
              },
              {
                "id": "123456",
                "avatar": img1,
                "nickname": "陈粒6"
              },
              {
                "id": "123456",
                "avatar": img2,
                "nickname": "陈粒7"
              },
              {
                "id": "123456",
                "avatar": img3,
                "nickname": "陈粒8"
              },
              {
                "id": "123456",
                "avatar": img1,
                "nickname": "陈粒9"
              },
              {
                "id": "123456",
                "avatar": img2,
                "nickname": "陈粒10"
              },
              {
                "id": "123456",
                "avatar": img3,
                "nickname": "陈粒"
              },
              {
                "id": "123456",
                "avatar": img4,
                "nickname": "陈粒"
              }
            ],
            "moments": [
              {
                "user": {
                  "id": "123456",
                  "avatar": img2,
                  "nickname": "haines"
                },
                "moment": {
                  "id": "123456",
                  "content": "娇小女生需要健身吗？又要如何健身、锻炼呢",
                  "medias": [img5],
                  "like": 666,
                  "liked": 0
                }
              },
              {
                "user": {
                  "id": "123456",
                  "avatar": img2,
                  "nickname": "haines"
                },
                "moment": {
                  "id": "123456",
                  "content": "娇小女生需要健身吗？又要如何健身、锻炼呢",
                  "medias": [img4],
                  "like": 66,
                  "liked": 0
                }
              },
              {
                "user": {
                  "id": "123456",
                  "avatar": img2,
                  "nickname": "haines"
                },
                "moment": {
                  "id": "123456",
                  "content": "娇小女生需要健身吗？又要如何健身、锻炼呢",
                  "medias": [img3],
                  "like": 6,
                  "liked": 0
                }
              }
            ]
          }
        }
      },
      methods: {
        changeBg() {
          this.chose1 = !this.chose1;
          this.chose2 = !this.chose2
        },
        toOther(){
          alert("跳转到动态详情页")
        }

      }
    }
</script>

<style scoped>
  .bg1{
    background: url("../../../assets/image/kheart@3x.png") no-repeat 0 center;
    background-size:17px 17px;
  }
  .bg2{
    background: url("../../../assets/image/heart@2x.png") no-repeat 0 center;
    background-size:17px 17px;
  }
  .mov{
    width: 100%;
    margin: 0 auto;
  }
  .mov-container{
    float: left;
    width: 44%;
    margin:4% 0 0 4%;
  }
  .mov-item{
    width: 100%;
    height: 240px;
    background: #FFFFFF;
    border-radius: 5px;
  }
  .mov-img{
    position: relative;
    width: 100%;
    height: 144px;
    background-size:100% 144px ;
    border-radius: 5px;
  }
  .mov-img .player{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
    width: 40px;
    height: 40px;
  }
  .mov-img img{
    width: 100%;
    height: 144px;
    border-radius: 5px;
  }
  .mov-con{
    box-sizing: border-box;
    width: 100%;
    padding: 0 6px;
    margin-top: 7px;
    font-size: 12px;
    color: #333333;
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .mov-data{
    display: flex;
    justify-content: space-between;
    /*align-items: center;*/
    height: 22px;
    padding: 0 6px;
    margin-top: 16px;
  }
  .mov-data-l,.mov-data-r{
    font-size: 0;
  }
  .mov-data-l span{
    font-size:12px;
    color: #333333;
    line-height: 22px;
  }
  .mov-data-l img{
    width: 22px;
    height: 22px;
    margin-right: 6px;
    border-radius: 50%;
    vertical-align: top;
  }
  .mov-data-r{
    height: 22px;
    padding-left: 21px;
  }
  .mov-data-r span{
    display: inline-block;
    height: 16px;
    font-size:12px;
    color: #333333;
    line-height: 22px;
  }
  .mov-data-r img{
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-top: 3px;
    margin-right: 4px;
  }
</style>
<style>
  body{
    background: #F8F8F8;
  }
</style>
