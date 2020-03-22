module.exports = {
  base: "/",
  title: "OC-JobManager",
  description: "Job Portal for OctoberCMS",
  themeConfig: {
    sidebar: [
      {
        title: "Installation",
        children: ["/getting-started/installation"]
      },
      {
        title: "Components",
        children: ["/components/joblist"]
      }
    ],
    nav: [
      { text: "Guide", link: "/" },
      {
        text: "Marketplace",
        link: "https://octobercms.com/plugin/fytinnovations-jobmanager"
      }
    ]
  }
};
