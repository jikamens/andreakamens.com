const fetchAnnouncements = async () => {
  let response = await fetch(
    'https://andrea.ninahorne.io/wp-json/wp/v2/announcements',
  );
  let data = await response.json();
  const announcementBanner = document.querySelector('#bannerContent');
  announcementBanner.innerHTML = data
    .map((announcement) => {
      console.log(announcement.acf);
      const facts = [
        announcement.acf.fact_1,
        announcement.acf.fact_2,
        announcement.acf.fact_3,
        announcement.acf.fact_4,
        announcement.acf.fact_5,
      ].filter((f) => f);
      return `
      <div class="row" style="padding: 1rem 0">
        <div class="col-md-6">
          <h5>
            ${
              announcement.acf.heading_link &&
              `<a style="text-decoration: underline" href='${announcement.acf.heading_link}' target="_blank">`
            }
            ${announcement.title.rendered}
            ${announcement.acf.heading_link && `</a>`}
           </h5>
           <p>${announcement.acf.announcements_description}</p>
          ${
            facts.length &&
            `
          <ul>
            ${facts
              .map((fact) => {
                return `
                <li>${fact}</li>
              `;
              })
              .join('')}
          </ul>
          `
          }
        </div>
        ${
          announcement.acf.cta_link &&
          `
        <div class="col-md-6">
          <div class="flex-center">
            <a
              href="${announcement.acf.cta_link}"
              target="_blank"
              class="announcement-banner-button text-center"
            >
             ${announcement.acf.cta_text}
            </a>
          </div>
        </div>
        `
        }
      </div>
      `;
    })
    .join('');
  return data;
};
document.addEventListener('DOMContentLoaded', fetchAnnouncements);
