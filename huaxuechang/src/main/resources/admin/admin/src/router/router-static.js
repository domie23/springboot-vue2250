import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import jiaolianYuyue from '@/views/modules/jiaolianYuyue/list'
    import liuyan from '@/views/modules/liuyan/list'
    import qiju from '@/views/modules/qiju/list'
    import qijuCollection from '@/views/modules/qijuCollection/list'
    import qijuCommentback from '@/views/modules/qijuCommentback/list'
    import qijuOrder from '@/views/modules/qijuOrder/list'
    import saidao from '@/views/modules/saidao/list'
    import saidaoCollection from '@/views/modules/saidaoCollection/list'
    import saidaoLiuyan from '@/views/modules/saidaoLiuyan/list'
    import saidaoYuyue from '@/views/modules/saidaoYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiaolianYuyueYesno from '@/views/modules/dictionaryJiaolianYuyueYesno/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryQiju from '@/views/modules/dictionaryQiju/list'
    import dictionaryQijuCollection from '@/views/modules/dictionaryQijuCollection/list'
    import dictionaryQijuOrder from '@/views/modules/dictionaryQijuOrder/list'
    import dictionaryQijuOrderPayment from '@/views/modules/dictionaryQijuOrderPayment/list'
    import dictionarySaidao from '@/views/modules/dictionarySaidao/list'
    import dictionarySaidaoCollection from '@/views/modules/dictionarySaidaoCollection/list'
    import dictionarySaidaoYuyueYesno from '@/views/modules/dictionarySaidaoYuyueYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiaolianYuyueYesno',
        name: '预约状态',
        component: dictionaryJiaolianYuyueYesno
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryQiju',
        name: '器具类型',
        component: dictionaryQiju
    }
    ,{
        path: '/dictionaryQijuCollection',
        name: '收藏表类型',
        component: dictionaryQijuCollection
    }
    ,{
        path: '/dictionaryQijuOrder',
        name: '订单类型',
        component: dictionaryQijuOrder
    }
    ,{
        path: '/dictionaryQijuOrderPayment',
        name: '订单支付类型',
        component: dictionaryQijuOrderPayment
    }
    ,{
        path: '/dictionarySaidao',
        name: '赛道类型',
        component: dictionarySaidao
    }
    ,{
        path: '/dictionarySaidaoCollection',
        name: '收藏表类型',
        component: dictionarySaidaoCollection
    }
    ,{
        path: '/dictionarySaidaoYuyueYesno',
        name: '申请状态',
        component: dictionarySaidaoYuyueYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
    ,{
        path: '/jiaolianYuyue',
        name: '教练预约',
        component: jiaolianYuyue
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/qiju',
        name: '滑雪器具',
        component: qiju
      }
    ,{
        path: '/qijuCollection',
        name: '器具收藏',
        component: qijuCollection
      }
    ,{
        path: '/qijuCommentback',
        name: '器具评价',
        component: qijuCommentback
      }
    ,{
        path: '/qijuOrder',
        name: '器具订单',
        component: qijuOrder
      }
    ,{
        path: '/saidao',
        name: '赛道',
        component: saidao
      }
    ,{
        path: '/saidaoCollection',
        name: '赛道收藏',
        component: saidaoCollection
      }
    ,{
        path: '/saidaoLiuyan',
        name: '赛道留言',
        component: saidaoLiuyan
      }
    ,{
        path: '/saidaoYuyue',
        name: '赛道预约',
        component: saidaoYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
