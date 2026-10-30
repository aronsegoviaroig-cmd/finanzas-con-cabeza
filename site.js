(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const form = document.getElementById('savings-form');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const income = Number(document.getElementById('income').value);
    const expenses = Number(document.getElementById('expenses').value);
    const result = document.getElementById('savings-result');
    if (!Number.isFinite(income) || !Number.isFinite(expenses) || income < 0 || expenses < 0) {
      result.textContent = 'Introduce cantidades válidas, iguales o superiores a cero.';
      return;
    }
    const difference = income - expenses;
    result.textContent = difference >= 0
      ? `Tu capacidad estimada: ${difference.toLocaleString('es-ES',{style:'currency',currency:'EUR'})} al mes (${income > 0 ? Math.round(difference/income*100) : 0}% de tus ingresos).`
      : `Tus gastos superan tus ingresos en ${Math.abs(difference).toLocaleString('es-ES',{style:'currency',currency:'EUR'})} al mes. Revisa las cifras y prioriza gastos esenciales.`;
  });

  const banner = document.getElementById('cookie-banner');
  if (banner) {
    let choice = null;
    try { choice = localStorage.getItem('fc-cookie-choice'); } catch (_) {}
    if (!choice) banner.hidden = false;
    const save = (value) => {
      try { localStorage.setItem('fc-cookie-choice', value); } catch (_) {}
      banner.hidden = true;
    };
    document.getElementById('cookie-accept')?.addEventListener('click', () => save('accepted'));
    document.getElementById('cookie-reject')?.addEventListener('click', () => save('rejected'));
  }
})();