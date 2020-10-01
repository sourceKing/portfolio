import { Component } from 'react';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Header from './header';
import Footer from './footer';

import Router from 'next/router';


function withLayout(MyPage) {
   // return the page wrapped in the base layout of the design
   return class extends Component{

      render(){
         
         return(
            <Layout style={{ minHeight: '100vh' }}>
               <Header path={this.props.pathname} />
               <Row gutter={0} style={{ margin: 0, padding: 0, width: "100%", height: "100%", backgroundColor: "#001529"  }}>
                  <Col xs={{span: 1}} sm={{span: 2}} md={{span: 3}} lg={{span: 3}} xl={{span: 2}} ></Col>
                  <Col xs={{span: 22}} sm={{span: 20}} md={{span: 18}} lg={{span: 18}} xl={{span: 20}} >
                    <MyPage />
                  </Col>
                  <Col xs={{span: 1}} sm={{span: 2}} md={{span: 3}} lg={{span: 3}} xl={{span: 2}} ></Col>
               </Row>
               <Footer />
            </Layout>
         )
      }
   }
}

export default withLayout;
