var list=[
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

var content="<ul>";
	for (var items in list){
		content+="<li>" + list[items].name + " " + list[items].date + " " + list[items].assigned + "</li>";

	}
	content+="</ul>";
	if(typeof content !=='undefined' && content !==null){
		document.getElementById("displayData").innerHTML=content;
	}
	
	var newTask=[];
	var newDate=[];
	var newName=[];
	var addTask = document.getElementById("addedTask");
	var addDate = document.getElementById("addedDate");
	var addName = document.getElementById("addedName");



	var msgBox = document.getElementById("displayData");

function insert(){

	var takeIn = {name:addedTask.value,date:addedDate.value,assigned:addedName.value}
	list.unshift(takeIn);


console.log(takeIn);
	refresh();

}

function refresh(){
	addedTask.value="";
	addedDate.value="";
	addedName.value="";


	var freshData=list.concat(newTask,newDate,newName);

	var content2="<ul>";
	for (var items in list){
		content2+="<li>" + list[items].name + " " + list[items].date + " " + list[items].assigned + "</li>";

	}
	content2+="</ul>";
	if(typeof content2 !=='undefined' && content2 !==null){
		document.getElementById("displayData").innerHTML=content2;
	}

	console.log(freshData);

}
