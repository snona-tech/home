$(window).on('load', function () {
    PORTFOLIO_LIST.forEach(p => {
        $('.portfolio').append(
            `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="${p.url}" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-external-link-alt fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="${p.image_url}">
            </a>
            <div class="portfolio-caption">
              <h4>${p.title}</h4>
              <p class="text-muted">${p.text}</p>
            </div>
          </div>`
        );
    })
});