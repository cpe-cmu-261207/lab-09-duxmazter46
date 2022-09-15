import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderTodo from "../components/HeaderTodo";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons";
import MainLayout from "../layouts/MainLayout";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconMoon,
  IconSunHigh,
} from "@tabler/icons";
import Head from "next/head";

export default function Home() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };

  const [selTheme, setSelTheme] = useState(themes.light);

  // const [selIcon, setSelIcon] = useState("<IconSunHigh />");

  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);

    // if (selIcon === "☀️") setSelIcon("🌙");
    // else setSelIcon("☀️");
  };

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if (todoStr === null) setTodoInput([]);
    else setTodos(JSON.parse(todoStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const keyDownHandler = (event) => {
    if (event.key !== "Enter") return;

    if (todoInput == "") {
      alert("Todo cannot be empty");
      setTodoInput("");
    } else {
      event.preventDefault();
      const newTodos = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodos);
      setTodoInput("");
      saveTodos();
    }
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodo = [...todos];
    setTodos(newTodo);
    saveTodos();
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
    saveTodos();
  };

  const moveUp = (idx) => {
    if (idx != 0) {
      const temp = todos[idx];
      todos[idx] = todos[idx - 1];
      todos[idx - 1] = temp;
      setTodos([...todos]);
      setTodos;
    }
  };

  const moveDown = (idx) => {
    if (idx != todos.length - 1) {
      const temp = todos[idx];
      todos[idx] = todos[idx + 1];
      todos[idx + 1] = temp;
      setTodos([...todos]);
      setTodos;
    }
  };

  const saveTodos = () => {
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todoStr);
  };

  return (
    <MainLayout>
      <div
        style={{
          backgroundColor: selTheme.background,
          minHeight: "100vh",
        }}
      >
        {/* Entire App container (required for centering) */}
        <div style={{ maxWidth: "700px" }} className="mx-auto">
          <ThemeContext.Provider value={{ selTheme, toggleTheme }}>
            {/* App header */}
            <p
              className="display-4 text-center fst-italic m-4"
              style={{
                color: selTheme.foreground,
              }}
            >
              Minimal Todo List{" "}
              <span className="fst-normal">
                ✅{/* Theme Button*/}
                <button className="btn btn-dark" onClick={toggleTheme}>
                  {selTheme.name === "light" ? <IconSunHigh /> : <IconMoon />}
                </button>
              </span>
            </p>
            {/* Input */}
            <span>
              <input
                className="form-control mb-1 fs-4"
                placeholder="insert todo here..."
                value={todoInput}
                onChange={(event) => {
                  setTodoInput(event.target.value);
                }}
                onKeyDown={keyDownHandler}
              />
            </span>
            <HeaderTodo />
            {/* Todos */}
            <ul>
              {todos.map((todo, i) => (
                <Todo
                  theme={themes.name}
                  key={i}
                  title={todo.title}
                  completed={todo.completed}
                  onDelete={() => deleteTodo(i)}
                  onMark={() => markTodo(i)}
                  moveUp={() => moveUp(i)}
                  moveDown={() => moveDown(i)}
                />
              ))}
            </ul>

            <p className="text-center fs-4">
              <span className="text-primary">All ({todos.length}) </span>
              <span className="text-warning">
                Pending ({todos.filter((x) => x.completed == false).length}){" "}
              </span>
              <span className="text-success">
                Completed ({todos.filter((x) => x.completed == true).length})
              </span>
            </p>

            {/* Made by section */}
            <p className="text-center mt-3 text-muted fst-italic">
              made by Teerit Youngmeesuk 640610643
            </p>
          </ThemeContext.Provider>
        </div>
      </div>
    </MainLayout>
  );
}
