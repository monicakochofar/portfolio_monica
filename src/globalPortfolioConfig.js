// NOTE: This file is used to configure static content and colours throughout the app according to your needs
// feel free to replace my content with yours!

export const DEVICE_BREAKPOINTS = {
  widthXS: 300,
  widthS: 500,
  widthM: 814,
  widthL: 1200
};

export const COMPANY_LIST = [
  {
    title: 'Senior Front-End Developer',
    name: 'Button Inc.',
    location: 'Remote',
    startDate: '08/2023',
    endDate: '10/2023',
    bullets: [
      'Created a <span class="bold">Vuejs</span> application from scratch leveraging <span class="bold">Pinia</span>, <span class="bold">Vite</span>, <span class="bold">JEST</span>, <span class="bold">MaterialUI</span>, and <span class="bold">RESTful</span> architecture.',
      '<span class="bold">Led a team of two</span> to successfully deliver a product for the client within an urgent <span class="bold">two-week timeframe</span>, leading to a successful showcase to stakeholders and generated new consumer leads.'
    ],
    icon: 'button_inc',
    website: 'https://www.button.is/',
    stack: ['Vue']
  },
  {
    title: 'Front-End Engineer',
    name: 'Dribbble Holdings Ltd.',
    location: 'Remote',
    startDate: '05/2022',
    endDate: '07/2023',
    bullets: [
      'Developed products for a self-promotion and social networking platform for digital designers serving over <span class="bold">4+ million visitors</span> each month',
      'Spearheaded discussions with product, QA, and backend developers to <span class="bold">convert product ideas into tangible deliveries</span>',
      'Supported fellow engineers through code reviews, training new hires, uplifting documentation, and advancement of internal processes'
    ],
    icon: 'dribbble',
    website: 'https://dribbble.com/',
    stack: ['Vue', 'Ruby on Rails']
  },
  {
    title: 'Senior Front-End Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '10/2021',
    endDate: '05/2022',
    bullets: [
      'Contributed to architectural and performance planning for a web application serving over <span class="bold">7000 call centre representatives</span>',
      'Regularly conducted code review sessions with team to deliver high quality code',
      '<span class="bold">Mentored junior developers</span> weekly to assist in their growth and learning',
      'Led Front-End development for projects using HTML, CSS/SASS, and Angular 10',
      'Contributed to initial planning for the creation of an internal web search tool to serve call centre representatives'
    ],
    icon: 'rogers',
    website: 'https://www.rogers.com/',
    stack: ['Angular 2+']
  },
  {
    title: 'Front-End Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '09/2019',
    endDate: '10/2021',
    bullets: [
      'Developed Front-End updates for a web application serving over <span class="bold">7000 call centre representatives</span>, using HTML, CSS/SASS and Angular 10',
      'Implemented unit tests through the use of the JEST framework to guarantee 85% test coverage',
      'Regularly uplifted legacy AngularJS applications to the latest Angular version'
    ],
    icon: 'rogers',
    website: 'https://www.rogers.com/',
    stack: ['Angular 2+']
  },
  {
    title: 'Full-Stack Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '01/2018',
    endDate: '09/2019',
    bullets: [
      'Successfully executed and planned for a <span class="bold">high risk code migration</span> for Rogers and Fido call centre/retail legacy applications',
      'Designed new <span class="bold">RESTful</span> API services and SSO architecture',
      'Developed using AngularJS, Spring Framework, Cassandra, and AkkaHTTP'
    ],
    icon: 'rogers',
    website: 'https://www.rogers.com/',
    stack: ['Java', 'AngularJS', 'jQuery']
  },
  {
    title: 'Java J2EE Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '05/2016',
    endDate: '01/2018',
    bullets: [
      'Developed Full-Stack updates for a Fido/Rogers legacy application <span class="bold">serving 500 stores</span> using Java 1.6, Javascript, and the Oracle ATG Web Commerce platform',
      'Trained co-op students on development and best team practices',
      'Developed data models and SQL database designs to plan projects'
    ],
    icon: 'rogers',
    website: 'https://www.rogers.com/',
    stack: ['Java J2EE', 'jQuery']
  },
  {
    title: 'INTRO Associate (New Graduate Program)',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '05/2015',
    endDate: '05/2016',
    bullets: [
      'Completed <span class="bold">4 rotations</span> within Rogers IT by taking on the roles of Business Systems Analyst, Developer, Production Support Analyst, and Infrastructure Project lead',
      'Analyzed existing Rogers Billing products, and effectively delivered requirements to project team',
      'Migrated Infrastructure team from using an excel document to Microsoft access for storing project data'
    ],
    icon: 'rogers',
    website: 'https://www.rogers.com/',
    stack: ['Java']
  },
  {
    title: 'Engineer, Tooling and Administration',
    name: 'Bell',
    location: 'Mississauga, ON',
    startDate: '08/2013',
    endDate: '08/2014',
    bullets: [
      'Worked as a Software Engineer and Administrator for an <span class="bold">NDA web application</span>, used by approximately <span class="bold">50 users</span> from Bell\'s Wireless Technology Products QA team for their HSPA and LTE devices',
      'Ensured <span class="bold">security of sensitive company data</span> by implementing appropriate measures',
      "Created a search algorithm to parse through large QXDM log files and extract relevant data to be used by Bell's Lab QA team",
      "Developed and presented an Android application to test Bell's Push-to-Talk application",
      'Managed inventory and distribution of items to three separate teams',
      'Solely maintained, and troubleshot servers',
      'Hosted weekly tutorial meetings to update team on any new development'
    ],
    icon: 'bell',
    website: 'https://www.bell.ca/',
    stack: ['jQuery', 'Ruby on Rails']
  },
  {
    title: 'Outreachy Intern for GNOME',
    name: 'GNOME Foundation',
    location: 'Remote',
    startDate: '05/2012',
    endDate: '08/2012',
    bullets: [
      'Acquired a solid understanding of how to use the open source <span class="bold">GTK toolkit</span> that allows cross-platform GUI creation.',
      '<span class="bold">Created easy-to-follow tutorials</span> that spur new developers to effectively create their own UI within the GNOME Linux operating system',
      'Coordinated effectively with team members located in different parts of the world'
    ],
    icon: 'gnome',
    website: 'https://developer.gnome.org/',
    stack: ['C++']
  }
];

export const getBarChartConfig = (data, textColor) => {
  return {
    type: 'bar',
    data: data,
    options: {
      animation: {
        duration: 2000
      },
      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      scales: {
        x: {
          ticks: {
            color: textColor
          },
          title: {
            display: false,
            color: textColor
          }
        },
        y: {
          ticks: {
            color: textColor
          }
        }
      },
      indexAxis: 'x',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
          labels: {
            font: {
              family: 'Inter',
              size: 16
            }
          }
        },
        title: {
          display: true,
          text: 'Years of Professional Experience',
          color: textColor
        }
      }
    }
  };
};
