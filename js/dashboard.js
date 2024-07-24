
  document.addEventListener("DOMContentLoaded", function(){
    const createCard1 = document.getElementById("card1")
    const createCard2 = document.getElementById("card2")
    let generatebutton = document.getElementById("gererate-btn");
    let selectedCard = "";

    createCard1.addEventListener("click", function(){
      addBorder(createCard1,"highlight")
      generatebutton.classList.add('orange')
      selectedCard = "preloss"
    })
    
    createCard2.addEventListener("click", function(){
      addBorder(createCard2,"highlight")
      generatebutton.classList.add('orange')
      selectedCard = "postloss"
  })
  generatebutton.addEventListener("click", function(){
    if (selectedCard === "preloss"){
      location.href = "pre_loss_inspection.html"
    }else if (selectedCard === "postloss"){
      location.href = "post_loss_inspection.html"
    }
  })
  function addBorder(element, className){
    const allCards = document.querySelectorAll(".tab1,.tab2")
    for (const card of allCards) {
      card.classList.remove('highlight');
    }
    element.classList.add(className)
  }
})
