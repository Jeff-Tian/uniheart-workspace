import React, { ReactNode } from 'react';
import {Col, Layout, Row } from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;

export type UniheartRichFooterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function UniheartRichFooter({ children }: UniheartRichFooterProps) {
  return (
    <Layout>
      <Footer>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
        </Row>
      </Footer>
      {children}
    </Layout>
  );
}
