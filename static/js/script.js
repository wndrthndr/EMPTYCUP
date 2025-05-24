document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/designers')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('designers-container');
  
        data.forEach(d => {
          const card = document.createElement('div');
          card.className = 'data-card';
          card.setAttribute('data-id', d.id);
  
          card.innerHTML = `
            <div class="card-content">
              <div class="left-card">
                <h2>${d.name}</h2>
                <p>${d.description}</p>
                <div class="stats-container">
                  <div class="stat"><div class="stat-value">${d.projects}</div><div class="stat-label">Projects</div></div>
                  <div class="stat"><div class="stat-value">${d.years}</div><div class="stat-label">Years</div></div>
                  <div class="stat"><div class="stat-value">${d.price}</div><div class="stat-label">Price</div></div>
                </div>
                <div class="phone">
                  <p class="phone-number">${d.phone1}</p>
                  <p class="phone-number">${d.phone2}</p>
                </div>
              </div>
            </div>
            <div class="icon-stack">
              <button class="icon-btn"><img src="static/icons/arrow-right-short 1.svg" alt="Details" /><p>Details</p></button>
              <button class="icon-btn"><img src="static/icons/eye-slash 2.svg" alt="Hide" /><p>Hide</p></button>
              <button class="icon-btn shortlist-btn" data-id="${d.id}"><img src="static/icons/bookmark-heart 1.svg" alt="Shortlist" /><p>Shortlist</p></button>
              <button class="icon-btn"><img src="static/icons/exclamation-circle 1.svg" alt="Report" /><p>Report</p></button>
            </div>
          `;
  
          container.appendChild(card);
        });
  
        setupShortlistLogic();
      });
  
    function setupShortlistLogic() {
      document.querySelectorAll('.shortlist-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
        });
      });
  
      const navShortlistBtn = document.getElementById('nav-shortlist-btn');
      let filteringShortlist = false;
  
      navShortlistBtn.addEventListener('click', () => {
        filteringShortlist = !filteringShortlist;
        navShortlistBtn.style.filter = filteringShortlist
          ? 'drop-shadow(0 0 6px gold)'
          : 'grayscale(100%)';
  
        document.querySelectorAll('.data-card').forEach(card => {
          const shortlistBtn = card.querySelector('.shortlist-btn');
          card.style.display =
            filteringShortlist && !shortlistBtn.classList.contains('active')
              ? 'none'
              : 'flex';
        });
      });
    }
  });
  