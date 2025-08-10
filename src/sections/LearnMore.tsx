import Link from '@docusaurus/Link';

const LearnMore: React.FC = () => {
  return(
    <section>
      <div className="container px-8 md:px-12 mx-auto py-16 h-full grid gap-12 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-full lg:col-span-4 flex flex-col gap-4 justify-center">
          <h2 className="text-2xl md:text-5xl text-[#492EB7] font-bold font-main">Learn more</h2>
          <p className="text-slate-800">Check the nelsonthemes documentation for available features and applications.</p>
          <Link to="/docs/intro">
            <button className="w-full py-2 bg-[#492EB7] text-[#0BEBAF] rounded-md font-bold border-none shadow-lg shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-400 transition duration-200 hover:cursor-pointer font-main">
              Documentation
            </button>
          </Link>
        </div>
        <div className="col-span-full lg:col-span-8 bg-[#492EB7] rounded-lg">
          <img src={require("@site/static/img/logo_symbol.png").default} />
        </div>
      </div>
    </section>
  )
};

export default LearnMore;
