export const getClientScript = (breakpoints: Record<string, number>) => {
  return `
(function() {
  const breakpoints = ${JSON.stringify(breakpoints)};
  const id = '__vite-plugin-screen-size';
  if (document.getElementById(id)) return;

  const container = document.createElement('div');
  container.id = id;
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(8px)',
    color: '#f8fafc',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    zIndex: '999999',
    pointerEvents: 'none',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'opacity 0.2s'
  });

  const sizeEl = document.createElement('span');
  const breakpointEl = document.createElement('span');
  breakpointEl.style.fontWeight = 'bold';
  breakpointEl.style.color = '#38bdf8';
  breakpointEl.style.paddingLeft = '8px';
  breakpointEl.style.borderLeft = '1px solid rgba(255, 255, 255, 0.2)';

  container.appendChild(sizeEl);
  container.appendChild(breakpointEl);
  document.body.appendChild(container);

  function update() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    sizeEl.textContent = \`\${w} × \${h}\`;

    let active = 'base';
    const sorted = Object.entries(breakpoints).sort((a, b) => b[1] - a[1]);
    for (const [name, val] of sorted) {
      if (w >= val) {
        active = name;
        break;
      }
    }
    breakpointEl.textContent = active.toUpperCase();
  }

  window.addEventListener('resize', update);
  update();
})();
  `;
};
