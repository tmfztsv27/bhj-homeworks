const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  let activeIndex = 0;
  const cases = rotator.querySelectorAll('.rotator__case');

  // Функция для смены слайда
  function changeSlide() {
    // Убираем активный класс у текущего слайда
    cases[activeIndex].classList.remove('rotator__case_active');

    // Переходим к следующему слайду
    activeIndex = (activeIndex + 1) % cases.length;

    const nextCase = cases[activeIndex];

    // Устанавливаем новый активный слайд
    nextCase.classList.add('rotator__case_active');

    // Меняем цвет текста
    nextCase.style.color = nextCase.dataset.color;

    // Возвращаем скорость для следующего интервала
    return nextCase.dataset.speed || 1000; // По умолчанию 1000 мс
  }

  // Начальная установка интервала
  let interval = setInterval(function run() {
    let nextSpeed = changeSlide();
    clearInterval(interval);  // Очищаем старый интервал
    interval = setInterval(run, nextSpeed);  // Устанавливаем новый с учетом скорости
  }, cases[0].dataset.speed || 1000);  // Начальная скорость
});