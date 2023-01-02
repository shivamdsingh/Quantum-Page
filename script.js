//html template

const content = document.getElementById("contents");

cards.map((card) => {
  const newDiv = document.createElement("div");
  newDiv.id = "new-div";
  const {
    id,
    image,
    star,
    title,
    subject,
    grade,
    add,
    unit,
    lessons,
    topics,
    tutor,
    students,
    date,
  } = card;

  newDiv.innerHTML = `
  <div class="card one">
  <div class="expired" id = ${id}>
    </div>
    <div class="maincontent">
    <div class="cardleft">
  <img src='${image}' alt="image1">
 </div>
 <div class="cardright">
  <main>
    <div  ${id == "one" ? 'class = "title head star"' : 'class="head star"'}>
    
 <h4 >${title}</h4>
 <img  class="starlogo" src='${star}' alt ='star'>
 </div>
 
 <div class="head-2">
  <p>${subject}</p>
  <div class="vertical-line">
  </div>
  <p>${grade}  + <b style="color: green;">${add}</b></p>
 </div>
 
 ${
   unit
     ? `<div class="head-3">
 <p><strong>${unit}</strong> Units</p>
 <p><strong>${lessons}</strong> Lessons</p>
 <p><strong>${topics}</strong> Topics</p>
</div>`
     : ""
 }
 
 <div class="head-arrow">
  <div class="arrow-line">
  <p ${id == "two" ? `class = "disabled"` : ""}>${tutor}</p>
  <img   src="./icons/arrow-down.svg" alt="arrow-down">
 </div>
 </div>
 <div class="head-date">
  <p>${students}</p>
  <p>${date}</p>
 </div>
 
 </main>
 </div>
 </div>
 <hr class="card-line">
 <div class="card-footer">
  <img src="./icons/preview.svg" alt="preview">
  <img  ${
    date ? "" : 'class = "disabled"'
  }  src="./icons/manage course.svg" alt="manage">
  <img   ${
    date ? "" : 'class = "disabled"'
  }  src="./icons/grade submissions.svg" alt = "grade">
  <img   src="./icons/reports.svg" alt="reports">
 </div>
 
  </div>`;

  content.appendChild(newDiv);
  if (id == "four") {
    const expired = document.getElementById(`${id}`);
    const paragrah = document.createElement("p");
    paragrah.innerHTML = `<p style="font-size: 12px;">EXPIRED</p>`;
    expired.appendChild(paragrah);
  }
});
