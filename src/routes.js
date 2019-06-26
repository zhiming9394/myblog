import AC from './components/async_load'

export default [
    {
        name:'首页',
        icon:'home',
        path:'/',
        component:AC(()=> import('./views/home'))
    },
    {
        name:'IT博客',
        path:'/detail/1',
        component:AC(()=> import('./views/detail/index'))
    },
    {
        name:'乱七八糟',
        path:'/detail/2',
        component:AC(()=> import('./views/detail/index'))
    },
    {
        name:'top',
        path:'/detail/3',
        component:AC(()=> import('./views/detail/blog/top.js'))
    },
    {
        name:'react',
        path:'/detail/4',
        component:AC(()=> import('./views/detail/timeline/reacte'))
    },
    {
        name:'react/1',
        path:'/detail/4/1',
        component:AC(()=> import('./views/detail/blog/reacte/1'))
    },
    {
        name:'服务器',
        path:'/detail/5',
        component:AC(()=> import('./views/detail/index'))
    },
    {
        name:'微信',
        path:'/detail/6',
        component:AC(()=> import('./views/detail/blog/top.js'))
    },
    {
        name:'timeline',
        path:'/detail/7',
        component:AC(()=> import('./views/detail/timeline/reacte'))
    },
]