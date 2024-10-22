import { useEffect, useState } from "react";
import { databases, DB_ID, COLLECTION_ID } from "./lib/appwrite";
import * as appwrite from "appwrite";

// interface ITodo {
//   $id: string;
//   text: string;
//   isFinished: boolean;
// }

const App = () => {
  const [todos, setTodos] = useState<appwrite.Models.Document[]>([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);

    const todos: appwrite.Models.Document[] = res.documents;

    setTodos(todos);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  async function addTodo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (todoText) {
      await databases.createDocument(DB_ID, COLLECTION_ID, ID, {
        text: todoText,
      });

      setTodoText("");

      getTodos();
    }
  }

  return (
    <main className="max-w-3xl w-11/12 mx-auto bg-gray-300 rounded p-10 mt-10">
      <h1 className="text-4xl font-bold my-1 pb-10">To Do</h1>

      <form className="grid gap-4 my-6" onSubmit={addTodo}>
        <textarea
          placeholder="Do this..."
          value={todoText}
          onInput={handleInput}
          className="shadow-xl w-full h-20 p-4 rounded bg-gray-100 disabled:bg-gray-200 disabled:placeholder:text-gray-500 disabled:cursor-not-allowed"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 px-6 py-2 rounded shadow ml-auto transition hover:bg-blue-400 text-white"
        >
          Add ToDo
        </button>
      </form>

      <ul className="space-y-4">
        {todos.map((todo, i) => (
          <li
            className="flex items-center border rounded bg-gray-50  border-black/20 shadow p-4 gap-2"
            key={todo.$id}
          >
            <span>{i + 1}. </span>
            {todo.text}
            <span>{todo.isCompleted ? "✔" : null}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
