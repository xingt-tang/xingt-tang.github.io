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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-group",
          title: "Group",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-webconf-industry-track-and-recsys-track-2025",
          title: 'I will serve as PC member for WebConf Industry Track and Recsys Track...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-pc-member-for-aistats-2026-and-ecir-2026",
          title: 'I will serve as PC member for AISTATS 2026 and ECIR 2026.',
          description: "",
          section: "News",},{id: "news-two-papers-about-llm-finetuning-and-sequential-recommendation-are-accepted-by-neurips-2025",
          title: 'Two papers about LLM finetuning and Sequential Recommendation are accepted by Neurips 2025....',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%6E%67%78%69%6E%67%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xingt-tang", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rtRexdQAAAAJ", "_blank");
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
