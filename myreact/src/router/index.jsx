import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';

import Home from '../views/index/index';
import GoodsDetail from '../views/goodsdetail/index';
import Address from '../views/address/index';
import Myorder from '../views/myorder/index';
import Ordercallback from '../views/ordercallback/index';
import Orderconfirm from '../views/orderconfirm/index';
import Orderdetail from '../views/orderdetail/index';
const Root = () => (
    <div>
       <Switch>
          <Route
             path="/"
             render={props => (
                <App>
                   <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/goodsdetail/:id" component={GoodsDetail} />
                      <Route path="/address" component={Address} />
                      <Route path="/myorder" component={Myorder} />
                      <Route path="/ordercallback" component={Ordercallback} />
                      <Route path="/orderconfirm" component={Orderconfirm} />
                      <Route path="/orderdetail" component={Orderdetail} />
                       {/*路由不正确时，默认跳回home页面*/}
                      <Route render={() => <Redirect to="/" />} />
                   </Switch>
                </App>
             )}
          />
       </Switch>
    </div>
 );
  
 export default Root;
