import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/fizica/clasa6/capitolul1-introducere-in-studiul-fizicii/I-1-ce-este-fizica">
            Apasă aici ca să înveți fizica️
          </Link>
        </div>

       <br></br>

       <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chimie/clasa7/capitolul1-chimia-stiinta-a-naturii/I-1-ce-este-chimia">
              Apasă aici ca să înveți chimia️
          </Link>
        </div>


      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>

);
}


