const Example: React.FC = () => {
  return(
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
  );
};

export default Example;
