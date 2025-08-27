export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col items-start gap-3">
      {label && <p className=" font-medium text-lg">{label}</p>}
      <div className="flex flex-wrap gap-4">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              className="h-4 w-4 text-blue-500"
            />
            <div className="text-[17px]">{opt}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
