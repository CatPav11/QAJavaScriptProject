let Records=
[
    { "Nino": "ZS502747A", 
    "Name": "Chris P Bacon", 
    "Tele": "07659-831024", "Addr":
    "123 Elliot Hill", "Dept": "IT" },
    { "Nino": "XS130502B", "Name": "Miles A Head", "Tele": "07666-616680", "Addr":
    "321 Haha Road", "Dept": "Sales" },
    { "Nino": "MY034526D", "Name": "Rick O'Shea", "Tele": "07440-003065", "Addr":
    "64 Zoo Lane", "Dept": "HR" },
    { "Nino": "AK311470", "Name": "Robyn Banks", "Tele": "07342-472921", "Addr":
    "324 Langton Ridgeway", "Dept": "HR" },
    { "Nino": "LY682275B", "Name": "Lorne Mowers", "Tele": "07822-821023", "Addr":
    "234 Julian Market", "Dept": "IT" },
    { "Nino": "BK227215B", "Name": "Frank N Stein", "Tele": "07661-522545", "Addr":
    "12 Springfield Grange", "Dept": "Sales" },
    { "Nino": "XB363374C", "Name": "Hedda Hare", "Tele": "07563-758264", "Addr":
    "54 Blackbird Crescent", "Dept": "IT" },
    { "Nino": "MY501327A", "Name": "Upton O Goode", "Tele": "07401-414740", "Addr":
    "2 St Margarets Drive", "Dept": "IT" },
    { "Nino": "TT405395B", "Name": "Marius Quick", "Tele": "07870-297789", "Addr":
    "98 Earl Path", "Dept": "IT" },
    { "Nino": "AZ764036A", "Name": "Max E Mumm", "Tele": "07872-642897", "Addr":
    "233 Lady Smith Avenue", "Dept": "IT" },
    { "Nino": "ES73841C", "Name": "Yul B Allwright", "Tele": "07750-872412",
    "Addr": "45 Fountains Broadway", "Dept": "Sales" },
    { "Nino": "WX465470A", "Name": "Lori Driver", "Tele": "07773-782275", "Addr":
    "65 Burlington Lodge", "Dept": "HR" },
    { "Nino": "AK625470D", "Name": "Shirley U Care", "Tele": "07569-060117",
    "Addr": "97 Holderness Drive", "Dept": "HR" },
    { "Nino": "SW098272B", "Name": "Felix Cited", "Tele": "07394-529507", "Addr":
    "32 Banningham Court", "Dept": "Sales" },
    { "Nino": "OB043941D", "Name": "Sandy Beech", "Tele": "07958-301691", "Addr":
    "3 Third Mount", "Dept": "Sales" }
];

let Reftable = document.createElement("table"); 

function updateRecord(ref, index){


ref.cells[0].innerHTML="<input id='nin' type='text' value='"+Records[index].Nino+"'>";
ref.cells[1].innerHTML="<input id='nam' type='text' value='"+Records[index].Name+"'>";
ref.cells[2].innerHTML="<input id='tel'type='text' value='"+Records[index].Tele+"'>";
ref.cells[3].innerHTML="<input id='add' type='text' value='"+Records[index].Addr+"'>";
ref.cells[4].innerHTML="<select id='dep'>" +
        "<option selected>Select Department</option> "+
        "<option value='HR'> Human Resources </option>"+
        "<option value='IT'> IT </option>"+
        "<option value='Sales'> Sales </option>"+
        "</select>";

   
}

function showRecords(){
Reftable.innerHTML="";    
    let Trow=document.createElement("tr");
    let TD_Nino=document.createElement("td");
    let TD_Name=document.createElement("td");
    let TD_Tele=document.createElement("td");
    let TD_Addr=document.createElement("td");
    let TD_Dept=document.createElement("td");
    let TD_Operations=document.createElement("td");

    TD_Nino.innerHTML="<b> National Insurance Number </b>";
    TD_Name.innerHTML="<b> Full Name </b>";
    TD_Tele.innerHTML="<b> Tele number </b>";
    TD_Addr.innerHTML="<b> Address </b>";
    TD_Dept.innerHTML="<b> Department </b>";
    TD_Operations.innerHTML="<b> Edit</b>";

    Trow.appendChild(TD_Nino);
    Trow.appendChild(TD_Name);
    Trow.appendChild(TD_Tele);
    Trow.appendChild(TD_Addr);
    Trow.appendChild(TD_Dept);
    Trow.appendChild(TD_Operations);

    Reftable.appendChild(Trow);

    for(let i=0;i<Records.length;i++){

        let Trow=document.createElement("tr");
        Trow.style.backgroundColor="yellow";

        let TD_Nino=document.createElement("td");
        let TD_Name=document.createElement("td");
        let TD_Tele=document.createElement("td");
        let TD_Addr=document.createElement("td");
        let TD_Dept=document.createElement("td");
        let TD_Operations=document.createElement("td");

        TD_Nino.innerHTML=Records[i].Nino;
        TD_Name.innerHTML=Records[i].Name;
        TD_Tele.innerHTML=Records[i].Tele;
        TD_Addr.innerHTML=Records[i].Addr;
        TD_Dept.innerHTML=Records[i].Dept;

        let Btn_delete=document.createElement("input");
            Btn_delete.type="button";
            Btn_delete.value="delete";
            Btn_delete.onclick=function(){
                let choice=confirm("are you sure?");
                if (choice==true){
                Records.splice(i,1);
                showRecords();
                }   
            };   

        let Btn_update=document.createElement("input");
            Btn_update.type="button";
            Btn_update.value="update";
            Btn_update.onclick=function(){

                if(Btn_update.value=="update"){
                    Btn_update.value="Save";
                    updateRecord(Trow, i);
                }else{
                    let ch=confirm("are you sure?");
                    if (ch==true){
                        
                        Records[i].Nino=document.getElementById("nin").value;
                        Records[i].Name=document.getElementById("nam").value;
                        Records[i].Tele=document.getElementById("tel").value;
                        Records[i].Addr=document.getElementById("add").value;
                        Records[i].Dept=document.getElementById("dep").value;    
                    }
                    showRecords();
                    Btn_update.value="Update";
                }
            };
        
        TD_Operations.appendChild(Btn_delete);
        TD_Operations.appendChild(Btn_update);
        
        Trow.appendChild(TD_Nino);
        Trow.appendChild(TD_Name);
        Trow.appendChild(TD_Tele);
        Trow.appendChild(TD_Addr);
        Trow.appendChild(TD_Dept);
        Trow.appendChild(TD_Operations);

        Reftable.appendChild(Trow);
    }
    document.body.appendChild(Reftable);

}

