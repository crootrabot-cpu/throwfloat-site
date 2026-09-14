document.querySelectorAll('[data-scene]').forEach((scene) => {
  const image = scene.querySelector('[data-hero-image]');
  const label = scene.querySelector('[data-hero-label]');
  const buttons = scene.querySelectorAll('[data-toggle]');

  const states = {
    dry: {
      src: './assets/day-house-presents.png',
      label: 'Dry mode: Standard football. Throws naturally. Ready in your boat, on the dock, or in the bag until needed.'
    },
    deployed: {
      src: './assets/night-house-inflatables.png',
      label: 'Deployed mode: Hits water → rapid inflation. Becomes a high-visibility horseshoe safety float with grab handles.'
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const state = button.getAttribute('data-toggle');
      const next = states[state];
      if (!next || !image || !label) return;

      image.src = next.src;
      image.alt = state === 'dry'
        ? 'Regulation football ready to throw to someone in distress'
        : 'Inflated safety float deployed in water with person holding on';
      label.textContent = next.label;

      buttons.forEach((candidate) => candidate.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
