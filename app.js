document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Configuration Toggling (Light / Dark Mode)
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.body.removeAttribute('data-theme');
            } else {
                document.body.setAttribute('data-theme', 'dark');
            }
        });
    }

    // 2. Interactive Performance/FPS Simulator
    const fpsRange = document.getElementById('fps-range');
    const fpsVal = document.getElementById('fps-val');
    const perfMetric = document.getElementById('perf-metric');

    if (fpsRange && fpsVal && perfMetric) {
        fpsRange.addEventListener('input', (e) => {
            const val = e.target.value;
            fpsVal.textContent = val;
            perfMetric.textContent = `${val} FPS`;
            
            if (parseInt(val) < 30) {
                perfMetric.style.color = '#e53e3e';
            } else {
                perfMetric.style.color = 'var(--accent)';
            }
        });
    }

    // 3. Transcript Qualitative Code Slicing (Filters Theme 1 and Theme 2)
    const tabs = document.querySelectorAll('.tab-btn');
    const lines = document.querySelectorAll('.transcript-line');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Adjust current selected layout button state styling 
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            lines.forEach(line => {
                const lineTheme = line.getAttribute('data-theme');
                
                // Clear out previous active highlight styles
                line.classList.remove('highlight-theme1', 'highlight-theme2', 'dimmed');

                if (filterValue === 'all') {
                    return; // Show everything normal
                }

                if (filterValue === lineTheme) {
                    // Apply distinct highlight color based on theme attribute matching
                    if (lineTheme === 'theme1') line.classList.add('highlight-theme1');
                    if (lineTheme === 'theme2') line.classList.add('highlight-theme2');
                } else {
                    // Dim out non-matching segments to create a beautiful focus effect
                    line.classList.add('dimmed');
                }
            });
        });
    });
});
