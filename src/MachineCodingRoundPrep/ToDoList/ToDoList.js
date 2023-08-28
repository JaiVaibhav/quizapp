import React, { useState } from "react";
import styled from "./ToDoList.module.css";
function ToDoList() {
  const [listData, setListData] = useState([]);
  const [newTask, setNewTask] = useState(null);

  function updateTask(task, id) {
    const data = listData.map((ele) => {
      if (ele.id == id) {
        ele.text = task;
        return ele;
      }
      return ele;
    });
    setListData([...data]);
  }
  return (
    <div className={styled.container}>
      <div>
        <input
          type="text"
          placeholder="Create a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            if (newTask) {
              listData.push({
                text: newTask,
                id: new Date().getTime(),
                isCompleted: false,
              });
              setNewTask("");
              setListData([...listData]);
            }
          }}
        >
          +
        </button>
        <div
          onChange={(e) => {
            const data = listData.map((ele) => {
              if (ele.id == e.target.dataset.index) {
                ele.isCompleted = !ele.isCompleted;
                return ele;
              }
              return ele;
            });
            setListData([...data]);
          }}
          onClick={(e) => {
            const newListData = listData.filter(
              (ele) => ele.id != e.target.dataset.index
            );
            setListData(newListData);
          }}
        >
          {listData.map((ele) => {
            return <ToDoItem item={ele} updateTask={updateTask} />;
          })}
        </div>
        {/* <ToDoItem /> */}
      </div>
    </div>
  );
}

function ToDoItem({ item, updateTask }) {
  const [editMode, setEditMode] = useState(false);
  const [editTask, setEditTask] = useState("");
  return (
    <div className={styled.todoitemcontainer}>
      <div>
        {editMode === false ? (
          <label>{item.isCompleted ? <s>{item.text}</s> : item.text}</label>
        ) : (
          <>
            <input
              value={editTask}
              onChange={(e) => {
                e.stopPropagation();
                setEditTask(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateTask(editTask, item.id);
                setEditMode(false);
              }}
            >
              Updt
            </button>
          </>
        )}
      </div>
      {editMode === false ? (
        <div>
          <input
            type="checkbox"
            checked={item.isCompleted}
            data-index={item.id}
          />
          <button data-index={item.id}>X</button>
          <button
            data-index={item.id}
            onClick={(e) => {
              setEditMode(true);

              setEditTask(item.text);
              e.stopPropagation();
            }}
          >
            &#9998;
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ToDoList;
