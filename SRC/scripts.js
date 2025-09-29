// simple click navigation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = card.dataset.link;
    });
  });
});
