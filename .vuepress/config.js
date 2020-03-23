module.exports = {
  base: "/",
  title: "JobManager",
  description: "Job Portal for OctoberCMS",
  themeConfig: {
    sidebar: [
      {
        title: "Installation",
        children: ["/getting-started/installation"]
      },
      {
        title: "Components",
        children: [
          "/components/joblist",
          "/components/jobdetails"
        ]
      }
    ],
    nav: [
      { text: "Guide", link: "/" },
      {
        text: "Marketplace",
        link: "https://octobercms.com/plugin/fytinnovations-jobmanager"
      }
    ],
    docsRepo: "fytinnovations/oc-jobmanager",
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
};
