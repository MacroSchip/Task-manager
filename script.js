window.open("yourpage.html", "popup", "width=800,height=600,resizable=no");

function addTask() {
  const text = document.getElementById("text").value;
  const cont = document.getElementById("tasks");

  if (text.trim() != "") {
    const tasklist = document.createElement("div");
    tasklist.style.display = "flex";
    tasklist.id = "tasklist";

    const newtask = document.createElement("p");
    newtask.textContent = text;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    tasklist.appendChild(checkbox);
    tasklist.appendChild(newtask);

    cont.appendChild(tasklist);

    document.getElementById("text").value = "";
  } else alert("Task can't be empty!");
}
