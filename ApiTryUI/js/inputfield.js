	$(function() {
    $("#txtssn").keypress(function(event) {
		if(event.which == 13){
			$(".btnsearch").click();
		}
		else
		{
			if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
				document.getElementById("output").innerHTML ="Enter only Digits!";
				$(".divtable").hide(500);
				return false;
			}
			
			var str=document.getElementById("txtssn").value;
			if ((str.length== 9) && (event.which != 8))
			{
				return false;
			} 
		}
    });
});