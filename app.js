let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');
let p = document.querySelector('.da');
let total = 0;


btn.addEventListener('click', async() => {
    let place = document.querySelector('input');
    let contry = place.value;
    let result = await college(contry);
    printdata(result);

});
function  printdata(result) {
let list = document.querySelector(".list");
list.innerText = "";
total = 0;
for(let col of result) {
   total = total + 1;
    let li = document.createElement('a');
    li.innerHTML = `<li> <a href= "${col.web_pages}">${col.name}</a> </li>`;
    list.appendChild(li);
    p.innerHTML= `<p>Countries : ${total} </p>`;
   
}

}
async function college(contry) {
   try{
  let res = await axios.get(url + contry);
      console.log(res.name + res.web_pages);
      return res.data;
   }catch(e) {
      console.log(e)
      return "No College found"
   }

}
