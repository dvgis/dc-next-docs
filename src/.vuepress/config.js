module.exports = {
  base: '/dc-docs/v2.x/',
  head: [['link', { rel: 'icon', href: 'favicon.png' }]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'DC-SDK Docs',
      description: 'Cesium-based WebGis development platform for 2D and 3D',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'DC-SDK 开发文档',
      description: '基于 Cesium 构建二、三维一体 WebGis 开发平台',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Introduction', link: '/introduction/' },
          {
            text: 'Modules',
            items: [
              { text: 'Base', link: '/base/' },
              { text: 'Map', link: '/tile/' },
              { text: 'Layers', link: '/layer/' },
              { text: 'Overlays', link: '/overlay/' },
              { text: 'Materials', link: '/material/' },
              { text: 'Effects', link: '/effect/' },
              { text: 'Tools', link: '/tools/' },
              { text: 'Analysis', link: '/analysis/' },
              { text: 'ThirdPart', link: '/third-part/' },
            ],
          },
          {
            text: 'Integration Vue',
            items: [
              { text: 'dc-ui', link: 'http://ui.dvgis.cn/dc-ui' },
              { text: 'dc-vue', link: 'https://github.com/dvgis/dc-vue' },
              {
                text: 'dc-vue-next',
                link: 'https://github.com/dvgis/dc-vue-next',
              },
            ],
          },
          {
            text: 'CesiumJS',
            items: [
              {
                text: 'Cesium',
                items: [
                  {
                    text: 'Github',
                    link: 'https://github.com/CesiumGS/cesium',
                  },
                  {
                    text: 'Cesiumjs API',
                    link: 'https://cesium.com/docs/cesiumjs-ref-doc/',
                  },
                  {
                    text: 'Fabric',
                    link: 'https://github.com/CesiumGS/cesium/wiki/Fabric',
                  },
                ],
              },
            ],
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '教程', link: '/zh/introduction/' },
          {
            text: '功能模块',
            items: [
              { text: '基础构成', link: '/zh/base/' },
              { text: '地图地形', link: '/zh/tile/' },
              { text: '业务图层', link: '/zh/layer/' },
              { text: '覆盖元素', link: '/zh/overlay/' },
              { text: '材质属性', link: '/zh/material/' },
              { text: '效果动画', link: '/zh/effect/' },
              { text: '实用工具', link: '/zh/tools/' },
              { text: '场景分析', link: '/zh/analysis/' },
              { text: '第三方集成', link: '/zh/third-part/' },
            ],
          },
          {
            text: '集成Vue',
            items: [
              { text: 'dc-ui', link: 'http://ui.dvgis.cn/dc-ui' },
              { text: 'dc-vue', link: 'https://github.com/dvgis/dc-vue' },
              {
                text: 'dc-vue-next',
                link: 'https://github.com/dvgis/dc-vue-next',
              },
            ],
          },
          {
            text: 'CesiumJS',
            items: [
              {
                text: 'Cesium',
                items: [
                  {
                    text: 'Github',
                    link: 'https://github.com/CesiumGS/cesium',
                  },
                  {
                    text: 'API文档',
                    link: 'https://cesium.com/docs/cesiumjs-ref-doc/',
                  },
                  {
                    text: '材质文档',
                    link: 'https://github.com/CesiumGS/cesium/wiki/Fabric',
                  },
                ],
              },
            ],
          },
          { text: 'v1.x', link: 'https://resource.dvgis.cn/dc-api/' },
        ],
      },
    },
  },
}
