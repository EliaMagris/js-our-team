const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

console.log(team);

for (let i = 0; i < team.length; i++) {
  console.log(team[i]);
  let element = team[i];

  document.getElementById('cardSection').innerHTML += `
  <div class= "col-4 p-2 d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
    <img src="assets/img/${element.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title text-danger">${element.name}</h5>
       <p class="card-text">${element.role}</p>
    </div>
   </div>
  </div> 

`
}
