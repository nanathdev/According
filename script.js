const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-header.active');
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.remove('active');
      currentlyActive.nextElementSibling.style.maxHeight = 0;
      currentlyActive.nextElementSibling.style.padding = '0 20px';
      currentlyActive.nextElementSibling.style.background = '#f9f9f9';
    }

    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (header.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.padding = '15px 20px';
      content.style.background = '#ede9fe'; // leve mudança de fundo quando aberto
      content.style.transition = 'max-height 0.4s cubic-bezier(.25,.8,.25,1), padding 0.3s ease, transform 0.2s, background 0.3s';
      content.style.transform = 'scaleY(1.05)';
      setTimeout(() => content.style.transform = 'scaleY(1)', 150);
    } else {
      content.style.maxHeight = 0;
      content.style.padding = '0 20px';
      content.style.background = '#f9f9f9';
    }
  });
});
