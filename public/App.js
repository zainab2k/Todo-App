import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGdkGnBNt6w1zceQ4gmxCaCzSF1U5I0GY",
  authDomain: "todo-app-df0b3.firebaseapp.com",
  databaseURL: "https://todo-app-df0b3-default-rtdb.firebaseio.com",
  projectId: "todo-app-df0b3",
  storageBucket: "todo-app-df0b3.appspot.com",
  messagingSenderId: "656969160070",
  appId: "1:656969160070:web:9a145aa7134043cc3f4807",
  measurementId: "G-9RPLFC3646",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Form = document.getElementById("Form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

Form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const task = todoInput.value.trim();
  if (task) {
    try {
      const newTaskRef = push(ref(db, "todos"));
      await set(newTaskRef, {
        task: task,
        completed: true,
        timestamp: new Date().toISOString(),
      });
      todoInput.value = "";
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
});

export function renderTask(key, task) {
  const todoList = document.getElementById("todo-list");

  const li = document.createElement("li");
  li.setAttribute("data-id", key);

  const taskSpan = document.createElement("span");
  taskSpan.textContent = task.task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  deleteBtn.addEventListener("click", async () => {
    try {
      await remove(ref(db, `todos/${key}`));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  });
}

onValue(ref(db, "todos"), (snapshot) => {
  todoList.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    renderTask(childSnapshot.key, childSnapshot.val());
  });
});
