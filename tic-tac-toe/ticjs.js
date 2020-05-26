//javascript for tic tac toe
var x=1;
var ch1;
var ch2;
function func(elem)
{
	if(x==1)
		elem.innerHTML=ch1;
	else
		elem.innerHTML=ch2;
	if(x==1)
		x=0;
	else
		x=1;
	//checking winning status
	var p1,p2,p3,p4,p5,p6,p7,p8,p9;
	p1=document.getElementById("t1").innerHTML;
	p2=document.getElementById("t2").innerHTML;
	p3=document.getElementById("t3").innerHTML;
	p4=document.getElementById("t4").innerHTML;
	p5=document.getElementById("t5").innerHTML;
	p6=document.getElementById("t6").innerHTML;
	p7=document.getElementById("t7").innerHTML;
	p8=document.getElementById("t8").innerHTML;
	p9=document.getElementById("t9").innerHTML;
	//declaring winner
	var co=-1,x1;
	if((p1==p2&&p2==p3)&&(p1!=""&&p2!=""&&p3!=""))
		co=1;
	else if((p4==p5&&p5==p6)&&(p4!=""&&p5!=""&&p6!=""))
		co=2;
	else if((p7==p8&&p8==p9)&&(p7!=""&&p8!=""&&p9!=""))
		co=3;
	else if((p1==p4&&p4==p7)&&(p1!=""&&p4!=""&&p7!=""))
		co=4;
	else if((p2==p5&&p5==p8)&&(p2!=""&&p5!=""&&p8!=""))
		co=5;
	else if((p3==p6&&p6==p9)&&(p3!=""&&p6!=""&&p9!=""))
		co=6;
	else if((p1==p5&&p5==p9)&&(p1!=""&&p5!=""&&p9!=""))
		co=7;
	else if((p3==p5&&p5==p7)&&(p3!=""&&p5!=""&&p7!=""))
		co=8;
	else if(p1!=""&&p2!=""&&p3!=""&&p4!=""&&p5!=""&&p6!=""&&p7!=""&&p8!=""&&p9!="")
		co=-2;
	if(co!=-1 && co!=-2)
	{
		x1=document.getElementById("para");
		if(co==1)
			x1.innerHTML=((p1==ch1)?"winner is player 1":"winner is player 2");
		else if(co==2)
			x1.innerHTML=((p4==ch1)?"winner is player 1":"winner is player 2");
		else if(co==3)
			x1.innerHTML=((p7==ch1)?"winner is player 1":"winner is player 2");
		else if(co==4)
			x1.innerHTML=((p1==ch1)?"winner is player 1":"winner is player 2");
		else if(co==5)
			x1.innerHTML=((p2==ch1)?"winner is player 1":"winner is player 2");
		else if(co==6)
			x1.innerHTML=((p3==ch1)?"winner is player 1":"winner is player 2");
		else if(co==7)
			x1.innerHTML=((p1==ch1)?"winner is player 1":"winner is player 2");
		else if(co==8)
			x1.innerHTML=((p3==ch1)?"winner is player 1":"winner is player 2");
	}
	else if(co==-2)
		document.getElementById("para").innerHTML="Match is Tied!";
	
}
function check()
{
	var p1=document.getElementById("tx1").value;
	var p2=document.getElementById("tx2").value;
	/*document.write(p1);
	document.write(p2);*/
	var msg = "Please enter ";
	if(p1==""&&p2!="")
	{
		msg=msg+"Player 1 character";
		alert(msg);
	}
	else if(p2==""&&p1!="")
	{
		msg=msg+"Player 2 character";
		alert(msg);
	}
	else if(p1==""&&p2=="")
	{
		msg=msg+"Player 1 and Player 2 character";
		alert(msg);
	}
	else
	{
		
		//document.getElementById("div").setAttribute("style","display:block");
		var x=document.getElementsByTagName("td");
		var i;
		for(i=0;i<9;i++)
		{
			x[i].innerHTML="";
		}
		ch1=p1;
		ch2=p2;
		document.getElementById("para").innerHTML="";
	}
}

		