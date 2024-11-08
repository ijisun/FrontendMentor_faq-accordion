let faqTitle = document.querySelectorAll(".faq-question");

faqTitle.forEach((title) => { // 선택한 요소를 반복하며 각 요소에 클릭 이벤트 리스너를 추가
  title.addEventListener("click",() => {
    let faqItem = title.parentNode; // 부모 노드인 faq-area를 선택하여 faqItem 변수에 저장
    let isActive = faqItem.classList.contains("active");
    // faqItem이 active 클래스를 가지고 있는지 확인하고 isActive 변수에 저장
    // active 클래스가 있으면 true, 없으면 false

    if (isActive) { // 이미 열려 있는 경우 닫기
      faqItem.classList.remove("active");
    } else {
      // 열려 있는 다른 아이템 닫기
      let activeItem = document.querySelector(".faq-area.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      // 현재 아이템 열기
      faqItem.classList.add("active");
    }
  })
})