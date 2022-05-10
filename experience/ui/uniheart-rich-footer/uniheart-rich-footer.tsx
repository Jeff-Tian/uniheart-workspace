import React, {ReactNode} from 'react';
import {Col, Layout, Row} from 'antd';
import 'antd/dist/antd.css';

const {Footer} = Layout;

export type UniheartRichFooterProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};

export function UniheartRichFooter({children}: UniheartRichFooterProps) {
    return (
        <Layout>
            <Footer>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <h3>我在 js.org</h3>
                        <ul>
                            <li>
                                <a href="https://tictactoe.js.org" target="_blank">人工智能井字棋游戏</a>
                            </li>
                            <li>
                                <a href="https://kmeans.js.org" target="_blank">K-Means 算法演示</a>
                            </li>
                            <li>
                                <a href="https://id3.js.org" target="_blank">id3 算法演示</a>
                            </li>
                            <li>
                                <a href="https://short.js.org" target="_blank">短网址生成器</a>
                            </li>
                            <li>
                                <a href="https://ass-editor.js.org/" target="_blank">在线视频字幕编辑器</a>
                            </li>
                            <li>
                                <a href="https://zizhujy.js.org" target="_blank">紫竹叽歪</a>
                            </li>
                            <li>
                                <a href="https://share.js.org" target="_blank">分享工具</a>
                            </li>
                            <li>
                                <a href="https://jokes.js.org" target="_blank">笑话大全</a>
                            </li>
                            <li>
                                <a href="https://gitmoji.js.org" target="_blank">Gitmoji</a>
                            </li>
                            <li>
                                <a href="https://qbit.js.org" target="_blank">Qbit</a>
                            </li>
                        </ul>

                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                        <h3>我在 netlify</h3>
                        <ul>
                            <li>
                                <a href="https://sicp.jiwai.win" target="_blank">SICP 习题集</a>
                            </li>
                            <li>
                                <a href="https://ml.jiwai.win/" target="_blank">《机器学习》练习作业</a>
                            </li>
                            <li>
                                <a href="https://jeff-tian.jiwai.win" target="_blank">Jeff Tian</a>
                            </li>
                            <li>
                                <a href="https://heart.pa-ca.me/" target="_blank">心情随笔</a>
                            </li>
                            <li>
                                <a href="https://doc.inversify.cloud/" target="_blank">InversifyJS 中文文档</a>
                            </li>
                            <li>
                                <a href="https://inversify.cn/" target="_blank">InversifyJs 中文广告页</a>
                            </li>
                            <li>
                                <a href="https://unibeta.jiwai.win/" target="_blank">UniBeta</a>
                            </li>
                            <li>
                                <a href="https://ass-editor.js.org/" target="_blank">在线视频字幕编辑器</a>
                            </li>
                            <li>
                                <a href="https://yoga.pa-pa.me/" target="_blank">瑜伽男</a>
                            </li>
                            <li>
                                <a href="https://subtext.pa-pa.me/" target="_blank">SubText</a>
                            </li>
                            <li>
                                <a href="https://fire.pa-pa.me/" target="_blank">哈哈哈</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <h3>开源贡献</h3>
                        <ul>
                            <li>
                                <a href="https://skulpt.org/" target="_blank">Skulpt</a>
                            </li>
                            <li>
                                <a href="https://www.flotcharts.org/" target="_blank">Flot</a>
                            </li>
                            <li>
                                <a href="https://www.eggjs.org/" target="_blank">egg js</a>
                            </li>
                            <li>
                                <a href="https://koajs.com/" target="_blank">koa js</a>
                            </li>
                            <li>
                                <a href="https://taro.jd.com/" target="_blank">Taro</a>
                            </li>
                            <li>
                                <a href="https://algorithm-visualizer.org/uncategorized/k-means-clustering" target="_blank">算法可视化</a>
                            </li>
                        </ul>
                        <h3>其他</h3>
                        <ul>
                            <li>
                                <a href="https://keycloak.jiwai.win/" target="_blank">Keycloak</a>
                            </li>
                            <li>
                                <a href="https://id6.azurewebsites.net/" target="_blank">IdentityServer 6</a>
                            </li>
                            <li>
                                <a href="https://ggyy.pa-pa.me" target="_blank">叽叽歪歪</a>
                            </li>
                            <li>
                                <a href="https://skulpt.org/" target="_blank">Skulpt</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Footer>
            {children}
        </Layout>
    );
}
