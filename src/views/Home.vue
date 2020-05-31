<template>
  <div class="home">
    <div class="gutter-example">
      <a-row :gutter="0">
        <!-- 左边 -->
        <a-col class="gutter-row" :span="3">
          <div class="gutter-left-box">
            <span class="left-logo-box" :class="{'left-logo-box-show':isShowPanel}" title="YQ的个人网站"><img src="../assets/img/logo2.png" alt="" class="logo-img"></span>
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
              <a-col :span="3">
                <section class="center-box-1 comCenter-box">
                  <div class="box-content1 comBox-content">
                    <span class="contentText">悟</span>
                  </div>
                </section>
              </a-col>
              <a-col :span="18">
                <section class="center-box-2 comCenter-box">
                  <div class="box-content2 comBox-content">
                    <span class="contentText">悟6</span>
                    <ul class="box-content-circles">
                      <li
                        v-for="n in 4"
                        :key="n"
                        class="comCircle-item"
                        :class="{ 'comCircle-item-on': isShowPanel }"
                      >
                        <div class="comItem">
                          <div class="comItem-body">
                            <h5 class="item-tit">{{ n }}沙漠</h5>
                            <p class="item-text">
                              这是你梦寐以求的沙漠
                              <br />
                              <span class="item-link">详情</span>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!-- 圆形菜单 -->
                </section>
              </a-col>
              <a-col :span="3">
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
      bannerData:[
        {id:11,title:'沙漠',text:'那是你梦寐以求的沙漠'},
        {id:12,title:'沙漠',text:'那是你梦寐以求的沙漠'},
        {id:13,title:'沙漠',text:'那是你梦寐以求的沙漠'},
        {id:14,title:'沙漠',text:'那是你梦寐以求的沙漠'},
      ]
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(23, 34, 59, 0.5);
    // filter:brightness(0.6);
    .left-logo-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      opacity: 0;
      transition: all .8s;
      transform: translateY(-100%);
      &.left-logo-box-show{
        opacity: 1;
        transform: translateY(0);
      }
      .logo-img{
        width: 100%;
        height: 70px;
      }
    }
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
      // line-height: 120px;
      margin: 0 auto;
      // background-color: rgba(223, 119, 130, 0.2);
      transition: all 1s ease;
      font-size: 20px;
      font-family: "font1";
      border-radius: 10px;
      // border-radius: 50%;
      transition: 1s;
      cursor: pointer;
      color: #fff;
      opacity: 1;
      // &:hover {
      //   transform: rotateY(180deg);
      // }
      .contentText {
        position: absolute;
        display: none;
      }
    }
    .box-content1 {
      display: none;
      background: url(../../src/assets/img/img0.jpg) no-repeat left bottom/100%
        100%;
    }
    .box-content2 {
    }
    .box-content3 {
      display: none;
      background: url(../../src/assets/img/img1.jpg) no-repeat center
        center/100% 100%;
    }
    // 长方形菜单
    .box-content-circles {
      position: absolute;
      .comCircle-item {
        //  position: absolute;
        width: 10px;
        height: 30px;
        opacity: 0;
        // background-color: blue;
        // transform: rotate(200deg);
        transform: rotate(0) translate(0, 0);
        transition: all 1s ease;
        .comItem {
          position: relative;
          display: inline-block;
          width: 180px;
          height: 280px;
          // border-radius: 5px;
          background-color: #8a8686;
          transition: all 1s ease;
          overflow: hidden;
          // border: 1px solid transparent;

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 110%;
            left: 0;
            top: 0;
            z-index: -1;
            display: inline-block;
            transition: all 0.8s;
          }
          &:hover:before {
            transform: translateY(-4%);
          }
          &::after {
            position: absolute;
            content: "";
            font-size: 50px;
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
          }
          &:hover:after {
            transform: translateY(-50%);
          }
          &:hover {
            .comItem-body {
               .item-tit {
                  transform: translateY(60px);
               }
              .item-text {
                transform: translateY(60px);
              }
            }
          }
          .comItem-body {
            padding: 0 10px;
            .item-tit {
              // margin-top: 50px;
              color: #fff;
              font-size: 30px;
                transition: all 0.8s;
               transform: translateY(220px);
            }
            .item-text {
              transition: all 0.8s;
              transform: translateY(270px);
            }
            .item-link {
              // display: block;
              padding: 2px 8px;
              background-color: rgba(241, 64, 75, 1);
              border-radius: 4px;
              border: none;
              text-align: center;
            }
          }
        }
      }
      // 圆形1
      .comCircle-item-on:nth-child(1) {
        opacity: 1;
        transform: rotate(90deg) translate(-7px, -530px);
        .comItem {
          transform: rotate(-90deg);
          &:before {
            background: url(../../src/assets/img/imgBanner4.jpg) no-repeat
              center;
          }
        }
      }
      .comCircle-item-on:nth-child(2) {
        opacity: 1;
        transform: rotate(180deg) translate(-268px, -173px);
        .comItem {
          transform: rotate(-180deg);
          //  background: url(../../src/assets/img/img1.jpg) no-repeat center;
          &:before {
            background: url(../../src/assets/img/imgBanner3.jpg) no-repeat
              center;
          }
        }
      }
      .comCircle-item-on:nth-child(3) {
        opacity: 1;
        transform: rotate(270deg) translate(-102px, -168px);
        .comItem {
          transform: rotate(-270deg);
          &:before {
            background: url(../../src/assets/img/imgBanner2.jpg) no-repeat
              center;
          }
        }
      }
      .comCircle-item-on:nth-child(4) {
        opacity: 1;
        transform: rotate(360deg) translate(-354px, -138px);
        .comItem {
          transform: rotate(-360deg);
          &:before {
            background: url(../../src/assets/img/imgBanner1.jpg) no-repeat
              center;
          }
        }
      }
      .comCircle-item-on:nth-child(5) {
        opacity: 1;
        transform: rotate(300deg) translate(115px, -177px);
        .comItem {
          transform: rotate(-300deg);
          background: url(../../src/assets/img/img1.jpg) no-repeat center;
        }
      }
      // 圆形6
      .comCircle-item-on:nth-child(6) {
        opacity: 1;
        transform: rotate(360deg) translate(320px, -368px);
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
