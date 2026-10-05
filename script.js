function showResult() {

    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (name === "") {
        document.getElementById("result").innerHTML =
            "Please enter student name.";
        return;
    }

    if (marks === "" || marks < 0 || marks > 100) {
        document.getElementById("result").innerHTML =
            "Please enter marks between 0 and 100.";
        return;
    }

    if (marks >= 40) {
        document.getElementById("result").innerHTML =
            name + " - PASS";
        document.getElementById("result").style.color = "green";
    } 
    else {
        document.getElementById("result").innerHTML =
            name + " - FAIL";
        document.getElementById("result").style.color = "red";
    }
}
