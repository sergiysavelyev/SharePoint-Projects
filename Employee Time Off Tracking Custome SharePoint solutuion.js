<style>

  td select {
  text-align-last:center;
  text-align: center;
  padding:0px;
  width: 50%;
  height: 100%;
  background-color: transparent;
  background: rgba(0, 0, 0, 0);
  color: #848484;
  border: none;
  outline: none;
  box-shadow: none;
  font-family:arial; 
  font-size:12px;
  font-weight: normal;
 -moz-appearance: none;
 -webkit-appearance: none;
}

td select::-ms-expand {
  display: none;
}

  td.bd {
  width:25px;
  height: 25px;
  color: black; 
  background-color: rgb(255, 255, 255); 
  font-weight: normal;
  border-left:solid black 1px;
  border-top:solid black 1px;
  text-align: center;
  padding:0px;
  white-space: nowrap;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 25px 25px;
  background-image: url("http://cclportal.carnival.com/fin/FinTech/PortalImage/BD.png");
 }

  td.generic {
  width:25px;
  height: 25px;
  color: black; 
  background-color: rgb(255, 255, 255); 
  font-weight: normal;
  border-left:solid black 1px;
  border-top:solid black 1px;
  text-align: center;
  padding:0px;
  white-space: nowrap;
 }
 
 td.weekend {
  width:25px;
  height: 25px;
  color: black; 
  background-color: rgb(226, 226, 226); 
  font-weight: normal; 
  border-left:solid black 1px;
  border-top:solid black 1px;
  text-align: center;
  padding:0px;
  white-space: nowrap;
 }
 
  td {
  color: black; 
  font-weight: normal;
  border-left:solid black 1px;
  border-top:solid black 1px;
  overflow: hidden;
 }
 
 th {
  height: 25px; 
  border-left:solid black 1px;
  border-top:solid black 1px;
  color: black; 
  font-weight: bold; 
  text-align: center; 
  background-color: #BDBDBD; 
  overflow: hidden;
  font-family:arial;
  font-size:12px;
}

td:first-child, th:first-child {
     border-left: none;
}
th:first-child {
     border-top: none;
}

table tr:last-child td:last-child {
     border-radius:0px 0px 10px 0px;
}
 
#items{
  list-style:none;
  margin:0px;
  margin-top:4px;
  padding-left:10px;
  padding-right:10px;
  padding-bottom:3px;
  font-size:17px;
  color: #333333;
  
}
hr{ 
  width: 85%; 
  background-color:#E4E4E4;
  border-color:#E4E4E4;
  color:#E4E4E4;
}
#cntnr{
  display:none;
  position:fixed;
  border:1px solid #B2B2B2;
  width:150px;      
  background:#F9F9F9;
  box-shadow: 3px 3px 2px #E9E9E9;
  border-radius:4px;
}

li{
  padding: 3px;
  padding-left:10px;
}

#items :hover{
   color: white;
  background:#BDBDBD;
  border-radius:2px;
} 

#scriptWPQ2{
 display:none;
}

#Button1:hover{  
     background-color: #ddd;
}

 </style>

<div id="pDiv" style="display: table; line-height: 22px; border-collapse:separate;border-spacing:5px;">
<label style="font-family:arial; font-size:14px;font-weight: bold; color:black; display:table-cell; vertical-align: middle; ">Month:</label>
<select id="monthList" onchange="sharePointReady2()" style="height: 22px; font-family:arial; font-size:14px; display:table-cell; vertical-align: middle; margin-top: 2.5px; ">
<option>January</option>
<option>February</option>
<option>March</option>
<option>April</option>
<option>May</option>
<option>June</option>
<option>July</option>
<option>August</option>
<option>September</option>
<option>October</option>
<option>November</option>
<option>December</option>
</select>
<label style="font-family:arial; font-size:14px; font-weight: bold; color:black; display:table-cell; vertical-align: middle;">Year:</label>
<select id="yearList" onchange="sharePointReady2()" style="height: 22px;font-family:arial; font-size:14px; display:table-cell; vertical-align: middle; margin-top: 2.5px;">
</select>

