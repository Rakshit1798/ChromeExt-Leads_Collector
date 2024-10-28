let myLeads=[];
let addbtn = document.getElementById("addlead");
const deletebtn=document.getElementById("deletelead");
const fetchleadbtn=document.getElementById("savetab")
const inputurl=document.getElementById("inserturl");
const listelem=document.getElementById("list")
const localstorageleads=JSON.parse(localStorage.getItem("myleads"))
if (localstorageleads)
{
    myLeads=localstorageleads
    render(myLeads)
}
fetchleadbtn.addEventListener("click",function savetab()
{
chrome.tabs.query({active: true,currentWindow: true},function(tabs){
    myLeads.push(tabs[0].url)
    render(myLeads)
})
})

addbtn.addEventListener("click",function insertlead ()
{
    let leadvalue=inputurl.value
myLeads.push(leadvalue)
    inputurl.value=""
    render(myLeads)
})
deletebtn.addEventListener("dblclick",function deleteall()
{
    localStorage.clear()
    myLeads=""
    render(myLeads)
})

function render(renderitem)
{
    let renderlist=""
    for (let i=0;i<=renderitem.length;i++)
    {
        console.log(renderitem[i])
       renderlist+= `<li> <a target="_blank" href="${renderitem[i]}"> ${renderitem[i]} </a></li>`
    }
    listelem.innerHTML= renderlist

    localStorage.setItem("myleads",JSON.stringify(renderitem))
}






