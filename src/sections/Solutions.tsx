const Solutions = () => {
  return(
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
            <h3 className="bg-[#fafafa] px-4 py-2 text-xl lg:text-3xl text-slate-900 max-w-fit flex flex-row gap-4 rounded-md uppercase text-[#492EB7] font-bold font-main">Before ❌</h3>
            <div>
              <img src={require("@site/static/img/features_before.png").default} />
            </div>
          </div>
          <div className="col-span-full lg:col-span-6 flex flex-col gap-2">
            <h3 className="bg-[#fafafa] px-4 py-2 text-xl lg:text-3xl text-slate-900 max-w-fit flex flex-row gap-4 rounded-md uppercase text-[#492EB7] font-bold font-main">After ✅</h3>
            <div>
              <img src={require("@site/static/img/features_after.png").default} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Solutions;
