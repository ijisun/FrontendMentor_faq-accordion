// 모든 FAQ 질문 요소를 선택하고 리스트 형태로 faqQuestion에 저장
let faqQuestion = document.querySelectorAll(".faq-question");

faqQuestion.forEach(item => { // 각 FAQ 질문에 클릭 이벤트를 추가
  item.addEventListener("click",() => {
    let faqItem = item.parentNode; // 클릭된 FAQ 질문의 부모 요소인 .faq-area를 선택
    let isActive = faqItem.classList.contains("active");
    // 현재 .faq-area 요소에 active 클래스가 있는지 확인
    // active 클래스가 있으면 true, 없으면 false
    
    if(isActive) { // active 클래스가 있으면(열려 있으면)
      faqItem.classList.remove("active");
    }else { // 다른 항목 중 열려 있는 것이 있으면 닫음
      let activeItem = document.querySelector(".faq-area.active");
      if(activeItem){
        activeItem.classList.remove("active");
      }
      // 클릭된 항목에 active 클래스를 추가하여 열림 상태로 만듦
      faqItem.classList.add("active");
    }
  })
})