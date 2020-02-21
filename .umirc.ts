import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  define: {
    "process.env.TEST": 'Define webpack variable',
    "USE_COMMA": 2,
  },
  proxy: {
    "/ajax": {
      target: "https://www.tripbtoz.com/",
      changeOrigin: true,
    }
  },
  routes: [
    {
      title:'index',
      path: '/',
      component: '../pages/index',
      proxy: {
        "/api": {
          target: '/ajax/autocomplete',
          changeOrigin: true,
        }
      }
    },
    {
      path:'/date',
      component:'../pages/datepicker',
      routes: [],
    },
    {
      path:'/menu/:submenu',
      component:'../pages/menu',
      routes: [
        {
          path:'/menu/',
          component:'../pages/menu',
        }
      ],
    },
    {
      path:'/server',
      component:'../pages/serverIntegration',
      routes: [],
    }

  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'onBoarding - 김창현',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
