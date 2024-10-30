import { useEffect, useState } from "react";
import { databases, DB_ID, COLLECTION_ID, ID, account } from "./lib/appwrite";
import * as appwrite from "appwrite";

const App = () => {
  const [todos, setTodos] = useState<appwrite.Models.Document[]>([]);
  const [todoText, setTodoText] = useState("");
  const [session, setSession] = useState<
    appwrite.Models.User<appwrite.Models.Preferences> | undefined
  >(undefined);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    getUser();
    getTodos();
  }, []);

  async function getUser() {
    try {
      const newSession = await account.get();

      setSession(newSession);
    } catch (error) {
      console.log("ERROR: ___");
      console.error(error);
    }
  }

  async function getTodos() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);

    console.log(res);

    const todos: appwrite.Models.Document[] = res.documents;

    setTodos(todos.reverse());
  }

  async function updateDocument(id: string, isCompleted: boolean) {
    await databases.updateDocument(DB_ID, COLLECTION_ID, id, {
      isCompleted: isCompleted,
    });

    getTodos();
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTodoText(e.target.value);
  }

  async function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (todoText && session && !blocked) {
      await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
        text: todoText,
        owner_name: session.name,
      });

      setTodoText("");
      setBlocked(true);

      setTimeout(() => {
        setBlocked(false);
      }, 10000);

      getTodos();
    }
  }

  async function deleteDocument(id: string) {
    await databases.deleteDocument(DB_ID, COLLECTION_ID, id);

    getTodos();
  }

  async function login() {
    await account.createOAuth2Session(
      appwrite.OAuthProvider.Github,
      "http://localhost:5173",
      "http://localhost:5173"
    );
  }

  async function logout() {
    await account.deleteSession("current");

    setSession(undefined);
  }

  return (
    <>
      <div className="max-w-3xl flex mx-auto justify-end">
        {session ? (
          <>
            {" "}
            <p className="bg-gray-300 px-6 py-2 rounded shadow justify-end mt-16">
              Hello,&nbsp;
              <span>{session.name}</span>
            </p>
            <button
              className="bg-blue-500 px-6 py-2 rounded shadow ml-auto mt-16 transition hover:bg-blue-400 text-white"
              onClick={logout}
            >
              LogOut
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500  p-6 py-2 rounded shadow ml-auto mt-16 transition hover:bg-blue-400 text-white"
            onClick={login}
          >
            Login With Github
          </button>
        )}
      </div>
      <main className="max-w-3xl w-11/12 mx-auto bg-gray-300 rounded p-10 mt-10">
        <h1 className="text-4xl font-bold my-1 pb-10">To Do</h1>

        <form className="grid gap-4 my-6" onSubmit={addTodo}>
          <textarea
            placeholder={
              blocked ? "Please wait for 10 seconds..." : "Do this..."
            }
            value={todoText}
            onInput={handleInput}
            className="focus:outline-none shadow-[inset_1px_2px_5px_1px_rgba(0,0,0,0.6)] w-full h-20 p-4 rounded bg-gray-100 disabled:bg-gray-200 disabled:placeholder:text-gray-500 disabled:cursor-not-allowed"
            disabled={blocked}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded shadow ml-auto transition hover:bg-blue-400 text-white"
          >
            Add ToDo
          </button>
        </form>

        {todos.length === 0 ? (
          <h3 className="px-4 text-2xl">No Todos. Please add a Todo</h3>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo, i) => (
              <li
                className="flex items-center border rounded bg-gray-50  border-black/20 shadow p-4 gap-2"
                key={todo.$id}
              >
                <span>{i + 1}. </span>
                <p>
                  {todo.owner_name ? (
                    <strong>{todo.owner_name}: </strong>
                  ) : (
                    <strong>Unknown User: </strong>
                  )}
                  {todo.text}
                </p>

                <span>{todo.isCompleted ? "✔" : null}</span>

                <div className="ml-auto flex gap-3 items-center">
                  {session?.labels.includes("admin") ? (
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() =>
                        updateDocument(todo.$id, !todo.isCompleted)
                      }
                    />
                  ) : null}

                  {todo.$permissions.includes(
                    `delete("user:${session?.$id}")`
                  ) || session?.labels.includes("admin") ? (
                    <button
                      className="text-red-500 hover:text-red-800"
                      onClick={() => deleteDocument(todo.$id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default App;
