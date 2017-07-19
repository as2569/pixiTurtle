function validateCookie(entry)
{		
	//var params = "username=" + document.getElementById("username").value + "&password=" + document.getElementById("password").value;
	//Spryszynski
	//var params = document.cookie.
	var str = document.cookie;
	var data = str.split(";");
	var dataset = JSON.parse(data);
	var xmlhttp = new XMLHttpRequest();
	var params = "activity=validate&username=" + dataset.username + "&id=" + dataset.id;
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4)
		{
			if(this.status == 200)
			{
				var responseObj = JSON.parse(this.responseText);
				if(responseObj.status != "success")
				{
					document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
				}else{
					var date = new Date();
					date.setTime(date.getTime()+(15*60*1000));
					var expires = "; expires="+date.toGMTString();
					document.cookie = "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
					document.cookie = JSON.stringify(dataset) + expires + "; path=/";
					if(entry)
						window.location.href = "https://web.njit.edu/~ust3/testbed/main.html";
				}
			}else{
				document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
				if(!entry)
					window.location.href = "https://web.njit.edu/~ust3/testbed/login.html";
			}
		}
	};
	
	xmlhttp.open("POST", "https://web.njit.edu/~ust3/testbed/example.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(params);	
}

function check(user)
{
	var params = "activity=authenticate&username=" + document.getElementById("username").value + "&password=" + document.getElementById("password").value;
    if (user.length == 0)
	{ 
        return;
    } 
	else
	{
        var xmlhttp = new XMLHttpRequest();
		
        xmlhttp.onreadystatechange = function()
		{
			if (this.readyState == 4)
			{
				if(this.status == 200)
				{
					var responseObj = JSON.parse(this.responseText);
					if(responseObj.status == 'success')
					{
						var date = new Date();
						date.setTime(date.getTime()+(15*60*1000));
						var expires = "; expires="+date.toGMTString();
						var dataset = {username:responseObj.data[0], id:responseObj.data[1]};
						document.cookie = JSON.stringify(dataset) + expires + "; path=/";
						window.location.href = "https://web.njit.edu/~ust3/testbed/main.html";
					}else{
						document.getElementById("output").innerHTML = "Incorrect username and/or password.";
					}
				}else{
				
					var responseObj = eval(fake);
						
					var cookie = "{\"name\":\"test\", \"password\":\"bed\"};path=/";
					document.cookie = cookie;
					var str = document.cookie;
					var data = str.split(";");
					var dataset = JSON.parse(data);
					dataset.name = "newname";
					document.cookie = JSON.stringify(dataset) + ";path=/";
					document.cookie = "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
				}
			}
			
        };
		
        xmlhttp.open("POST", "https://web.njit.edu/~ust3/testbed/example.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(params);
    }
}

//<!-- function check(form) -->
//<!-- { -->
//	<!-- //enter sql here -->
//	<!-- //ask for record with key userID and compare pass.value to value of pass from database -->
//
//	<!-- var id = login.userid.value; -->
//	<!-- var password = 'pass'; -->
//	<!-- console.log(id + " " + login.pass.value); -->
//	
//	<!-- //Get cookie -->
//	<!-- var cookie = document.cookie; -->
//	<!-- if(cookie.length == 0) -->
//	<!-- { -->
		//<!-- console.log("no cookie"); -->
		//<!-- document.cookie = "cookieName = " + id + ";domain=.example.com;path=/"; -->
		
		//<!-- console.log("creating cookie" + document.cookie); -->
	//<!-- } -->
	//<!-- else -->
	//<!-- { -->
//		<!-- console.log(cookie); -->
	//<!-- } -->
	
	//<!-- if(login.pass.value == password) -->
	//<!-- { -->
		//<!-- console.log("login OK"); -->
		//<!-- location.replace("main.html"); -->
	//<!-- } -->
	//<!-- else -->
	//<!-- { -->
		//<!-- console.log("unable to login"); -->
		
	//<!-- } -->
	
//<!-- } -->
