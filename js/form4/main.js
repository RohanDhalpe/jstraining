let users;

const getUsers = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const responseBody = await response.json();
        users = responseBody.users;
        renderTable(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

const sortByName = () => {
    console.log("In sortByName");
    users.sort((a, b) => {
        if (a.firstName > b.firstName)
            return 1;
        if (a.firstName < b.firstName)
            return -1;
        return 0;
    });
    renderTable(users);
};

const search = () => {
    const str = document.getElementById("filter").value.trim().toLowerCase();
    const filteredUsers = users.filter(user => {
        const vals = Object.values(user);
        return vals.some(val => val.toString().toLowerCase().includes(str));
    });
    renderTable(filteredUsers);
};

const getAllUsers = () => {
    renderTable(users);
};

const renderTable = (users) => {
    const tableContainer = document.getElementById("table");
    tableContainer.innerHTML = "";
    
    const newTable = document.createElement("table");
    newTable.classList.add("user-table");

    const tableHead = newTable.createTHead();
    const headRow = tableHead.insertRow();
    headRow.id = "head";

    const headings = ["Name", "Email", "Username"];
    headings.forEach(heading => {
        const newHead = document.createElement("th");
        newHead.textContent = heading;
        headRow.appendChild(newHead);
    });

    const tableBody = newTable.createTBody();

    users.forEach((user, i) => {
        if (i > 11)
            return;
        
        const newRow = tableBody.insertRow();

        const newCellName = newRow.insertCell();
        newCellName.textContent = `${user.firstName} ${user.lastName}`;

        const newCellEmail = newRow.insertCell();
        newCellEmail.textContent = user.email;

        const newCellUsername = newRow.insertCell();
        newCellUsername.textContent = user.username;
    });

    tableContainer.appendChild(newTable);
};