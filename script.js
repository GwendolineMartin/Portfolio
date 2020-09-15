const text = document.querySelector('.text')
text.textContent = "Curieuse et passionnée, j’aime expérimenter, découvrir et apprendre au fur et à mesure de mes projets professionnels et personnels. Ma maîtrise des logiciels de PAO ainsi que des langages tels que le Javascript, le CSS et le HTML me permettent d’être plus à l’aise dans le Front-End. Mon appétence pour le Front-End me permet d’exprimer ma créativité, de pousser l’originalité jusqu’à la perfection en concevant des designs épurés, ergonomiques et accessibles pour les internautes, tout en restant conforme au cahier des charges. Mon but en tant que développeur Front-End est de participer à la création et le développement de l'interface utilisateur d'un site ou d'une application web avec comme objectif : clarté, rapidité et facilité d’accès."

const menu = document.querySelector(".menu")
const display = document.querySelector(".hamburger")


display.addEventListener("click", () => {
    menuToggle()    
})
menu.addEventListener("click", ()=> {
  menuToggle()
})


const menuToggle = () => {
  menu.classList.toggle("menu")
}