/** Intercept Web3Forms HTML POST → fetch + redirect (reliable on localhost/preview). */
export function initWeb3FormsSubmit(root: ParentNode = document) {
  root.querySelectorAll<HTMLFormElement>('form[data-web3form]').forEach((form) => {
    const redirect = form.dataset.redirect;
    if (!redirect) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (submit) submit.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        const data = (await response.json()) as { success?: boolean; message?: string };

        if (response.ok && data.success) {
          window.location.assign(redirect);
          return;
        }

        if (submit) submit.disabled = false;
        window.alert(data.message ?? 'Something went wrong. Please try again.');
      } catch {
        if (submit) submit.disabled = false;
        window.alert('Something went wrong. Please try again.');
      }
    });
  });
}