<div onclick="pick1(this)" id="ptoDiv" style="margin-left: 10px; width:107px; height:20px ; line-height: 24px; background-color: rgb(243, 247, 129); display: table-cell; vertical-align: middle; border:2px solid black; border-radius:5px 5px 5px 5px; text-align: center; font-family: Arial; font-size:14px;">PTO</div>
<div onclick="pick1(this)" id="sickDiv" style="margin-left: 10px; width:107px;  height:20px; line-height: 24px; background-color: rgb(188, 243, 251); display: table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:14px;">SICK</div>
<div onclick="pick1(this)" id="homeDiv" style="width:107px;  height:20px; line-height: 24px; background-color: rgb(159, 247, 129); display: table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:14px;">OFFSITE</div>
<div onclick="pick1(this)" id="compDiv" style="width:107px;  height:20px; line-height: 24px; background-color: rgb(4, 137, 177); display:table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:14px;">COMP DAY</div>
<div onclick="pick1(this)" id="teamDiv" style="width:107px;  height:20px; line-height: 24px; background-color: rgb(244, 136, 27); display: table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:14px;">TEAM EVENT</div>
<div onclick="pick1(this)" id="traineDiv" style="width:107px;  height:20px; line-height: 24px; background-color: rgb(245, 169, 188); display: table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:14px;">TRAINING</div>
<div onclick="pick1(this)" id="holDiv" style="width:107px;  height:20px; line-height: 24px; background-color: rgb(244, 54, 82); display: table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:11px;">FLOATING HOLIDAY</div>
<div onclick="pick1(this)" id="bdDiv" style="width:107px;  height:20px; line-height: 24px; background-color: rgb(224, 248, 236); display: table-cell; vertical-align: middle; border:0px solid black; border-radius:5px 5px 5px 5px; text-align: center;font-family: Arial; font-size:14px;">BIRTHDAY</div>
</div>


<p style="hight:40px;"></p>

<div id="ptitle"></div>
    
<div id='cntnr'>
    <ul id='items'>
      <li onclick = "deleteEmployee()">Delete</li>  
    </ul>
</div>

<div style="margin-top: 5px; height:20px"></div>
<div id="Button1" style="border: solid lightgrey 1px; width:150px; height:23px; text-align: center; vertical-align: middle;">
<a style="text-decoration: none; text-align: center;font-family: Arial; font-size:14px; color: black; vertical-align: middle;" href='javascript:displayLayover("/fin/FinTech/Lists/Time%20Off%20Tracking/NewItem.aspx?IsDlg=1")'>Add New Employee</a>
</div>


<script type="text/javascript">

var usr;
var usernameSP;
var empElement;

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var current = new Date();
var elementMonth = document.getElementById("monthList");
elementMonth.options[current.getMonth()].selected=true;

var elementYear = document.getElementById("yearList");
var currentYear = current.getFullYear();
var option1 = document.createElement("option");
option1.text = currentYear - 1;
elementYear.add(option1);
var option2 = document.createElement("option");
option2.text = currentYear;
elementYear.add(option2);
var option3 = document.createElement("option");
option3.text = currentYear + 1;
elementYear.add(option3);
elementYear.options[1].selected=true;


window.onload = sharePointReady2;

function sharePointReady5(elem, e) {
    e = e || window.event;
	var elem03 = elem;
	var event3 = e;
	
	
	var leftButton = 2;
    if ("which" in event) {
        if (parseInt(event.which) == 1) {
		    leftButton = 0;
		}
    }
    if ("button" in event) {
        if (parseInt(event.button) == 1 || parseInt(event.button) == 0) {
		    leftButton = 0;
		}
    }
	
	if (getStyle(elem03, 'backgroundColor') != "rgb(255, 255, 255)" && getStyle(elem03, 'backgroundColor') != "rgb(226, 226, 226)" && leftButton == 0) {
		console.log('element taken');
	} else {
		SP.SOD.executeFunc('sp.js', 'SP.ClientContext',enter(elem03, usernameSP, event3));
	}
}

function sharePointReady2() {
SP.SOD.executeFunc('sp.js', 'SP.ClientContext',sharePointReady);
}

