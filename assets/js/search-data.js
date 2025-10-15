// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "\* represents Co-first author,# represents Corresponding author",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-group",
          title: "Group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-one-paper-about-multi-domain-recommendation-is-accepted-by-ecml-pkdd-2023",
          title: 'One paper about multi-domain recommendation is accepted by ECML PKDD 2023.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-cikm-2024-and-ieee-bigdata-24",
          title: 'I will serve as PC member for CIKM 2024 and IEEE BigData’24.',
          description: "",
          section: "News",},{id: "news-one-paper-about-compression-for-federated-learning-is-accepted-by-mm-2024",
          title: 'One paper about compression for federated learning is accepted by MM 2024.',
          description: "",
          section: "News",},{id: "news-one-paper-about-ltv-prediction-is-accepted-by-cikm-2024",
          title: 'One paper about LTV prediction is accepted by CIKM 2024.',
          description: "",
          section: "News",},{id: "news-two-papers-about-multitask-recommendation-and-uplift-modeling-are-accepted-by-recsys-2024",
          title: 'Two papers about multitask recommendation and uplift modeling are accepted by RecSys 2024....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-ac-for-iclr-2026",
          title: 'I will serve as AC for ICLR 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-about-fusion-learning-for-ctr-prediction-is-accepted-by-wsdm-2025",
          title: 'One paper about fusion learning for CTR prediction is accepted by WSDM 2025....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-icml-2025",
          title: 'I will serve as PC member for ICML 2025.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-ijcai-2025",
          title: 'I will serve as PC member for IJCAI 2025.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-ecml-pkdd-2025",
          title: 'I will serve as PC member for ECML-PKDD 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-about-reward-modeling-for-llm-is-accepted-by-iclr-2025",
          title: 'One paper about reward modeling for LLM is accepted by ICLR 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-about-online-fund-recommendation-is-accepted-by-dasfaa-2025-industry-track",
          title: 'One paper about online fund recommendation is accepted by DASFAA 2025 industry track....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-neurips-2025",
          title: 'I will serve as PC member for Neurips 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-about-financial-time-series-forcasting-is-accepted-by-financial-ai-iclr-2025",
          title: 'One paper about financial time series forcasting is accepted by Financial AI@ICLR 2025....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-acml-2025-and-ieee-bigdata-2025",
          title: 'I will serve as PC member for ACML 2025 and IEEE BigData 2025....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-recsys-2025-and-cikm-2025",
          title: 'I will serve as PC member for RecSys 2025 and CIKM 2025.',
          description: "",
          section: "News",},{id: "news-two-papers-about-llm-for-recommendation-and-multi-scenario-recommendation-is-accepted-by-sigir-2025",
          title: 'Two papers about LLM for recommendation and Multi-scenario recommendation is accepted by SIGIR...',
          description: "",
          section: "News",},{id: "news-three-papers-about-uplift-model-large-language-model-and-federated-learning-are-accepted-by-icml-2025",
          title: 'Three papers about uplift model, large language model and federated learning are accepted...',
          description: "",
          section: "News",},{id: "news-two-papers-about-time-series-and-cross-domain-recommendation-are-accepted-by-kdd-2025-ads-track-february-cycle",
          title: 'Two papers about time series and cross-domain recommendation are accepted by KDD 2025...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-sigir-ap-2025",
          title: 'I will serve as PC member for SIGIR-AP 2025.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-icdm-2025",
          title: 'I will serve as PC member for ICDM 2025.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-wsdm-2026",
          title: 'I will serve as PC member for WSDM 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-aaai-2026",
          title: 'I will serve as PC member for AAAI 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-sac-for-kdd-2026-ads-track-pc-member-for-kdd-2026-research-track-datasets-and-benchmarks-track-febrary-cycle",
          title: 'I will serve as SAC for KDD 2026 ADS track, PC member for...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-webconf-industry-track-and-recsys-track-2026",
          title: 'I will serve as PC member for WebConf Industry Track and Recsys Track...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-aistats-2026-and-ecir-2026",
          title: 'I will serve as PC member for AISTATS 2026 and ECIR 2026.',
          description: "",
          section: "News",},{id: "news-two-papers-about-llm-finetuning-and-sequential-recommendation-are-accepted-by-neurips-2025",
          title: 'Two papers about LLM finetuning and Sequential Recommendation are accepted by Neurips 2025....',
          description: "",
          section: "News",},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/09/2824-7.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%6E%67.%74%61%6E%67@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xingt-tang", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4360-0754", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Tang-Xing-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rtRexdQAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://openreview.net/profile?id=~Xing_Tang2", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
