<template>
  <div class="home">
    <div class="gutter-example">
      <a-row :gutter="0">
        <!-- 左边 -->
        <a-col class="gutter-row" :span="3">
          <div class="gutter-left-box">
            <p class="left-text comText">本是青灯不归客，</p>
            <p class="right-tex comText">却因浊酒恋红尘</p>
          </div>
        </a-col>
        <!-- 中间 -->
        <a-col class="gutter-row" :span="20">
          <div class="gutter-center-box " v-show="1">
            <a-row
              :gutter="15"
              type="flex"
              justify="space-around"
              align="middle"
            >
              <a-col :span="6">
                <section class="center-box-1 comCenter-box">
                  <div class="box-content1 comBox-content">
                    <span class="contentText">悟</span>
                  </div>
                </section>
              </a-col>
              <a-col :span="12">
                <section class="center-box-2 comCenter-box">
                  <div class="box-content2 comBox-content">
                    <span class="contentText">悟6</span>
                    <ul class="box-content-circles">
                      <li
                        v-for="n in 6"
                        :key="n"
                        class="comCircle-item"
                        :class="{ 'comCircle-item-on': isShowPanel }"
                      >
                        <span class="comItem item">{{ n }}</span>
                      </li>
                      <!-- <li class="comCircle-item" :class="{'comCircle-item2':isShowPanel}">
                        <span class="comItem item2">2</span>
                      </li>
                      <li class="comCircle-item" :class="{'comCircle-item3':isShowPanel}">
                        <span class="comItem item3">3</span>
                      </li>
                      <li class="comCircle-item" :class="{'comCircle-item4':isShowPanel}">
                        <span class="comItem item4">4</span>
                      </li>
                      <li class="comCircle-item" :class="{'comCircle-item5':isShowPanel}">
                        <span class="comItem item5">5</span>
                      </li>
                      <li class="comCircle-item" :class="{'comCircle-item6':isShowPanel}">
                        <span class="comItem item6">6</span>
                      </li> -->
                    </ul>
                  </div>
                  <!-- 圆形菜单 -->
                </section>
              </a-col>
              <a-col :span="6">
                <section class="center-box-3 comCenter-box">
                  <div class="box-content3 comBox-content">
                    <span class="contentText">悟</span>
                  </div>
                </section>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <!-- 右边 -->
        <a-col class="gutter-row" :span="1">
          <div class="gutter-right-box">
            <span class="moreBtn" @click="fnShowPanel"></span>
            <span class="nextBtn"></span>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isShowPanel: false,
      isOpacity: 0,
    };
  },
  methods: {
    fnShowPanel() {
      this.isShowPanel = !this.isShowPanel;
      this.isOpacity = 1;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  .gutter-example /deep/ .ant-row > div {
    // background: red;
    border: 0;
  }
  // 左边
  .gutter-left-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(23, 34, 59, 0.5);
    // filter:brightness(0.6);
    .comText {
      width: 70px;
      // writing-mode: tb-rl;
      word-wrap: break-word; /*英文的时候需要加上这句，自动换行*/
      color: #fff;
      font-size: 40px;
      font-family: "font1";
    }
    .right-tex {
      padding-top: 100px;
      margin-bottom: 0;
    }
  }
  // 中间
  .gutter-center-box {
    height: 100vh;
    & > div {
      height: 100vh;
    }
    .comCenter-box {
      // height: 250px;
    }
    .comBox-content {
      // width: 60%;
      // max-width: 150px;
      // position: absolute;
      width: 150px;
      height: 200px;
      line-height: 120px;
      margin: 0 auto;
      // background-color: rgba(223, 119, 130, 0.2);
      transition: all 1s ease;
      font-size: 35px;
      font-family: "font1";
      border-radius: 10px;
      // border-radius: 50%;
      transition: 1s;
      cursor: pointer;
      color: #fff;
      opacity: 0.6;
      // &:hover {
      //   transform: rotateY(180deg);
      // }
      .contentText {
        // background-color: red;
        position: absolute;
        display: none;
      }
    }
    .box-content1 {
      display: none;
      background: url(../../src/assets/img/img0.jpg) no-repeat left bottom/100%
        100%;
      // background-position:100px 10px;
    }
    .box-content2 {
      // display: none;
      // background: url(../../src/assets/img/img2.jpg) no-repeat center center/100% 100%;
    }
    .box-content3 {
      display: none;
      background: url(../../src/assets/img/img1.jpg) no-repeat center
        center/100% 100%;
    }
    // 圆形菜单
    .box-content-circles {
      position: absolute;
      .comCircle-item {
        //  position: absolute;
        width: 0px;
        height: 30px;
        opacity: 0;
        // transform: rotate(200deg);
        transform: rotate(0) translate(0, 0);
        transition: all 1s ease;
        .comItem {
          display: inline-block;
          width: 150px;
          height: 200px;
          border-radius: 5px;
          background-color: #8a8686;
          transition: all 1s ease;
            border: 1px solid transparent;
          &:hover{
               border: 1px solid #fff;
          }
        }
      }
      // 圆形1
      .comCircle-item-on:nth-child(1) {
        opacity: 1;
        transform: rotate(60deg) translate(290px, -268px);
        .comItem {
          transform: rotate(-60deg);
          background: url(../../src/assets/img/img0.jpg) no-repeat center;
        }
      }
      .comCircle-item-on:nth-child(2) {
        opacity: 1;
        transform: rotate(120deg) translate(55px, -241px);
        .comItem {
          transform: rotate(-120deg);
                 background: url(../../src/assets/img/img1.jpg) no-repeat center;
        }
      }
      .comCircle-item-on:nth-child(3) {
        opacity: 1;
        transform: rotate(180deg) translate(136px, -241px);
        .comItem {
          transform: rotate(-180deg);
             background: url(../../src/assets/img/img2.jpg) no-repeat center;
        }
      }
      .comCircle-item-on:nth-child(4) {
        opacity: 1;
        transform: rotate(240deg) translate(153px, -190px);
        .comItem {
          transform: rotate(-240deg);
             background: url(../../src/assets/img/img0.jpg) no-repeat center;
          
        }
      }
      .comCircle-item-on:nth-child(5) {
        opacity: 1;
        transform: rotate(300deg) translate(117px, -110px);
        .comItem {
          transform: rotate(-300deg);
             background: url(../../src/assets/img/img1.jpg) no-repeat center;
        }
      }
      // 圆形6
      .comCircle-item-on:nth-child(6) {
        opacity: 1;
        transform: rotate(360deg) translate(268px, -290px);
        .comItem {
          transform: rotate(-360deg);
             background: url(../../src/assets/img/img2.jpg) no-repeat center;
        }
      }
    }
  }
  // 右边
  .gutter-right-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 5px 0;
    height: 100vh;
    background-color: rgba(23, 34, 59, 0.5);
    color: #fff;
    .moreBtn {
      width: 40px;
      height: 40px;
      background: url(../../src/assets/img/iconMore1.png) no-repeat center
        center/30px 30px;
      cursor: pointer;
    }
    .nextBtn {
      width: 40px;
      height: 40px;
      background: url(../../src/assets/img/iconNext0.png) no-repeat center
        center/30px 30px;
      transform: rotate(180deg);
      cursor: pointer;
    }
  }
}
</style>