function sharePointReady() {

var clientContext3 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
var web = clientContext3.get_web();
usr = web.get_currentUser();
clientContext3.load(usr);
clientContext3.executeQueryAsync(Function.createDelegate(this, onUser), Function.createDelegate(this, onQueryFailed2));


document.getElementById("ptitle").innerHTML ="";

getItemsFromView ("Time Off Tracking","All Items",
   function(items){
    //Variables to be used later.  Place holders right now.
    var totalFeb = "";
    var z = 1;
    var elementMonth = document.getElementById("monthList");
    var month =elementMonth.selectedIndex;
    var elementYear = document.getElementById("yearList");
    var year =elementYear.value;
    var current = new Date();
    var cmonth = current.getMonth(); // current (today) month
    var day = current.getDate();

    //Determing if Feb has 28 or 29 days in it.  
    if (month == 1) {
        if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
            totalFeb = 29;
        } else {
            totalFeb = 28;
        }
    }

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var totalDays = ["31", "" + totalFeb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    var dayAmount = totalDays[month];
	
	
    var mytable = "<table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 1180px; table-layout: fixed; font-family: Arial; border-collapse:separate; border:solid black 1px; border-radius:10px; -moz-border-radius:10px;\" id=\"EmployeeCalendar\">" +
    "<thead>" +
      "<tr>" +
        "<th colspan=\"" + (parseInt(dayAmount) + parseInt(3)) + "\" style=\"font-weight: bold; color: black; text-align: center; font-size:14px; background-color:#848484; border-radius:10px 10px 0px 0px; -moz-border-radius:10px;\">" + monthNames[month] + " " + year + "</th>" +
      "</tr>" +
      "<col style=\"width:16%\"/>" +
      "<col style=\"width:6%\"/>" +
      "<col style=\"width:6%\"/>" +
      "<tr>" +
        "<th style=\"width: 100px; text-align: left; border-top:solid black 1px; padding-left: 5px; color: black;font-family:arial; font-size:13px;\">Employee</th>" +
        "<th style=\"width: 88px; text-align: center; border-top:solid black 1px; color: black;font-family:arial; font-size:12px;\">Assigned PTO (hrs)</th>" +
        "<th style=\"width: 88px; text-align: center; border-top:solid black 1px; color: black;font-family:arial; font-size:12px;\">Remaining PTO (hrs)</th>";
		    
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		    var d1;
            var dd1;
            while (z <= dayAmount) {
			d1 = new Date(year,month,z);
            dd1 = days[d1.getDay()];
            mytable += "<th>" + z + "<br>" + dd1 + "</th>";
            z++;
            }
		
    mytable +="</tr>" +
    "</thead>" +
    "<tbody>";
	
 var empseq = 1;
 var d = new Date(year,month,z);
 var dd = "";
 var devider1 = "$";
 var devider2 = "$$";
 var lockElem = "none";

 for(var i = 0; i < items.get_count(); i++){
              var item = items.get_item(i);
			  if (item.get_item('Title')==usernameSP) {
			     lockElem = "auto";
			  }
              if (year==item.get_item('Year')) {
                 z = 1;

               {
			   mytable += "<tr>" +
			  "<td id=\"employee" + empseq + "\" title=\"" + item.get_item('ID') + "\" height=\"25\" style=\"width: 100px; font-weight: normal; color: black;font-family:arial; font-size:13px; padding-left: 5px; pointer-events:" + lockElem + ";\">" +item.get_item('Title') + "</td>" +
                          "<td id=\"apto" + empseq + "\" height=\"25\" style=\"font-weight: normal; color: black; text-align: center; font-family:arial; font-size:13px; \">" + item.get_item('AssignedPTO') + "</td>" +
                          "<td id=\"rpto" + empseq + "\" height=\"25\" style=\"font-weight: normal; color: black; text-align: center; font-family:arial; font-size:13px; \">" + item.get_item('RemainingPTO') + "</td>";
			   
			   while (z <= dayAmount) {
			         d = new Date(year,month,z);
                     dd = d.getDay();

				 if (dd== 0 || dd== 6) {
				    mytable += "<td class=\"weekend\" id=\"wdate" + devider1 + item.get_item('Title') + devider2 + (parseInt(month) + parseInt(1))+ "-" + z + "-" + year + "\" onmouseup=\"sharePointReady5(this, event)\">&nbsp;</td>";
				 }
				 else if (check_holiday (d)) {
				    mytable += "<td class=\"weekend\" id=\"wdate" + devider1 + item.get_item('Title') + devider2 + (parseInt(month) + parseInt(1))+ "-" + z + "-" + year + "\" onmouseup=\"sharePointReady5(this, event)\">&nbsp;</td>";
				 }
				 else {
				    mytable += "<td class=\"generic\" id=\"date" + devider1 + item.get_item('Title') + devider2 + (parseInt(month) + parseInt(1)) + "-" + z + "-" + year + "\" onmouseup=\"sharePointReady5(this, event)\"></td>";
				 } 
				 z++;
               }
			   
        mytable += "</tr>";
		empseq++;
               }
			  }    
            }
mytable += "</tbody></table>";

var emptable = document.getElementById("ptitle");

var str2DOMElement = function(html) {
    var emptable2 = document.getElementById("ptitle");
    var frame = document.createElement('iframe');
    frame.setAttribute("id", "myFrame");
    frame.style.display = 'none';
    emptable2.appendChild(frame);             
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    return el;
}

var markup = mytable;
var el = str2DOMElement(markup);
emptable.appendChild(el); 

sharePointReady3();

},
         function(sender,args){ 
             console.log(args.get_message())
         });
		 	 
}



