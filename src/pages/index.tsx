import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import styles from './index.module.css';
import HeroSection from '../sections/Hero.tsx';
import ExampleSection from '../sections/Example.tsx';
import SolutionsSection from '../sections/Solutions.tsx';
import LearnMoreSection from '../sections/LearnMore.tsx';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Pretty and production-ready ggplot themes`}
      description="With nelsonthemes, you can add carefully prepared themes to improve the readability and comprehension of your plots">
      <main className="flex flex-col">      
        <HeroSection />
        <ExampleSection />
        <SolutionsSection />
        <LearnMoreSection />
      </main>
    </Layout>
  );
}
