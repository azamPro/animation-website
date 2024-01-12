let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
  });
});

let hiddenelement = document.querySelectorAll('.hidden');
hiddenelement.forEach((element) => {
  observer.observe(element);
});

