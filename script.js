fetch('data.json')
  .then(function(reponse) {
    return reponse.json();
  })
  .then(function(data) {

    // --------------------------------------------------
    //  SÉLECTEURS
    // --------------------------------------------------

    const logoNav = document.querySelector('nav .logo');
    const liensNav = document.querySelector('nav .nav-links');
    const ctaNav = document.querySelector('nav .btn-nav');

    const heroTitre = document.querySelector('#hero h1');
    const heroSousTitre = document.querySelector('#hero p');

    const sectionCompetences = document.querySelector('.competences');
    const sectionProjets = document.querySelector('.projets');
    const listeParcours = document.querySelector('.parcours-liste');

    const logoFooter = document.querySelector('footer .logo');
    const liensFooter = document.querySelector('footer .nav-links');
    const ctaFooter = document.querySelector('footer .btn-nav');


    // --------------------------------------------------
    //  FONCTIONS
    // --------------------------------------------------

    function genererTags(tags) {
      let html = '';
      tags.forEach(function(tag) {
        html += `<span class="tag">${tag}</span>`;
      });
      return html;
    }

    function genererLiens(liens) {
      let html = '';
      liens.forEach(function(lien) {
        html += `<li><a href="${lien.href}">${lien.label} ↗</a></li>`;
      });
      return html;
    }


    // --------------------------------------------------
    //  NAV
    // --------------------------------------------------

    // TODO : remplir le logo
    logoNav.textContent = data.logo;

    // TODO : injecter les liens
    liensNav.innerHTML = genererLiens(data.nav);

    // TODO : remplir le bouton CTA
    ctaNav.textContent = data.cta.label;
    ctaNav.href = data.cta.href;


    // --------------------------------------------------
    //  HERO
    // --------------------------------------------------

    // TODO : hero titre avec accent
    heroTitre.innerHTML =
      `${data.hero.titre} <em>${data.hero.accent}</em><br>${data.hero.suite}`;

    // TODO : sous titre hero
    heroSousTitre.textContent = data.hero.sousTitre;


    // --------------------------------------------------
    //  COMPÉTENCES
    // --------------------------------------------------

    // TODO : forEach compétences
    data.competences.forEach(function(comp) {
      const carte = `
        <div class="competence-card">
          <h3>${comp.titre}</h3>
          <p>${comp.description}</p>
          <div class="tags">
            ${genererTags(comp.tags)}
          </div>
        </div>
      `;

      sectionCompetences.insertAdjacentHTML('beforeend', carte);
    });


    // --------------------------------------------------
    //  PROJETS
    // --------------------------------------------------

    // TODO : forEach projets
    data.projets.forEach(function(projet) {
      const carte = `
        <article class="projet-card">
          <div class="projet-content">
            <div class="projet-top">
              <h3>${projet.titre}</h3>
              <div class="tags">
                ${genererTags(projet.tags)}
              </div>
            </div>
            <div class="projet-bottom">
              <p>${projet.description}</p>
              <a href="${projet.lien}" class="btn-projet">VOIR LE PROJET ↗</a>
            </div>
          </div>
          <div class="projet-image">
            <img src="${projet.image}" alt="${projet.titre}">
          </div>
        </article>
      `;
  

      sectionProjets.insertAdjacentHTML('beforeend', carte);
    });


    // --------------------------------------------------
    //  PARCOURS
    // --------------------------------------------------

    // TODO : forEach parcours
    data.parcours.forEach(function(item) {
      const ligne = `
        <li class="parcours-item">
          <p class="parcours-titre">${item.annee} - ${item.titre}</p>
          <p class="parcours-lieu">${item.lieu}</p>
        </li>
      `;

      listeParcours.insertAdjacentHTML('beforeend', ligne);
    });


    // --------------------------------------------------
    //  FOOTER
    // --------------------------------------------------

    // TODO : footer logo
    logoFooter.textContent = data.logo;

    // TODO : footer liens
    liensFooter.innerHTML = genererLiens(data.nav);

    // TODO : footer CTA
    ctaFooter.textContent = data.cta.label;
    ctaFooter.href = data.cta.href;

  });