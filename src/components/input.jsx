function Input({ text, label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <>
      <h3 className="text-left text-base font-medium">{label}</h3>
      <input className="border border-[#D5DDEC] rounded-lg p-3 focus:ring focus:ring-[#D5DDEC] outline-none placeholder:text-sm text-sm "
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
