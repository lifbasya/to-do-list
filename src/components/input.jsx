function Input({ text, label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <>
      <h3 className="text-left text-lg font-medium">{label}</h3>
      <input className="border-2 border-[#D5DDEC] rounded-lg p-3 focus:ring focus:ring-[#D5DDEC] outline-none"
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
