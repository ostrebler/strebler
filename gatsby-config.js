module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.strebler.io`,
        siteName: `Strebler's Code Land`,
        siteShortName: `SCL`,
        siteDescription: `Hello. Need a portfolio ? A blog ? An e-commerce website ? Any web app, or even more ? My name is Olivier and I'm a full stack web developer.`,
        siteKeywords: `Full Stack Developer, Web, Design, React, Frontend, Backend, NodeJS, Blog, E-commerce, Software`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` }
        ],
        email: `strebler.olivier@hotmail.fr`,
        social: {
          // Usernames
          twitter: "",
          gitHub: `ostrebler`,
          stackOverflow: `11153160/strebler`,
          linkedIn: "in/olivier-strebler-a235281a3/",
          resumeInPdf: `/CV-19.pdf` // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hello, I'm Olivier`,
          h2Text: `Need a portfolio ? A blog ? An e-commerce website ? Any web app, or even more ? I'm a full stack web developer and I can make it happen.`,
          typewriter: [
            `Coding is fun 🎉`,
            `I use the latest and best technologies 💡`,
            `I always deliver on time ⏱️`,
            `I'm pretty good at solving problems ♜`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I swim or hike 🏊⛰️‍`,
            `I play piano 🎹`
          ]
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`
          }
        },
        footer: `heart`
      }
    }
  ]
};
