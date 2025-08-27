function Closing({ text }) {
  return (
    <div className="text-[#96A0A5] flex max-w-[540px] justify-between mx-auto text-sm font-bold mt-4 mb-5">
      <h3>{text}</h3>
      <div>
        <img src="/github.svg" alt="Logo Github" className="w-5" />
      </div>
    </div>
  );
}

export default Closing;
