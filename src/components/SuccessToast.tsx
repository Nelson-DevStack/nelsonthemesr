const SuccessToast: React.FC = ({ text, visible }): { text: string, visible: boolean } => {
  return(
    <div className={`bg-[#fafafa] ${visible ? 'visible' : 'invisible absolute'} fixed border border-2 border-red-900 inset-x-0 bottom-10 max-w-xs md:max-w-fit px-4 py-1 rounded-md shadow shadow-2xl mx-auto transition duration-200`}>
      <span className="text-slate-900 font-bold">{text}</span>
    </div>
  )
}

export default SuccessToast;
