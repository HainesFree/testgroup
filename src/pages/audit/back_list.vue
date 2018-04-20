<template>
  <div class="sq-dynamic">
    <div class="bg">
      <div class="dynamic-head">
        <div class="left">
          <div class="dynamic-head-l"><img src="../../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>蓝天志愿协会</h2>
            <p>2018-2-23</p>
          </div>
        </div>
        <div class="right wait">待审核</div>
        <!--<div class="right pass">已通过</div>-->
        <!--<div class="right refuse">已拒绝</div>-->
      </div>
    </div>

    <div class="bg">
      <div class="dynamic-head">
        <div class="left">
          <div class="dynamic-head-l"><img src="../../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>蓝天志愿协会</h2>
            <p>2018-2-23</p>
          </div>
        </div>
        <!--<div class="right wait">待审核</div>-->
        <div class="right pass">已通过</div>
        <!--<div class="right refuse">已拒绝</div>-->
      </div>
    </div>

    <div class="bg">
      <div class="dynamic-head">
        <div class="left">
          <div class="dynamic-head-l"><img src="../../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>蓝天志愿协会</h2>
            <p>2018-2-23</p>
          </div>
        </div>
        <!--<div class="right wait">待审核</div>-->
        <!--<div class="right pass">已通过</div>-->
        <div class="right refuse">已拒绝</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "console_list"
  }
</script>

<style scoped>
  .bg{
    background: #ffffff;
  }
  .sq-dynamic{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 5px;
    background: #f8f8f8;
  }
  .dynamic-head {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .dynamic-head .left{
    padding-left: 15px;
    display: flex;
  }
  .dynamic-head .right{
    margin-right: 20px;
    height: 30px;
    line-height: 30px;
    background: #ff696d;
    text-align: center;
    width: 100px;
    color: #000;
    border-radius: 5px;
  }
  .dynamic-head .wait{
    background: #FF7272;
  }
  .dynamic-head .pass{
    background: #ffffff;
  }
  .dynamic-head .refuse{
    background: #ffffff;
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
</style>
<style>

</style>
