const $passwordLength = document.querySelector("#length");
const $currentPasswordLength = document.querySelector(".selected-length");
const $upperCaseCheckBox = document.querySelector("#uppercase")



console.log($upperCaseCheckBox)
$passwordLength.addEventListener("input", function(e) {
    $currentPasswordLength.textContent = e.target.value
})
