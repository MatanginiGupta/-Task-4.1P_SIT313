import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import NavigationBar from './Navigationbar';
import CoverImage from './CoverImage';
import HeaderFreelancer from './HeaderFreelancer';
import CardList from './Cardlist';
import Button from './Button'
import HeaderCustomer from './HeaderCustomer';
import CustomerCardList from './CustomerCardlist'
import EmailBanner from './EmailBanner'
import FooterBanner from './FooterBanner'



ReactDOM.render(<div>
  <NavigationBar />
  <CoverImage />
  <HeaderFreelancer />
  <CardList />
  <Button />
  <HeaderCustomer />
  <CustomerCardList />
  <Button />
  <EmailBanner />
  <FooterBanner />
  


  </div>
  , document.getElementById('root'));
