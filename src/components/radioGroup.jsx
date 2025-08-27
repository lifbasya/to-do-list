export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col items-start gap-3">
      {label && <p className=" font-medium text-base">{label}</p>}
      <div className="flex flex-wrap gap-4">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              className="w-3 h-3 text-blue-500 cursor-pointer"
            />
            <div className="text-base">{opt}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
