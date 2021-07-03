const title = document.querySelector('#Title');
const year = document.querySelector('#Year');
const author = document.querySelector('#Author');
const btn = document.querySelector('#btn');
const bookList = document.querySelector('#bookList');

btn.addEventListener('click',function (e){
  e.preventDefault();

  if(title.value == "" && author.value == "" && year.value == ""){
     alert("Type again");
  }
  else{
      const newRow = document.createElement('tr');
      const newTitle = document.createElement('th');
      newTitle.innerHTML = Title.value;
      newRow.appendChild(newTitle);

      const newAuthor = document.createElement('th');
      newAuthor.innerHTML = Author.value;
      newRow.appendChild(newAuthor);

      const newYear = document.createElement('th');
      newYear.innerHTML = Year.value;
      newRow.appendChild(newYear);

      bookList.appendChild(newRow);
  }
});