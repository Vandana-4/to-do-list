var input = document.getElementById("input-box");
        var list = document.getElementById("list-container");
        function addtask() {
            if (input.value === "") {
                alert("You must write something!");
            }
            else {
                var li = document.createElement("li");
                li.innerHTML = input.value;
                list.appendChild(li);
                var span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            input.value = "";
            savedata();
        }
        list.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                savedata();
            }
            else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                savedata();
            }
        });
        function savedata() {
            localStorage.setItem("data", list.innerHTML);
        }
        function showTask() {
            list.innerHTML = localStorage.getItem("data") || "";
        }
        showTask();