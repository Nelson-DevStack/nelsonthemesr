import { useState, useEffect } from 'react';
import SuccessToast from '../components/SuccessToast.tsx';
import CopyIcon from "@site/static/img/copy_icon.svg";

const Hero: React.FC = () => {
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
}

export default Hero;
