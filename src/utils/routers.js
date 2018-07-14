const routers = [
    {
        path: '/',
        redirect: '/appMenu/home',
        component: () => import("@/view/appMenu"),
    },
    {
        path: '/appMenu',
        redirect: '/appMenu/home',
        component: () => import("@/view/appMenu"),
        children: [
            {
                path: '/appMenu/home',
                name: 'home',
                redirect: '/appMenu/home/unionPay',
                component: () => import("@/view/home/index"),
                children: [
                    { path: 'unionPay', component: () => import("@/view/home/unionPay"), meta: { break: ["银行账单"] } },
                    { path: 'pos', component: () => import("@/view/home/pos"), meta: { break: [" POS账单", "选项1"] } },
                    { path: 'diff', component: () => import("@/view/home/diff"), meta: { break: ["金额不一致"] } }
                ]
            },
            {
                path: '/appMenu/cross',
                redirect: '/appMenu/cross/day',
                component: () => import("@/view/cross/index"),
                children: [
                    { path: 'day', component: () => import("@/view/cross/date/day"), meta: { break: ["银行账单"] } },
                    { path: 'day2', component: () => import("@/view/cross/date/day2"), meta: { break: ["银行账单"] } },
                    { path: 'week', component: () => import("@/view/cross/date/week"), meta: { break: [" POS账单", "选项1"] } },
                    { path: 'week2', component: () => import("@/view/cross/date/week2"), meta: { break: [" POS账单", "选项1"] } },
                    { path: 'month', component: () => import("@/view/cross/date/month"), meta: { break: [" POS账单", "选项1"] } },
                    { path: 'season', component: () => import("@/view/cross/date/season"), meta: { break: [" POS账单", "选项1"] } },
                    { path: 'year', component: () => import("@/view/cross/date/year"), meta: { break: [" POS账单", "选项1"] } },
                ]
            },
            {
                path: '/appMenu/ltb',
                redirect: '/appMenu/ltb/day',
                component: () => import("@/view/ltb/index"),
                children: [
                    { path: 'day', component: () => import("@/view/ltb/date/day/day"), meta: { break: ["银行账单"] } },
                    { path: 'day2', component: () => import("@/view/ltb/date/day/day2"), meta: { break: ["银行账单"] } },
                    { path: 'day3', component: () => import("@/view/ltb/date/day/day3"), meta: { break: ["银行账单"] } },
                    { path: 'day4', component: () => import("@/view/ltb/date/day/day4"), meta: { break: ["银行账单"] } },
                    { path: 'day5', component: () => import("@/view/ltb/date/day/day5"), meta: { break: ["银行账单"] } },
                ]

            }
        ]
    },
];
export default routers