

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('fom');
            form.addEventListener('submit', authenticate);
        });
            function authenticate(event) {
            event.preventDefault();
            let uname = document.getElementById("name").value;
            let tele = document.getElementById("no").value;
            let pwd = document.getElementById("pass1").value; 
            let pword = document.getElementById("pass2").value;  
            let terms = document.getElementById("terms").checked;
            let FormhasError = false;
            document.querySelectorAll('.error-message').forEach(function(msg) {
                msg.remove();
            });
            if (tele.length !== 10 || isNaN(tele)) {
                const msg = document.createElement('div');
                msg.textContent = 'Invalid Mobile Number';
                msg.style.color = 'red';
                msg.style.fontSize = '15px';
                msg.style.fontWeight = "bold";
                msg.style.marginTop = '5px';
                msg.className = 'error-message';
                document.getElementById('no').insertAdjacentElement('afterend', msg);
                FormhasError = true;
            }
            if (pwd.length < 8) {
                const msg = document.createElement('div');
                msg.textContent = 'Invalid Password Format';
                msg.style.color = 'red';
                msg.style.fontSize = '15px';
                msg.style.fontWeight = "bold";
                msg.style.marginTop = '5px';
                msg.className = 'error-message';
                document.getElementById('pass1').insertAdjacentElement('afterend', msg);
                 FormhasError = true;
            }
            if (pword !== pwd) {
                alert('Passwords do not match');
                FormhasError = true;
            }
            if (!terms && pwd===pword && pwd!=="") { 
                alert('You must accept the terms and conditions'); 
                FormhasError = true; }
            if (!FormhasError) {
                alert("User registered successfully!");
                document.getElementById('name').value = "";
                document.getElementById('email').value="";
                document.getElementById('no').value = "";
                document.getElementById('pass1').value = "";
                document.getElementById('pass2').value = "";
                document.getElementById('terms').checked = false;
                document.getElementById('fom').submit();
            }
        }
 


