document.getElementById("send-email").addEventListener("click", function(e){
    e.preventDefault();
    try{
    let name = document.getElementById("name-field")?.value.trim();
    let form_email = document.getElementById("email-field")?.value.trim();
    let subject = document.getElementById("subject-field")?.value.trim();
    let message = document.getElementById("message-field")?.value.trim();

    if (!name) throw new Error("Name field cannot be empty.");
    if (!form_email) throw new Error("Email field cannot be empty.");
    if (!subject) throw new Error("Subject field cannot be empty.");
    if (!message) throw new Error("Message field cannot be empty.");
    }
    catch (error){
        alert(error.message);
    }
})