function getItemsFromView(listTitle,viewTitle,success,error)
{
    var ctx = new SP.ClientContext ('http://cclportal.carnival.com/fin/FinTech');
    var list = ctx.get_web().get_lists().getByTitle(listTitle);
    var view = list.get_views().getByTitle(viewTitle);
    
    ctx.load(view,'ViewQuery');
    ctx.executeQueryAsync(
function() {
var viewQry = "<View><Query><FieldRef Name='ID'/><FieldRef Name='Title'/><FieldRef Name='AssignedPTO'/><FieldRef Name='RemainingPTO'/><FieldRef Name='Year'/></Query></View>";
        getItems(listTitle,viewQry,success,error);
        },
        error);
}


function getItemsFromView2(listTitle,viewTitle,success,error)
{
    var ctx = new SP.ClientContext ('http://cclportal.carnival.com/fin/FinTech');
    var list = ctx.get_web().get_lists().getByTitle(listTitle);
    var view = list.get_views().getByTitle(viewTitle);
    
    ctx.load(view,'ViewQuery');
    ctx.executeQueryAsync(
function() {
var viewQry = "<View><Query><FieldRef Name='ID'/><FieldRef Name='Title'/><FieldRef Name='Date'/><FieldRef Name='OffType'/><FieldRef Name='ColorCode'/><FieldRef Name='TableID'/><FieldRef Name='Hours'/></Query></View>";
        getItems2(listTitle,viewQry,success,error);
        },
        error);
}


function getItems(listTitle,queryText,success,error) 
{
   var ctx = new SP.ClientContext ('http://cclportal.carnival.com/fin/FinTech');
    var list = ctx.get_web().get_lists().getByTitle(listTitle);
    var query = new SP.CamlQuery();
    query.set_viewXml(queryText);
    var items = list.getItems(query);
    ctx.load(items);
    ctx.executeQueryAsync(
        function() {
            success(items);
        },
        error
   );
   delete ctx;
}

