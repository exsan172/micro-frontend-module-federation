import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from 'recoil'
import Routes from './routes'
import './index.css'

const App = () => (
  <RecoilRoot>
    <Routes/>
  </RecoilRoot>
);
ReactDOM.render(<App />, document.getElementById("app"));
