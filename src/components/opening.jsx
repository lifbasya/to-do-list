function Opening({ text }) {
  return (
    <header className="bg-blue-500 text-white text-center py-6 px-8 w-full max-w-[540px] flex gap-4 justify-start mx-auto rounded-t-xl mt-5 text-2xl font-bold">
      <img src="/list.svg" alt="Logo Checklist" className="w-6" />
      <h1>{text}</h1>
    </header>
  );
}

export default Opening;
