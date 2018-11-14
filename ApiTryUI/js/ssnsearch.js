    var xmlhttp;
     // webservice.Credentials = new NetworkCredential("Fred", "fredpwd", "https://192.86.32.92:9443/loanapptest01/Item/");
	 webservice.PreAuthenticate = true;
	
    function getdetails() {
		xmlhttp = new XMLHttpRequest();
        var ssn = document.getElementById("txtssn");
		var len = ssn.value.length;
		
        // var url = "https://192.86.32.92:9443/loanapptest01/Item/" + ssn.value;
		var url = "http://localhost:5000/api/logindetails/"+ ssn.value;
		var elig_check;
		
        xmlhttp.open('GET',url,true);
		xmlhttp.withCredentials = true;
		xmlhttp.setRequestHeader("Authorization", "Basic " + btoa("Fred:fredpwd"));
        xmlhttp.send(null);
        xmlhttp.onreadystatechange = function() 
		{
			if (ssn.value == "")
			{
				document.getElementById("output").innerHTML ="Field cannot be blank !";
				$(".divtable").hide(500);
			}
			else
			if (len < 9)
			{
				// console.log("SSN should be of Nine Digits !");
				document.getElementById("output").innerHTML ="SSN should be of Nine Digits !";
				$(".divtable").hide(500);
			}
			else
			{
               if (xmlhttp.readyState == 4) 
			   {
					if ( xmlhttp.status == 500)
					{
						document.getElementById("output").innerHTML ="SSN should be of Nine Digits !";
						$(".divtable").hide(500);
						
					}
					else
					{
						if ( xmlhttp.status == 200)
						{
						var det = eval( "(" +  xmlhttp.responseText + ")");
							var response = JSON.parse(xmlhttp.responseText);
							// <!-- if (JSON.stringify(response.LOANAPP0OperationResponse.ca_response_message) == "OPERATION UNKNOWN") {
							if ((response.LOANAPP0OperationResponse.ca_response_message) == "OPERATION UNKNOWN") 
							{  
								document.getElementById("output").innerHTML ="SSN NOT FOUND";
								document.getElementById("txt_cust_num").value="";
								document.getElementById("txt_cust_ssn").value="";
								document.getElementById("txt_cust_fname").value="";
								document.getElementById("txt_cust_lname").value="";
								document.getElementById("txt_cust_dob").value="";
								document.getElementById("txt_cust_add").value="";
								document.getElementById("txt_cust_city").value="";
								document.getElementById("txt_cust_state").value="";
								document.getElementById("txt_cust_zip").value="";
								document.getElementById("txt_cust_sal").value="";
								document.getElementById("txt_cust_elig").value="";
								
								$(".divtable").hide(500);
							}
							else 
							{
								showTable();
								document.getElementById("output").innerHTML ="SSN FOUND";
								
								var resp=JSON.stringify(response.LOANAPP0OperationResponse.ca_inquire_request.ca_cust_num);
								document.getElementById("txt_cust_num").value=resp.replace(/\"/g, "");
								var response = JSON.stringify(response.LOANAPP0OperationResponse.ca_response_message);
								var fname = response.split("+")[0];
								var lname = response.split("+")[1];
								var dob = response.split("+")[2];
								var addr = response.split("+")[3];
								var city = response.split("+")[4];
								var state = response.split("+")[5];
								var zip = response.split("+")[6];
								var salary = response.split("+")[7];
								var elig = response.split("+")[8];
								
								document.getElementById("cust_elig").style.color= "#000000";
								document.getElementById("txt_cust_elig").style.color= "#f0651f";
								
								if (fname.replace(/\"/g, "") =="SSN FOUND")
								{
									document.getElementById("txt_cust_fname").value="undefined";
									document.getElementById("txt_cust_sal").value="undefined";
									
								}
								else
								{
									document.getElementById("txt_cust_fname").value=fname.replace(/\"/g, "");
									document.getElementById("txt_cust_sal").value=salary.replace(/\"/g, "");
									elig_check = elig.replace(/\"/g, "");
									if (elig_check == 'N')
									{
									document.getElementById("txt_cust_elig").value=elig_check;
									document.getElementById("cust_elig").style.color = "#ff0000";
									document.getElementById("txt_cust_elig").style.color = "#ff0000";
									
									// document.getElementById("elig_check_text").innerHTML="Eligible for Loan";
									}									
									else
									{
									document.getElementById("txt_cust_elig").value=elig_check;
									// document.getElementById("elig_check_text").innerHTML="Not Eligible for Loan";
									}									
									
								}
							
								document.getElementById("txt_cust_ssn").value=ssn.value;
								document.getElementById("txt_cust_lname").value=lname;
								document.getElementById("txt_cust_dob").value=dob;
								document.getElementById("txt_cust_add").value=addr;
								document.getElementById("txt_cust_city").value=city;
								document.getElementById("txt_cust_state").value=state;
								document.getElementById("txt_cust_zip").value=zip;
								
							}
						}
						else
						{
							if ( xmlhttp.status == 0) 
							{
								var det = eval( "(" +  xmlhttp.responseText + ")");
								var response = JSON.parse(xmlhttp.responseText);
								alert("Response code 0 Customer Number is: "+ xmlhttp.responseText);
							}
							else
							{								
								alert("Failed - Error ->" + xmlhttp.responseText);
							}
						}	
			
					}
				}	
			}
		};
    }

	function reload()
	{
		location.reload();
	}
