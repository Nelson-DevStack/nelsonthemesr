import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CopyIcon from "@site/static/img/copy_icon.svg";
import { useState, useEffect } from 'react'
import styles from './index.module.css';
import SuccessToast from '../components/SuccessToast.tsx';
import HeroSection from '../sections/Hero.tsx';
import ExampleSection from '../sections/Example.tsx';
import SolutionsSection from '../sections/Solutions.tsx';
import LearnMoreSection from '../sections/LearnMore.tsx';

// const SuccessToast = ({ text, visible }): { text: string, visible: boolean } => {
//   return(
//     <div className={`bg-[#fafafa] ${visible ? 'visible' : 'invisible absolute'} fixed border border-2 border-red-900 inset-x-0 bottom-10 max-w-xs md:max-w-fit px-4 py-1 rounded-md shadow shadow-2xl mx-auto transition duration-200`}>
//       <span className="text-slate-900 font-bold">{text}</span>
//     </div>
//   )
// }


// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Pretty and production-ready ggplot themes`}
      description="Description will go into a meta tag in <head />">
      <main className="flex flex-col">      
        <HeroSection />
        <ExampleSection />
        <SolutionsSection />
        <LearnMoreSection />
      </main>
    </Layout>
  );
}