function getItems2(listTitle,queryText,success,error) 
{
   var ctx = new SP.ClientContext ('http://cclportal.carnival.com/fin/FinTech');
    var list = ctx.get_web().get_lists().getByTitle(listTitle);
    var query = new SP.CamlQuery();
    query.set_viewXml(queryText);
    var items2 = list.getItems(query);
    ctx.load(items2);
    ctx.executeQueryAsync(
        function() {
            success(items2);
        },
        error
   );
   delete ctx;
}


  function pick1(elem){
     myDivObj1 = document.getElementById("ptoDiv");
     myDivObj2 = document.getElementById("sickDiv");
     myDivObj3 = document.getElementById("homeDiv");
	 myDivObj4 = document.getElementById("compDiv");
     myDivObj5 = document.getElementById("teamDiv");
     myDivObj6 = document.getElementById("traineDiv");
	 myDivObj7 = document.getElementById("holDiv");
	 myDivObj8 = document.getElementById("bdDiv");
	 
     if (elem.style.borderWidth =='0px') {
     elem.style.borderWidth = '2px';
	 pickType = getStyle(elem, 'backgroundColor')
     //pickType = elem.style.backgroundColor;
     }
     if (elem.id=="ptoDiv") {
     myDivObj2.style.borderWidth ='0px';
     myDivObj3.style.borderWidth ='0px';
	 myDivObj4.style.borderWidth ='0px';
     myDivObj5.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
     else if (elem.id=="sickDiv") {
     myDivObj1.style.borderWidth ='0px';
     myDivObj3.style.borderWidth ='0px';
	 myDivObj4.style.borderWidth ='0px';
     myDivObj5.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
     else if ((elem.id=="homeDiv")) {
     myDivObj1.style.borderWidth ='0px';
     myDivObj2.style.borderWidth ='0px';
	 myDivObj4.style.borderWidth ='0px';
     myDivObj5.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
     else if ((elem.id=="compDiv")) {
     myDivObj1.style.borderWidth ='0px';
     myDivObj2.style.borderWidth ='0px';
	 myDivObj3.style.borderWidth ='0px';
     myDivObj5.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
	 else if ((elem.id=="teamDiv")) {
     myDivObj1.style.borderWidth ='0px';
     myDivObj2.style.borderWidth ='0px';
	 myDivObj3.style.borderWidth ='0px';
     myDivObj4.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
	 else if ((elem.id=="traineDiv")) {
     myDivObj1.style.borderWidth ='0px';
     myDivObj2.style.borderWidth ='0px';
	 myDivObj3.style.borderWidth ='0px';
     myDivObj4.style.borderWidth ='0px';
	 myDivObj5.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
	 else if ((elem.id=="holDiv")) {
     myDivObj1.style.borderWidth ='0px';
     myDivObj2.style.borderWidth ='0px';
	 myDivObj3.style.borderWidth ='0px';
     myDivObj4.style.borderWidth ='0px';
	 myDivObj5.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj8.style.borderWidth ='0px';
     }
	 else if ((elem.id=="bdDiv")) {
     myDivObj1.style.borderWidth ='0px';
     myDivObj2.style.borderWidth ='0px';
	 myDivObj3.style.borderWidth ='0px';
     myDivObj4.style.borderWidth ='0px';
	 myDivObj5.style.borderWidth ='0px';
	 myDivObj6.style.borderWidth ='0px';
	 myDivObj7.style.borderWidth ='0px';
     }
     }
     
	  var pickType = "rgb(243, 247, 129)";


function onQueryFailed2(sender, args) {
    OnComplete(null);
}

	
 function enter(elem, username, event){
    var remPTO;
    var newRemPTO;
    var leftButton = 2;
           if ("which" in event) {
           if (parseInt(event.which) == 1) {
		      leftButton = 0;
		   }
          }
          if ("button" in event) {
          if (parseInt(event.button) == 1 || parseInt(event.button) == 0) {
		      leftButton = 0;

		   }
          }

     if (getStyle(elem, 'backgroundColor') != "rgb(255, 255, 255)" && getStyle(elem, 'backgroundColor') != "rgb(226, 226, 226)") {
         if (username == elem.parentNode.firstChild.innerHTML && parseInt(leftButton) == 2) {
			var oldColor = getStyle(elem, 'backgroundColor');
			
			
			//delete item
			if (oldColor == "rgb(243, 247, 129)") 
			{
			//update PTO days
			remPTO = elem.parentNode.childNodes[2].innerHTML;
            var newPTO = parseInt(remPTO) + parseInt(elem.childNodes[0].value);
			//newRemPTO = parseInt(remPTO) + parseInt(elem.childNodes[0].value);
			var ctx3 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
			var oList3 = ctx3.get_web().get_lists().getByTitle('Time Off Tracking');
			this.oListItem3 = oList3.getItemById(elem.parentNode.firstChild.title);
			this.oListItem3.set_item('RemainingPTO', newPTO);
			this.oListItem3.update();
			ctx3.executeQueryAsync(function(){onQuerySucceeded6(elem, newPTO);},  function(){onQueryFailed (elem);});
			//delete ctx3;
			
			}

            var str = elem.id;
            var res = str.substring(0, 5);
			var ctx4 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
	        var oList4 = ctx4.get_web().get_lists().getByTitle('PTOperiod');
			this.oListItem4 = oList4.getItemById(elem.title);
			this.oListItem4.deleteObject();
			ctx4.executeQueryAsync(function(){onQuerySucceeded5(elem, res);},  function(){onQueryFailed (elem);});
			//delete ctx4;
			

		}

     } else {
	 if (username == elem.parentNode.firstChild.innerHTML && parseInt(leftButton)==0) {
	 if (getStyle(elem, 'backgroundColor') == "rgb(255, 255, 255)" || getStyle(elem, 'backgroundColor') == "rgb(226, 226, 226)") {
		
        var elemType= "";
		switch (pickType) {
		case "rgb(243, 247, 129)":
			elemType = "PTO"; 
			break;
		case "rgb(188, 243, 251)":
			elemType = "SICK"; //
			break;
		case "rgb(159, 247, 129)":
			elemType = "OFFSITE"; //
			break;
		case "rgb(4, 137, 177)":
			elemType = "COMP DAY"; //
			break;
		case "rgb(244, 136, 27)":
			elemType = "TEAM EVENT"; //
			break;
		case "rgb(245, 169, 188)":
			elemType = "TRAINING"; //
			break;
		case "rgb(244, 54, 82)":
			elemType = "FLOATING HOLIDAY"; //
			break;
		case "rgb(224, 248, 236)":
			elemType = "BIRTHDAY"; //
			break;			
		}
		
		 
		 var str = elem.id;
         var res = str.substring(0, 5);
	     if (res == "wdate" && elemType != "BIRTHDAY") {
            throw new Error("EarlyExit");
		 }
		 
		 if (pickType=="rgb(224, 248, 236)") {
		    elem.className='bd';
		 }
		 
		  elem.style.backgroundColor = pickType;
		  
		 
	  //add new item
	  var ctx = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
      var oList = ctx.get_web().get_lists().getByTitle('PTOperiod');
      var itemCreateInfo = new SP.ListItemCreationInformation();
	  this.oListItem = oList.addItem(itemCreateInfo);
	  var elemID = elem.id;
      var mydate1 = elemID.substring(parseInt(elemID.indexOf('$$'))+2);
      var parts =mydate1.split('-');
      var mydate2 = new Date(parts[2], parts[0] - 1, parts[1]); 
	  this.oListItem.set_item('Title', elemID.substring(parseInt(elemID.indexOf('$'))+1, parseInt(elemID.indexOf('$$')))); //Name
      this.oListItem.set_item('Date', mydate2); //Date
	  this.oListItem.set_item('OffType', elemType); //Type
      this.oListItem.set_item('Hours', 8); //Hours
	  this.oListItem.update();
	  ctx.executeQueryAsync(function(){
      onQuerySucceeded(elem);
}, function(){onQueryFailed (elem);
});
      delete ctx;
	  
	 if (elemType == "PTO") {
	    //update PTO days

         var selectHrs = "<select  id=\"input" + elem.title + "\" title=\"8\" onchange=\"updateHours(this)\"><option>8</option><option>7</option><option>6</option><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select>"

var str2DOMElement = function(html) {
    var emptable2 = document.getElementById("ptitle");
    var frame = document.createElement('iframe');
    frame.setAttribute("id", "myFrame3");
    frame.style.display = 'none';
    emptable2.appendChild(frame);             
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    return el;
}

var el = str2DOMElement(selectHrs);
elem.appendChild(el); 

	    var ctx2 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
        var oList2 = ctx2.get_web().get_lists().getByTitle('Time Off Tracking');
		this.oListItem2 = oList2.getItemById(elem.parentNode.firstChild.title);
        remPTO = elem.parentNode.childNodes[2].innerHTML;
		newRemPTO = parseInt(remPTO) - 8;
		elem.parentNode.childNodes[2].innerHTML = newRemPTO;
		this.oListItem2.set_item('RemainingPTO', newRemPTO);
        this.oListItem2.update();
        ctx2.executeQueryAsync(function(){onQuerySucceeded(elem);},  function(){onQueryFailed (elem);});
		delete ctx2;
	 }
	  
     }
	 }
}
}

	 
function onQuerySucceeded(elem2) {
   var newID = oListItem.get_id();
   elem2.title = newID;
}

function onQuerySucceeded2(elem3) {
    var newID = oListItem2.get_id();
	elem3.title = newID;
}

function onQuerySucceeded3() {
    console.log ('good');
}

function onQuerySucceeded4() {
    console.log ('deleted');
}


function onQuerySucceeded6(elem7, NewRemPTO1) {
        console.log (NewRemPTO1);
	elem7.parentNode.childNodes[2].innerHTML =  NewRemPTO1;
        elem7.removeChild(elem7.firstChild);
}

function onQuerySucceeded5(elem6, res1) {
	if (res1 == "wdate") {
	    elem6.style.backgroundColor = "rgb(226, 226, 226)";
		elem6.className='weekend';
	}
	else {
	    elem6.style.backgroundColor = "rgb(255, 255, 255)";
		elem6.className='generic';
	}
	elem6.title = "";
}


function onQueryFailed(elem4) {
    console.log ('bad');
}




 function getStyle(el,styleProp)
{
    if (el.currentStyle)
        return el.currentStyle[styleProp];
        return document.defaultView.getComputedStyle(el,null)[styleProp]; 
}

 document.addEventListener('contextmenu',function(e){
    var str = e.target.id;
    var res = str.substring(0, 8);
    if(e.target && res== 'employee'){
    e.preventDefault();
	empElement = e.target.title;
    var ctxMenu = document.getElementById("cntnr");
    ctxMenu.style.display = "block";
    ctxMenu.style.left = (event.pageX - 10)+"px";
    ctxMenu.style.top = (event.pageY - 10)+"px";
}
    var str2 = e.target.id;
    var res2 = str2.substring(0, 5);
    if(e.target && res2== 'input'){
       e.preventDefault();
	}
	res2 = str2.substring(0, 4);
	if(e.target && res2== 'date'){
       e.preventDefault();
	}
})

window.addEventListener("click",function(event){
    var ctxMenu = document.getElementById("cntnr");
    ctxMenu.style.display = "";
    ctxMenu.style.left = "";
    ctxMenu.style.top = "";
},false);


function sharePointReady3() {
SP.SOD.executeFunc('sp.js', 'SP.ClientContext',sharePointReady4);
}

function sharePointReady4() {
    getItemsFromView2 ("PTOperiod","All Items",
    function(items2){
    for(var i = 0; i < items2.get_count(); i++){
        var item = items2.get_item(i);
        { 
           myDateObj = document.getElementById(item.get_item('TableID'));
		   if (myDateObj == null) {
		       myDateObj = document.getElementById('w' + item.get_item('TableID'));
		   }

		   if (myDateObj != null) {
                   myDateObj.style.backgroundColor = item.get_item('ColorCode');

				   if (item.get_item('ColorCode')=="#E0F8EC") {
				      myDateObj.className='bd';
				   }
				   myDateObj.title = item.get_item('ID');
				   if (item.get_item('ColorCode')=="#F3F781") {
				     //Update PTO hrs

                     var selectHrs = "<select id=\"input" + item.get_item('Title') + i + "\" title=\"8\"  onchange=\"updateHours(this)\"><option>8</option><option>7</option><option>6</option><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select>"
                                          
var str2DOMElement2 = function(html) {
    var emptable2 = document.getElementById("ptitle");
    var frame = document.createElement('iframe');
    frame.setAttribute("id", "myFrame2");
    frame.style.display = 'none';
    emptable2.appendChild(frame);             
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    return el;
}

var el = str2DOMElement2(selectHrs);
myDateObj.appendChild(el); 

				    myDateObj.firstChild.value = item.get_item('Hours');				
                    myDateObj.firstChild.options[Math.abs(parseInt(item.get_item('Hours'))-8)].selected=true;
				   } 
				   usernameSharePoint2(myDateObj);
		        }
		   }
		}
    },
         function(sender,args){ 
             console.log(args.get_message())
         });
}


function updateHours(elem) {
        //update SharePoint Time Off Tracking list and View table
	    var ctx6 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
        var oList6 = ctx6.get_web().get_lists().getByTitle('Time Off Tracking');
        var elem2 = elem.parentNode;
		var oListItem6 = oList6.getItemById(elem2.parentNode.firstChild.title);
        var remPTO =  elem2.parentNode.childNodes[2].innerHTML;
		var prevValue = elem.title;
		var newRemPTO = parseInt(remPTO) + parseInt(prevValue) - parseInt (elem.value);
        elem.title = elem.value;
		
		elem2.parentNode.childNodes[2].innerHTML = newRemPTO;
		oListItem6.set_item('RemainingPTO', newRemPTO);
        oListItem6.update();
        ctx6.executeQueryAsync(function(){onQuerySucceeded3();}, function(){onQueryFailed (elem);});
		delete ctx6;
		
		//update SharePoint PTOperiod list
		var ctx7 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
        var oList7 = ctx7.get_web().get_lists().getByTitle('PTOperiod');
		var oListItem7 = oList7.getItemById(elem.parentNode.title);
		oListItem7.set_item('Hours', elem.value);
        oListItem7.update();
        ctx7.executeQueryAsync(function(){onQuerySucceeded3();}, function(){onQueryFailed (elem);});
		delete ctx7;
		
}

function displayLayover(url) {
 var options = SP.UI.$create_DialogOptions();
 options.url = url;
 options.dialogReturnValueCallback = Function.createDelegate(null, null);
 options.dialogReturnValueCallback=RefreshOnDialogClose;
 SP.UI.ModalDialog.showModalDialog(options);
}

function usernameSharePoint2(elem) {
var elem01 = elem;
SP.SOD.executeFunc('sp.js', 'SP.ClientContext',activatedropdown(elem01));
}

function activatedropdown (elem) {
    if (usernameSP != elem.parentNode.firstChild.innerHTML) {
      
      elem.style.pointerEvents = "none";
      if (elem.firstChild && getStyle(elem, 'backgroundColor') != "rgb(224, 248, 236)") {
      elem.firstChild.style.background= "rgba(255, 255, 255, .0)";
      }
      elem.disabled="disabled";
    }
}

function onUser() {
    usernameSP = usr.get_title();
}



function check_holiday (dt_date) {

	// check simple dates (month/date - no leading zeroes)
	var n_date = dt_date.getDate(),
		n_month = dt_date.getMonth() + 1;
	var s_date1 = n_month + '/' + n_date;

	if (   s_date1 == '1/1'   // New Year's Day
		|| s_date1 == '7/4'   // Independence Day
		|| s_date1 == '12/25' // Christmas Day
	) return true;

	// weekday from beginning of the month (month/num/day)
	var n_wday = dt_date.getDay(),
		n_wnum = Math.floor((n_date - 1) / 7) + 1;
	var s_date2 = n_month + '/' + n_wnum + '/' + n_wday;

	if (   s_date2 == '9/1/1'  // Labor Day, first Monday in September
		|| s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November
		|| s_date2 == '11/4/5' // Thanksgiving Day, fourth Friday in November
	) return true;

	// weekday number from end of the month (month/num/day)
	var dt_temp = new Date (dt_date);
	dt_temp.setDate(1);
	dt_temp.setMonth(dt_temp.getMonth() + 1);
	dt_temp.setDate(dt_temp.getDate() - 1);
	n_wnum = Math.floor((dt_temp.getDate() - n_date - 1) / 7) + 1;
	var s_date3 = n_month + '/' + n_wnum + '/' + n_wday;
	if (   s_date3 == '5/1/1'  // Memorial Day, last Monday in May
	) return true;
	
	return false;
}


function deleteEmployee () {

    //hide element
    var ctxMenu = document.getElementById("cntnr");
    ctxMenu.style.display = "";
    ctxMenu.style.left = "";
    ctxMenu.style.top = "";
    //delete employee
	var ctx5 = new SP.ClientContext('http://cclportal.carnival.com/fin/FinTech');
	var oList5 = ctx5.get_web().get_lists().getByTitle('Time Off Tracking');
	var oListItem5 = oList5.getItemById(empElement);
	oListItem5.deleteObject();
	ctx5.executeQueryAsync(Function.createDelegate(this, onQuerySucceeded4), function(){onQueryFailed2 ();});
	delete ctx5;
	//reload the page
	__doPostBack('','');
}

</script>