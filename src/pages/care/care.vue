<template>
  <div class="container">
    <!--未有关注的动态情况-->
    <div class="bg" v-if="!isCare">
      <div class="no-care-head">还没有关注的对象啊，快去开启新世界~</div>
      <div class="no-care-con">
        <div class="no-care-title">推荐关注</div>
        <!--推荐的用户列表-->
        <div class="active-con ">
          <div class="no-care-container clearfix">
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/pada.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cm.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/heart.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>

            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/pada.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cm.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/heart.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/pada.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cm.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/heart.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--已有关注的动态情况-->
    <div v-if="isCare">
      <!--关注的动态-->
      <div class="bg">
        <div class="sq-dynamic" v-for="careItem in data.moments">
          <div class="dynamic-head">
            <div class="dynamic-head-l"><img :src="careItem.user.avatar" alt=""></div>
            <div class="dynamic-head-r">
              <h2>{{careItem.user.nickname}}</h2>
              <p>{{careItem.moment.created_at}}</p>
            </div>
          </div>
          <div class="dynamic-content">
            <div class="con-font">{{careItem.moment.content}}</div>
            <!--判断内容为照片或则视频-->
            <div class="photo" >
              <div class="img" v-for="item in careItem.moment.medias">
                <img :src="item" alt="">
              </div>
            </div>

            <div class="con-footer">
              <div class="dy-share"><img src="../../assets/image/resend.png" alt="" @click="shareMenu"><span>{{careItem.moment.share}}</span></div>
              <div class="dy-msg"><img src="../../assets/image/msg.png" alt="" @click="rating"><span>{{careItem.moment.comment}}</span></div>
              <div class="dy-zan bg1"  :class="{bg2:careItem.moment.liked}" @click="changeBg()"><span>{{careItem.moment.like}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../../assets/image/cm.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>Rena</h2>
            <p>2-23</p>
          </div>
        </div>
        <!--电影展示模块-->
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="mov">
              <video
                id="my-player"
                class="video-js"
                controls
                preload="auto"
                poster=""
                data-setup='{}'
                style="width: 100%;height:100%"
              >
                <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div class="con-footer">
            <div class="dy-share"><img src="../../assets/image/resend.png" alt=""><span>0</span></div>
            <div class="dy-msg"><img src="../../assets/image/msg.png" alt=""><span>34</span></div>
            <div class="dy-zan"><img src="../../assets/image/heart2x.png" alt=""><span>34</span></div>
          </div>
        </div>
      </div>
    </div>
      <!--推荐的用户--可关闭-->
      <div class="bg" v-if="isUser">
        <div class="active-user">
            <div class="active-head">
              <div class="active-head-l">这些用户最近很活跃哦~</div>
              <div class="active-head-r" @click="shut">关闭</div>
            </div>
          <!--左右滑动区域-->
          <div class="active-con">
            <div class="box-container">
              <div class="box-item" v-for="user in data.users">
                <div class="item-head"><img :src="user.avatar" alt=""></div>
                <div class="item-name">{{user.nickname}}</div>
                <div class="item-fans"><span class="fans-num">{{user.follower}}粉丝</span><span>{{user.like}}喜欢</span></div>
                <div class="item-care" v-show="addAttend" @click="addControle">已关注</div>
                <div class="item-no-care" v-show="!addAttend" @click="addControle">+关注</div>
              </div>
              <img src="../../assets/image/rr.png" alt="" class="change">
            </div>
          </div>
        </div>
      </div>
      <!--关注的求助-->
      <div class="bg">
        <div class="care-help">
          <div class="head-bg">
            <div class="care-head">
              <div class="care-head-l"><img src="../../assets/image/heart2x.png" alt="">关注的求助</div>
              <div class="care-head-r"><img src="../../assets/image/down@1x.png" alt=""></div>
            </div>
          </div>
          <div class="sq-dynamic" v-for="help in data.helps">
            <div class="dynamic-head" >
              <div class="dynamic-head-l" ><img :src="help.user.avatar" alt=""></div>
              <div class="dynamic-head-r">
                <h2>{{help.user.nickname}}</h2>
                <p>{{help.help.created_at}}</p>
              </div>
            </div>
            <div class="dynamic-content">
              <div class="con-font">
                <div class="show-msg"><img src="../../assets/image/foot2x.png" alt="">已走失<span>{{help.help.day}}</span>天</div>
                {{help.help.name}}  {{help.help.gender}}  {{help.help.age}}
              </div>
              <div class="photo">
                <div class="img" v-for="photoItem in help.help.medias"><img :src="photoItem" alt=""></div>
              </div>
              <div class="map"><img src="../../assets/image/map.png" alt="">{{help.help.address}}</div>
              <div class="con-footer">
                <div class="dy-share" @click="shareMenu"><img src="../../assets/image/resend.png" alt=""><span>{{help.help.share}}</span></div>
                <div class="dy-msg2" @click="rating"><img src="../../assets/image/msg.png" alt=""><span>{{help.help.comment}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="look">被你看光光啦~</div>
    </div>
  </div>
</template>

<script>
  import img1 from "../../../static/image/head.png"
  import img2 from "../../../static/image/cat.png"
  import img3 from "../../../static/image/cm.png"
  import img4 from "../../../static/image/pada.png"
  export default {
    name: "care",
    data(){
      return{
        isUser:true,//关闭推荐用户
        isCare:true,//页面整体显示是否有关注的用户
        chose2: "",//点击爱心的切换
        addAttend:true,//添加关注的切换
        data:
          {
            "moments": [
              {
                "user": {
                  "id": "123456",
                  "avatar": img1,
                  "nickname": "Rena"
                },
                "moment": {
                  "id": "123456",
                  "created_at": "2-23",
                  "content": "即使相隔光年，我们终能相遇。",
                  "medias": [
                    img2,img3,img4
                  ],
                  "share": 2,
                  "comment": 67,
                  "like": 34,
                  "liked": 0
                }
              },
              {
                "user": {
                  "id": "123456",
                  "avatar": img1,
                  "nickname": "Rena"
                },
                "moment": {
                  "id": "123456",
                  "created_at": "2-23",
                  "content": "即使相隔光年，我们终能相遇。",
                  "medias": [
                    img2,img3,img4
                  ],
                  "share": 2,
                  "comment": 30,
                  "like": 39,
                  "liked": 1
                }
              }
            ],

            "users": [
              {
                "id": "123456",
                "avatar": img3,
                "nickname": "哎呀",
                "follower": 666,
                "like": 234,
                "followed": 1
              },
              {
                "id": "123456",
                "avatar": img4,
                "nickname": "哎呀",
                "follower": 666,
                "like": 234,
                "followed": 1
              },
              {
                "id": "123456",
                "avatar": img2,
                "nickname": "哎呀",
                "follower": 666,
                "like": 234,
                "followed": 1
              },
              {
                "id": "123456",
                "avatar": img1,
                "nickname": "哎呀",
                "follower": 666,
                "like": 234,
                "followed": 1
              }
            ],
            "helps": [
              {
                "user": {
                  "id": "123456",
                  "avatar": img2,
                  "nickname": "haha"
                },
                "help": {
                  "category": "human",
                  "id": "123456",
                  "created_at": "2-28",
                  "day": "26",
                  "name": "王阿姨",
                  "gender": 2,
                  "age": 72,
                  "medias": [
                    img2,img3,img4
                  ],
                  "address": "上海市闵行区",
                  "share": 34,
                  "comment": 3
                }
              },
              {
                "user": {
                  "id": "123456",
                  "avatar": img2,
                  "nickname": "haha"
                },
                "help": {
                  "category": "human",
                  "id": "123456",
                  "created_at": "2-28",
                  "day": "26",
                  "name": "王阿姨",
                  "gender": 2,
                  "age": 72,
                  "medias": [
                    img2,img3,img4
                  ],
                  "address": "上海市闵行区",
                  "share": 34,
                  "comment": 3
                }
              }
            ]
          }
        ,
      }
    },
    created() {
      let url =this.HOST+'/mtalk/audit/submissionAudit'
      this.$axios.post(url,{
        "status":"1",
        "auId":"AP15241377310055"
      })
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods:{
      shut(){
        this.isUser=false
      },
      rating(){
        this.$router.push({
          path: '跳转到评论详情',
        })
      },
      changeBg() {
        console.log(123)
        this.chose2 = !this.chose2;
      },
      shareMenu(){
        // 与原生通信
        alert('已经调用原生api');
        // let params = {title: '分享标题3', url: location.href, img: '', desc: '分享描述3'};
        // openShare(params, res => {
        //   window.MyConsole.show();
        //   $.log('主动打开app分享菜单成功回调：' + JSON.stringify(res))
        // });
      },
      addControle() {
        this.addAttend = !this.addAttend
      }
    }
  }
</script>

<style scoped>
  .bg1{
    background: url("../../assets/image/care-heart.png") no-repeat 0 center;
    background-size:17px 17px;
  }
  .bg2{
    background: url("../../assets/image/care-red-heart.png") no-repeat 0 center;
    background-size:17px 17px;
  }
  .container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #F8F8F8;
  }
  /*未关注部分*/
  .no-care-head{
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #999999;
  }
  .no-care-con{
    padding: 0 15px;
  }
  .no-care-title{
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    color: #333333;
  }
  .no-care-container{
    box-sizing: border-box;
    width: 100%;
  }
  .no-care-item{
    margin-top: 15px;
    width: 32%;
    text-align: center;
    float: left;
    margin-right: 1.2%;
  }
  .no-care-item .item-head{
    height: 50px;
  }
  .no-care-item .item-head img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .no-care-item .item-name{
    margin-top: 5px;
    color:#999999;
    font-size: 12px;
  }
  .no-care-item .item-fans{
    font-size: 12px;
    line-height: 18px;
    color: #333333;
  }
  .no-care-item .item-fans .fans-num{
    margin-right: 6px;
  }
  .no-care-item  .item-care{
    width: 70px;
    height: 28px;
    margin-top: 6px;
    display: inline-block;
    text-align: center;
    border-radius: 14px;
    font-size: 15px;
    line-height: 28px;
    color: #FFFFFF;
    background: #FF7272;
  }
  .sq-dynamic{
    padding: 12px 15px 0 15px;
    margin-bottom: 8px;
    background: #ffffff;
  }
  .dynamic-head {
    display: flex;
    justify-content: flex-start;
  }

  .dynamic-head-l {
    position: relative;
    width: 40px;
    height: 40px;
    padding-right: 15px;
  }

  .dynamic-head-l img {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .dynamic-head-r h2 {
    font-size: 16px;
    line-height: 23px;
    color: #333333;
  }
  .dynamic-head-r p {
    font-size: 12px;
    line-height: 17px;
    color: #999999;
  }
  .photo {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }
  .con-font {
    padding:8px 0 8px 0;
    font-size: 15px;
    line-height: 21px;
    color: #444444;
  }
  .photo .img{
    float: left;
    width: 32%;
    /*width: 31%;*/
    height: 114px;
    margin: 0 2% 2% 0;
  }
  .photo .img img{
    width: 100%;
    height: 100%;
  }
  .photo .img:nth-child(3n+3) {
    margin-right: 0;
  }
  .con-footer {
    position: relative;
    height: 45px;
    margin: 5px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .con-footer::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom: 1px solid #EEEEEE;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .dy-share {
    margin-left:36px;
  }
  .dy-zan {
    margin-right:36px;
    padding-left: 22px;
  }
  .dy-share img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .dy-share span {
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .dy-msg img {
    width: 18px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .dy-msg span {
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .dy-zan span{
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .dy-zan img {
    width: 15px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  /*电影*/
  .mov {
    width: 100%;
    height: 161px;
    background: gray;
    font-size: 26px;
    line-height: 161px;
  }
  .active-user{
    padding: 12px 15px 0 15px;
    margin-bottom: 8px;
    background: #ffffff;
  }
  .active-head{
    display: flex;
    justify-content: space-between;
  }
  .active-head-l{
    font-size: 12px;
    line-height: 17px;
    color: #F5A623;
  }
  .active-head-r{
    font-size: 12px;
    line-height: 17px;
    color: #999999;
  }
  .active-con{
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }
  .box-container{
    box-sizing: border-box;
    width: 100%;
    padding: 13px 0 15px 0;
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling: touch;
  }
  .box-container::-webkit-scrollbar {
    display: none;
  }
  .box-item{
    width: 30%;
    text-align: center;
    margin-right: 10px;
  }
  .box-item .item-head{
    height: 50px;
  }
  .box-item .item-head img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .box-item .item-name{
    margin-top: 5px;
    color:#999999;
    font-size: 12px;
  }
  .box-item .item-fans{
    font-size: 12px;
    line-height: 18px;
    color: #333333;
  }
  .box-item .item-fans .fans-num{
    margin-right: 6px;
  }
  .box-item .item-care{
    width: 70px;
    height: 28px;
    margin-top: 6px;
    display: inline-block;
    text-align: center;
    border-radius: 14px;
    font-size: 15px;
    line-height: 28px;
    color: #FFFFFF;
    background: #FF7272;
  }
  .box-item .item-no-care{
    width: 70px;
    height: 26px;
    margin-top: 6px;
    display: inline-block;
    text-align: center;
    border-radius: 14px;
    font-size: 15px;
    line-height: 26px;
    color: #FF7272;
    border: 1px solid #FF7272;
  }
  .box-container .change{
    position: absolute;
    right: 0;
    top: 70px;
    width: 12px;
    height: 10px;
    opacity: 0.8;
  }
  .care-head{
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 33px;
    font-size: 14px;
    line-height: 33px;
    color: #999999;
    margin: 0 15px;
    background: #ffffff;
  }
  .head-bg{
    background: #ffffff;
  }
  .care-head::after{
    content:"";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #E7E7E7;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .care-head-l img{
    width: 14px;
    height: 13px;
    margin-right: 10px;
  }
  .care-head-r img{
    width: 11px;
    height: 7px;
    margin-top: 11px;
  }
  .con-font .show-msg{
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    color: #72BAFE;
  }
  .con-font .show-msg img{
    width: 18px;
    height: 18px;
    vertical-align: top;
    margin-right: 6px;
  }
  .map{
    height: 22px;
    margin:10px 0 15px 0;
    font-size: 12px;
    line-height: 22px;
    color: #576B95;
  }
  .map img{
    width: 20px;
    height: 22px;
    margin-right: 3px;
    vertical-align: top;
  }
  .dy-msg2{
    margin-right: 36px;
  }
  .dy-msg2 img{
    width: 18px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .dy-msg2 span{
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .look{
    height: 52px;
    text-align: center;
    font-size: 12px;
    line-height: 52px;
    color: #CCCCCC;
  }
</style>
