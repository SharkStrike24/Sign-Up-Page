const pswd = document.getElementById("pw")
const pswdCf = document.getElementById("pwcf")
const inputs = document.querySelectorAll("#signup-form> label >input")
const errorText = document.getElementById("error-text")
console.log(inputs)
function verifyPassword(){
	for(let i = 0; i < inputs.length; i++){
		if(inputs[i].value === ""){
			errorText.innerHTML = "Please enter values in all required fields."
			return false
		}
	}
	if(pswd.value === pswdCf.value){
		return true;
	}
	else{
			errorText.innerHTML = "Passwords do not match."
			return false
	}
}
