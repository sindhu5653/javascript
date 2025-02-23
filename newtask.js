function addContact() {
    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let phone = document.getElementById("phoneInput").value.trim();
    if (!name || !email || !phone) return;
    
    let li = document.createElement("li");
    let nameInput = document.createElement("input");
    let emailInput = document.createElement("input");
    let phoneInput = document.createElement("input");
    
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function() {
        nameInput.removeAttribute("disabled");
        emailInput.removeAttribute("disabled");
        phoneInput.removeAttribute("disabled");
        saveBtn.style.display = "inline";
        editBtn.style.display = "none";
    };
    
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.style.display = "none";
    saveBtn.onclick = function() {
        nameInput.setAttribute("disabled", true);
        emailInput.setAttribute("disabled", true);
        phoneInput.setAttribute("disabled", true);
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
    };
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() { li.remove(); };
    
    nameInput.setAttribute("disabled", true);
    emailInput.setAttribute("disabled", true);
    phoneInput.setAttribute("disabled", true);
    
    li.appendChild(nameInput);
    li.appendChild(emailInput);
    li.appendChild(phoneInput);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(deleteBtn);
    document.getElementById("contactList").appendChild(li);
    
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("phoneInput").value = "";
}