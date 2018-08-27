import React from 'react';

import Layout from '../components/layout';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Footer />
  </Layout>
);

export default IndexPage;
