document.addEventListener('DOMContentLoaded', () => {
    
    const tabNavigations = document.querySelectorAll('.tab__navigation');
  
    tabNavigations.forEach(tabNavigation => {
      
        const tabs = Array.from(tabNavigation.querySelectorAll('.tab'));
      const tabContents = Array.from(document.querySelectorAll('.tab__content'));
  
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            
          tabs.forEach(tab => tab.classList.remove('tab_active'));
          tabContents.forEach(content => content.classList.remove('tab__content_active'));
  
          tab.classList.add('tab_active');
          tabContents[index].classList.add('tab__content_active');
        });
      });
    });
  });