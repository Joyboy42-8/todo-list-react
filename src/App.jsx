import { useEffect, useRef, useState } from "react";
import Task from "./components/Task";
import Header from "./components/layouts/Header";
import Tasks from "./components/layouts/Tasks";

export default function App() {
  const [tasks, setTasks]  = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const task = useRef();

  useEffect(() => {
    task.current.focus();
  }, [])

  const handleAddClick = (e) => {
    e.preventDefault();
    // Verifier si le champ n'est pas vide 
    task.current.value == '' ? alert("Le champ ne doit pas etre vide !") : 
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        task: task.current.value,
        date: new Date().toLocaleString(),
      },
    ]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    task.current.value = null;
  }

  return (
    <main className="App">
      <Header />

      <section className="AddForm">
        <form onSubmit={(e) => handleAddClick(e)} className="Form">
          <input
            type="text"
            ref={task}
            className="Input"
            placeholder="Que souhaitez-vous ajouter ?"
            required
          />
          <button type='submit' className="SubmitButton">
            Ajouter
          </button>
        </form>
      </section>

      <Tasks>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Tasks>
    </main>
  );
}