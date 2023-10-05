// Add your code here
function submitData(name,email) {
const formData = {
    userName: "name",
    userEmail:"email",
};

const configurationObject= {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(formData),
};
fetch("http://localhost:3000/users",configurationObject)
   .then(function (response) {
    return response.json();
   })
   .then(function (object) {
    console.log(object);
   })
   .catch(function (error) {
    alert("invalid info");
    console.log(error.message);
   });
}