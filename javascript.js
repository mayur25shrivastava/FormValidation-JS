

    
    // <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>


        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');
        const cpassword = document.getElementById('cpassword');

        // add event 

        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            validate();
        })

        const sendData = (usernameval , sRate,  count) => {   

            if (sRate===count){
                alert('registration successfull');
                swal("Great Job!", "Registration Successful", "success");
                location.href = `demo.html?username=${usernameval}`;
            }

        }
        // for final data validation 

        const successMsg = (usernameval) => {
            let formCon = document.getElementsByClassName('form-control');

            var count=formCon.length - 1;

            for(var i=0; i<formCon.length; i++){
                if (formCon[i].className === "form-control success"){
                    var sRate = 0 + i;
                    sendData(usernameval, sRate,count);
                }
                else{
                    return false;
                }
            }
        }

        // more email validate 
        const isEmail= (emailval) => {
            var atSymbol = emailval.indexOf("@");
            if (atSymbol<1) return false;
            var dot=emailval.lastIndexOf(".");
            if(dot <= atSymbol + 2) return false;
            if (dot === emailval.length-1) return false;
            return true;

        }

        // defining the validate function 

        const validate = () => {

        const usernameval = username.value.trim();
        const phoneval = phone.value.trim();
        const emailval = email.value.trim();
        const passwordval = password.value.trim();
        const cpasswordval = cpassword.value.trim();

        // validate username 
        if (usernameval == " ") {
            setErrorMsg(username,'username cannot be blank ');
        }
        else if(usernameval.length<=2){
            setErrorMsg(username,'username cannot be less than 2 characters ');
        } 
        else{
            setSuccessMsg(username);
        }

        // validate email 
        if (emailval === " ") {
            setErrorMsg(email,'email cannot be blank ');
        }
        else if(!isEmail(emailval)){
            setErrorMsg(email,'Not a valid Email ');
        } 
        else{
            setSuccessMsg(email);
        }

        // validate phone 
        if (phoneval === "") {
            setErrorMsg(phone,'phone cannot be blank ');
        }
        else if((phoneval.length != 10)){
            setErrorMsg(phone,'Not a valid phone Number ');
        } 
        else{
            setSuccessMsg(phone);
        }

        // validate password 
        if (passwordval === "") {
            setErrorMsg(password,'password cannot be blank ');
        }
        else if((passwordval.length <= 5)){
            setErrorMsg(password,'passsward should be minimum 5 characters ');
        } 
        else{
            setSuccessMsg(password);
        }

        // validate cpassword 
        if (cpasswordval === "") {
            setErrorMsg(cpassword,'confirm password cannot be blank ');
        }
        else if((passwordval != cpasswordval)){
            setErrorMsg(cpassword,'passsward are not matching ');
        } 
        else{
            setSuccessMsg(cpassword);
        }
        
        successMsg(usernameval);
        }

        function setErrorMsg(input,errormsgs){
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className="form-control error";
            small.innerText = errormsgs;
        }

        function setSuccessMsg(input){
            const formControl = input.parentElement;
            formControl.className="form-control success";
        }
