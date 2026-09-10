(() => {
  const form = document.querySelector('#mail-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const company = String(data.get('company') || '').trim();
    const challenge = String(data.get('challenge') || '').trim();
    const subject = company ? `Open Engineering enquiry — ${company}` : 'Open Engineering enquiry';
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      company ? `Company: ${company}` : '',
      '',
      'Business challenge:',
      challenge
    ].filter((line, index, arr) => line !== '' || (index > 0 && arr[index - 1] !== '')).join('\n');
    window.location.href = `mailto:contact@theraeburngroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();