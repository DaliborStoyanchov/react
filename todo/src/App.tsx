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

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);

    const todos: appwrite.Models.Document[] = res.documents;

    setTodos(todos);
  }

  return (
    <main className="max-w-3xl w-11/12 mx-auto bg-slate-100 rounded p-10 mt-10">
      <h1 className="text-4xl font-bold my-1 pb-10">To Do</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            className="flex items-center border rounded border-black/20 shadow p-4 gap-2"
            key={todo.$id}
          >
            {todo.text}
            <span>{todo.isCompleted ? "✔" : null}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
