function Closing({ text }) {
  return (
    <footer className="text-[#96A0A5] flex max-w-[540px] justify-between mx-auto text-sm font-bold mt-4">
      <h3>{text}</h3>
      <div>
        <img
          src="/github.svg"
          alt="Logo Github"
          className="w-5"
        />
      </div>
    </footer>
  );
}

export default Closing;
