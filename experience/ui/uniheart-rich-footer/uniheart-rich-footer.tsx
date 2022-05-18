import React, {ReactNode} from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

export type UniheartRichFooterProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};

export function UniheartRichFooter({children}: UniheartRichFooterProps) {
    const getColumns = () => {
        const col1 = {
            title: '我在 js.org',
            items: [
                {
                    title: '人工智能井字棋游戏',
                    url: 'https://tictactoe.js.org',
                    openExternal: true,
                },
                {
                    title: 'K-Means 算法演示',
                    url: 'https://kmeans.js.org',
                    openExternal: true
                },
                {
                    title: 'id3 算法演示', url: 'https://id3.js.org', openExternal: true
                },
                {title: '短网址生成器', url: 'https://short.js.org', openExternal: true},
                {title: '在线视频字幕编辑器', url: 'https://ass-editor.js.org', openExternal: true},
                {title: '紫竹叽歪', url: 'https://zizhujy.js.org', openExternal: true},
                {title: '分享工具', url: 'https://share.js.org', openExternal: true},
                {title: '笑话大全', url: 'https://joke.js.org', openExternal: true},
                {title: 'Gitmoji', url: 'https://gitmoji.js.org', openExternal: true},
                {title: 'qbit', url: 'https://qbit.js.org', openExternal: true},
            ]
        };
        const col2 = {
            title: '我在 netlify',
            items: [
                {title: 'SICP 习题集', url: 'https://sicp.jiwai.win', openExternal: true},
                {title: '《机器学习》练习作业', url: 'https://ml.jiwai.win/', openExternal: true},
                {title: 'Jeff Tian', url: 'https://jeff-tian.jiwai.win/', openExternal: true},
                {title: '心情随笔', url: 'https://heart.pa-ca.me/', openExternal: true},
                {title: 'InversifyJS 中文文档', url: 'https://doc.inversify.cloud/', openExternal: true},
                {title: 'InversifyJs 中文广告页', url: 'https://inversify.cn', openExternal: true},
                {title: 'UniBeta', url: 'https://unibeta.jiwai.win', openExternal: true},
                {title: '在线视频字幕编辑器', url: 'https://ass-editor.js.org', openExternal: true},
                {title: '瑜伽男', url: 'https://yoga.pa-pa.me/', openExternal: true},
                {title: 'SubText', url: 'https://subtext.pa-pa.me', openExternal: true},
                {title: '哈哈哈', url: 'https://fire.pa-pa.me/', openExternal: true},
            ]
        };
        const col3 = {
            title: '开源贡献',
            items: [
                {title: 'Skulpt', url: 'https://skulpt.org', openExternal: true},
                {title: 'Flot', url: 'https://www.flotcharts.org', openExternal: true},
                {title: 'egg js', url: 'https://www.eggjs.org', openExternal: true},
                {title: 'koa js', url: 'https://koajs.com/', openExternal: true},
                {title: 'Taro', url: 'https://taro.js.com/', openExternal: true},
                {
                    title: '算法可视化',
                    url: 'https://algorithm-visualizer.org/uncategorized/k-means-clustering',
                    openExternal: true
                },
                {
                    title: 'Keycloak',
                    url: 'https://github.com/keycloak/keycloak',
                    openExternal: true
                }
            ]
        };

        const col4 = {
            title: '我的其他',
            items: [
                {
                    title: '哈德韦订阅号',
                    description: <img alt="哈德韦公众号" src="https://ml.jiwai.win/mp-hardway.png"
                                      style={{maxWidth: '150px'}}/>
                },
                {
                    title: '哈德韦小程序',
                    description: <img alt="哈德韦小程序"
                                      src={`https://uniheart.pa-ca.me/proxy?url=${encodeURIComponent('https://cdn.nlark.com/yuque/0/2022/png/221736/1642774938458-c1f6feb2-394d-4fa2-9163-c9b049bad39d.png')}`}
                                      style={{maxWidth: '100px'}}/>
                },
                {
                    title: 'Jeff Tian APP',
                    url: 'https://jeff-tian-app-jefftian.vercel.app/jeff-tian-release.apk',
                    openExternal: true
                },
                {title: 'Keycloak', url: 'https://keycloak.jiwai.win', openExternal: true},
                {title: 'IdentityServer 6', url: 'https://id6.azurewebsites.net/', openExternal: true},
                {title: '叽叽歪歪', url: 'https://ggyy.pa-pa.me', openExternal: true},
                {title: '《计算机网络——自顶向下方法》习题集', url: 'https://notion.inversify.cn/cnatda-chapter6', openExternal: true},
            ]
        }

        return [col1, col2, col3, col4];
    }

    return <Footer
        columns={getColumns()}
        bottom={<a href="https://www.zhihu.com/consult/people/1073548674713423872" target="_blank">欢迎来知乎向我咨询 ❤️</a>}
    />;
}
