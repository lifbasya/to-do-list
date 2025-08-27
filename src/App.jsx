import { useState, useEffect } from "react";
import "./App.css";
import Closing from "./components/closing";
import Input from "./components/input";
import RadioGroup from "./components/radioGroup";
import Button from "./components/button";
import Card from "./components/card";
import Opening from "./components/opening";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({
    title: "",
    desc: "",
    status: "To do",
  });
  const [editIndex, setEditIndex] = useState(null); // Track index yg diedit

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.desc) return alert("Lengkapi data dulu!");
    if (editIndex !== null) {
      // Update item kalau sedang edit
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = form;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Tambah item baru
      setTodos([...todos, form]);
    }
    setForm({ title: "", desc: "", status: "To do" });
  };

  const handleDelete = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  const handleEdit = (index) => {
    setForm(todos[index]); // Load data ke form
    setEditIndex(index); // Simpan index item yang diedit
  };

  return (
    <>
      <header className="px-3 lg:px-0 w-full">
        <Opening text="To do List" />
      </header>

      <main className="text-center flex flex-col gap-8 max-w-[540px] w-full mx-auto px-3 lg:px-0">
        <div className="flex flex-col gap-4 bg-white p-8 lg:p-8 lg:py-5 w-full rounded-b-xl shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <Input
              label="Judul"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Masukan judul..."
            />
            <Input
              label="Deskripsi"
              name="desc"
              type="textarea"
              value={form.desc}
              onChange={handleChange}
              placeholder="Masukan deskripsi."
            />
          </div>

          <RadioGroup
            label="status"
            name="status"
            options={["To do", "In Progress", "Done"]}
            value={form.status}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Tambah"}
          </Button>
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
          {todos.map((todo, i) => (
            <Card
              key={i}
              title={todo.title}
              desc={todo.desc}
              status={todo.status}
              onEdit={() => handleEdit(i)}
              onDelete={() => handleDelete(i)}
            />
          ))}
        </div>
      </main>
      <footer className="px-3 lg:px-0 w-full">
        <Closing text="Copyright © 2025" />
      </footer>
    </>
  );
}

export default App;
