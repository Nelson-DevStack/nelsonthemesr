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

const SuccessToast = ({ text, visible }): { text: string, visible: boolean } => {
  return(
    <div className={`bg-[#fafafa] ${visible ? 'visible' : 'invisible absolute'} fixed border border-2 border-red-900 inset-x-0 bottom-10 max-w-xs md:max-w-fit px-4 py-1 rounded-md shadow shadow-2xl mx-auto transition duration-200`}>
      <span className="text-slate-900 font-bold">{text}</span>
    </div>
  )
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePageHeader() {
  const [isToastVisible, setToastVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }, [isToastVisible]);

  const handleClipboardAction = (text: string) => {
    navigator.clipboard.writeText(text)
    setToastVisible(true);
  }

  return(
    <section className="w-full h-full bg-gradient-to-b from-[#FFF] to-indigo-100">
      <SuccessToast text="Copiado para a área de transferência ✅" visible={isToastVisible} />
      <div className="container px-8 md:px-12 mx-auto py-16 h-full grid gap-12 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="mx-auto text-center flex flex-col gap-4 md:gap-8 col-span-full lg:col-start-4 lg:col-span-6 flex flex-col items-center">
          <h1 className="font-main font-bold text-4xl md:text-5xl">The R theme package for making <span className="text-[#492EB7]">beautiful</span> and <span className="text-[#492EB7]">production-ready</span> plots</h1>
          <p className="text-slate-700 font-main text-lg">With nelsonthemes, you can add carefully prepared themes to improve the readability and comprehension of your plots.</p>
          <div className="bg-[#492EB7] rounded-lg shadow-inner text-sm p-4 flex flex-row items-center gap-4">
            <span className="font-fira max-w-fit rounded-lg text-slate-100">
              devtools::install_github("Nelson-DevStack/nelsonthemes")
            </span>
            <CopyIcon title="Copy Icon" className={`max-w-[20px] max-h-[20px] hover:bg-slate-400 transition duration-200 cursor-pointer rounded-sm`} onClick={() => handleClipboardAction('devtools::install_github("Nelson-DevStack/nelsonthemes")')} />
          </div>
        </div>
        <div className="col-span-full lg:col-start-4 lg:col-span-6">
          <img src={require('@site/static/img/logo_nelsonthemes.png').default} />
        </div>
      </div>
    </section>
  )
};


// function HomePageHeader() {
//   return(
//     <section className="w-full h-full">
//       <div className="container px-8 md:px-12 mx-auto py-16 h-full flex flex-col gap-12">
//         <div className="mx-auto text-center flex flex-col gap-8 items-center">
//           <h1 className="text-5xl font-bold">The R theme package for making beautiful and production-ready plots</h1>
//           <p className="text-slate-700">With nelsonthemes, you can add carefully prepared themes to improve the readability and comprehension of your plots.</p>
//           <span className="bg-[#492EB7] font-monospace max-w-fit p-4 rounded-lg text-slate-200 shadow-inner">
//             devtools::install_github("Nelson-DevStack/nelsonthemes")
//           </span>
//         </div>
//         <div className="">
//           <img className="" src={require('@site/static/img/logo_nelsonthemes.png').default} />
//         </div>
//       </div>
//     </section>
//   )
// };

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/*
        <HomepageHeader />
      */}
      <main className="flex flex-col tailwind-scope">
        <HomePageHeader />
        <section className="w-full tailwind-scope shadow-2xl">
          <div className="container px-8 md:px-12 mx-auto py-16 h-full grid gap-12 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="w-full col-span-full">
              <h2 className="tailwind-scope text-2xl md:text-5xl font-bold text-[#492EB7] max-w-2xl font-main">
                Simple plots using themes from nelsonthemes
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 mt-16">
                <div className="col-span-full lg:col-span-6">
                  <img src={require("@site/static/img/nelsonthemes_showcase1.png").default} />
                </div>
                <div className="col-span-full lg:col-span-6">
                  <img src={require("@site/static/img/nelsonthemes_showcase2.png").default} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#492EB7]">
          <div className="container px-8 md:px-12 mx-auto py-16 h-full grid gap-12 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-full flex flex-col gap-8">
              <h2 className="text-2xl md:text-5xl font-bold text-[#FAFAFA] max-w-xl font-main">What problems does nelsonthemes solve?</h2>
              <ul className="flex flex-col gap-2 text-[#FAFAFA] font-medium list-disc pl-4 font-main">
                <li>Lack of spacing between axis labels and lines;</li>
                <li>Lack of margins for the chart title and subtitle;</li>
                <li>Lack of highlight on axis labels ;</li>
                <li>Lack of highlight on chart texts;</li>
                <li>Lack of a simple setting to attach the plot to the x-axis.</li>
              </ul>
            </div>
            <div className="col-span-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-8 lg:gap-x-32">
              <div className="col-span-full lg:col-span-6 flex flex-col gap-2">
                <h3 className="bg-[#fafafa] px-4 py-2 text-xl lg:text-3xl text-slate-900 max-w-fit flex flex-row gap-4 rounded-md uppercase text-[#492EB7] font-bold">Before ❌</h3>
                <div>
                  <img src={require("@site/static/img/features_before.png").default} />
                </div>
              </div>
              <div className="col-span-full lg:col-span-6 flex flex-col gap-2">
                <h3 className="bg-[#fafafa] px-4 py-2 text-xl lg:text-3xl text-slate-900 max-w-fit flex flex-row gap-4 rounded-md uppercase text-[#492EB7] font-bold">After ✅</h3>
                <div>
                  <img src={require("@site/static/img/features_after.png").default} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-8 md:px-12 mx-auto py-16 h-full grid gap-12 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-full lg:col-span-4 flex flex-col gap-4 justify-center">
              <h2 className="text-2xl md:text-5xl text-[#492EB7] font-bold">Learn more</h2>
              <p className="text-slate-800">Check the nelsonthemes documentation for available features and applications.</p>
              <Link to="/docs/intro">
                <button className="w-full py-2 bg-[#492EB7] text-[#0BEBAF] rounded-md font-bold border-none shadow-lg shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-400 transition duration-200 hover:cursor-pointer">
                  Documentation
                </button>
              </Link>
            </div>
            <div className="col-span-full lg:col-span-8 bg-[#492EB7] rounded-lg">
              <img src={require("@site/static/img/logo_symbol.png").default} />
            </div>
          </div>
        </section>
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}