function update(t){
alert(t.innerHTML);
}

function addRecord(){

Records.push(
    {
        "Nino":document.getElementById("nino").value,
        "Name":document.getElementById("name").value,
        "Tele":document.getElementById("tele").value,
        "Addr":document.getElementById("addr").value,
        "Dept":document.getElementById("dept").value
    }
    );
    showRecords();
}


function addRecordToDom(Nino, Name, Tele, Addr, Dept){
let spanRecord=document.createElement("div");
let spanNino=document.createElement("span");
let spanName=document.createElement("span");
let spanTele=document.createElement("span");
let spanAddr=document.createElement("span");
let spanDept=document.createElement("span");

spanNino.innerHTML= Nino;
spanName.innerHTML= Name;
spanTele.innerHTML= Tele;
spanAddr.innerHTML= Addr;
spanDept.innerHTML= Dept;


spanName.style.color="grey";
spanRecord.appendChild(spanNino);
spanRecord.appendChild(spanName);
spanRecord.appendChild(spanTele);
spanRecord.appendChild(spanAddr);
spanRecord.appendChild(spanDept);

document.body.appendChild(spanRecord);
}



function filterRecords(){

    Reftable.innerHTML="";
    let Trow=document.createElement("tr") ;
    let TD_Nino=document.createElement("td");
    let TD_Name=document.createElement("td");
    let TD_Tele=document.createElement("td");
    let TD_Addr=document.createElement("td");
    let TD_Dept=document.createElement("td");

    TD_Nino.innerHTML="<b> National Insurance Number </b>";
    TD_Name.innerHTML="<b> Full Name </b>";
    TD_Tele.innerHTML="<b> Telephone number </b>";
    TD_Addr.innerHTML="<b> Address </b>";
    TD_Dept.innerHTML="<b> Department </b>";

        Trow.appendChild(TD_Nino);
        Trow.appendChild(TD_Name);
        Trow.appendChild(TD_Tele);
        Trow.appendChild(TD_Addr);
        Trow.appendChild(TD_Dept);

        Reftable.appendChild(Trow);

for(let i=0;i<Records.length;i++){

    if(Records[i].Dept==document.getElementById("dropDept").value){
        let Trow=document.createElement("tr");

        let TD_Nino=document.createElement("td");
        let TD_Name=document.createElement("td");
        let TD_Tele=document.createElement("td");
        let TD_Addr=document.createElement("td");
        let TD_Dept=document.createElement("td");

        TD_Nino.innerHTML=Records[i].Nino;
        TD_Name.innerHTML=Records[i].Name;
        TD_Tele.innerHTML=Records[i].Tele;
        TD_Addr.innerHTML=Records[i].Addr;
        TD_Dept.innerHTML=Records[i].Dept;

        Trow.appendChild(TD_Nino);
        Trow.appendChild(TD_Name);
        Trow.appendChild(TD_Tele);
        Trow.appendChild(TD_Addr);
        Trow.appendChild(TD_Dept);

        Reftable.appendChild(Trow);
    }

    document.body.appendChild(Reftable);

}
} 

function check(){

 let choice=true;
if(document.getElementById("nino").value =="" ){
   document.getElementById("ernino").style.visibility="visible";
   choice=false;  
} else{
    document.getElementById("ernino").style.visibility="hidden";
    choice=true;
}
if(document.getElementById("name").value ==""){
   document.getElementById("ername").style.visibility="visible";
   choice=false;         
}else{
    document.getElementById("ername").style.visibility="hidden";
    choice=true;      
}
if(document.getElementById("tele").value ==""){
   document.getElementById("ertele").style.visibility="visible";
   choice=false;    
}else{
    document.getElementById("ertele").style.visibility="hidden";
    choice=true;
}
if(document.getElementById("addr").value ==""){
   document.getElementById("eraddr").style.visibility="visible";
   choice=false;    
} else{
    document.getElementById("eraddr").style.visibility="hidden";
    choice=true;
}
if(choice == true){
    addRecord()
    
}                   
}