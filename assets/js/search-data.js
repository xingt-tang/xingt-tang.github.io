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
          description: "* represents a co-first author; # represents a corresponding author.",
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
        },{id: "news-one-paper-on-multi-domain-recommendation-was-accepted-by-ecml-pkdd-2023",
          title: 'One paper on multi-domain recommendation was accepted by ECML-PKDD 2023.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-cikm-2024-and-ieee-bigdata-2024",
          title: 'I will serve as a PC member for CIKM 2024 and IEEE BigData...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-ecml-pkdd-2025",
          title: 'I will serve as a PC member for ECML-PKDD 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-on-online-fund-recommendation-was-accepted-by-the-dasfaa-2025-industry-track",
          title: 'One paper on online fund recommendation was accepted by the DASFAA 2025 Industry...',
          description: "",
          section: "News",},{id: "news-one-paper-on-financial-time-series-forecasting-was-accepted-by-financial-ai-iclr-2025",
          title: 'One paper on financial time-series forecasting was accepted by Financial AI @ ICLR...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-the-webconf-2026-industry-and-recsys-tracks",
          title: 'I will serve as a PC member for the WebConf 2026 Industry and...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-aistats-2026-and-ecir-2026",
          title: 'I will serve as a PC member for AISTATS 2026 and ECIR 2026....',
          description: "",
          section: "News",},{id: "news-two-papers-on-llm-fine-tuning-and-sequential-recommendation-were-accepted-by-neurips-2025",
          title: 'Two papers on LLM fine-tuning and sequential recommendation were accepted by NeurIPS 2025....',
          description: "",
          section: "News",},{id: "news-one-paper-on-multi-scenario-multi-task-recommendation-was-accepted-by-wsdm-2026",
          title: 'One paper on multi-scenario, multi-task recommendation was accepted by WSDM 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-on-test-time-adaptation-was-accepted-by-aaai-2026",
          title: 'One paper on test-time adaptation was accepted by AAAI 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-area-chair-for-the-icassp-2026-mlsp-track",
          title: 'I will serve as an Area Chair for the ICASSP 2026 MLSP track....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-reviewer-for-icml-2026",
          title: 'I will serve as a reviewer for ICML 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-sigir-2026",
          title: 'I will serve as a PC member for SIGIR 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-on-function-calling-for-llms-was-accepted-by-webconf-2026",
          title: 'One paper on function calling for LLMs was accepted by WebConf 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-on-lora-fine-tuning-was-accepted-by-iclr-2026",
          title: 'One paper on LoRA fine-tuning was accepted by ICLR 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-ijcai-2026-ecml-pkdd-2026-and-acm-mm-2026",
          title: 'I will serve as a PC member for IJCAI 2026, ECML-PKDD 2026, and...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-recsys-2026",
          title: 'I will serve as a PC member for RecSys 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-area-chair-for-neurips-2026-and-a-pc-member-for-cikm-2026",
          title: 'I will serve as an Area Chair for NeurIPS 2026 and a PC...',
          description: "",
          section: "News",},{id: "news-two-papers-on-test-time-scaling-for-large-scale-recommendation-and-semantic-ids-for-federated-recommendation-were-accepted-by-sigir-2026",
          title: 'Two papers on test-time scaling for large-scale recommendation and semantic IDs for federated...',
          description: "",
          section: "News",},{id: "news-two-papers-on-llm-reasoning-and-llm-enhanced-recommendation-were-accepted-by-acl-2026-main-and-findings",
          title: 'Two papers on LLM reasoning and LLM-enhanced recommendation were accepted by ACL 2026...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-icdm-2026",
          title: 'I will serve as a PC member for ICDM 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-on-context-compression-for-rag-was-accepted-by-icml-2026",
          title: 'One paper on context compression for RAG was accepted by ICML 2026.',
          description: "",
          section: "News",},{id: "news-two-papers-on-llms-for-financial-qa-and-multimodal-ctr-were-accepted-by-the-kdd-2026-ads-track-february-cycle",
          title: 'Two papers on LLMs for financial QA and multimodal CTR were accepted by...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-aaai-2027-acl-arr-may-and-the-kdd-2027-d-amp-amp-b-track",
          title: 'I will serve as a PC member for AAAI 2027, ACL ARR (May),...',
          description: "",
          section: "News",},{id: "news-one-paper-on-tool-selection-was-accepted-by-acm-mm-2026",
          title: 'One paper on tool selection was accepted by ACM MM 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-on-llms-for-non-overlapping-cross-domain-ctr-prediction-was-accepted-by-recsys-2026",
          title: 'One paper on LLMs for non-overlapping cross-domain CTR prediction was accepted by RecSys...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-area-chair-for-the-kdd-2027-research-and-ads-tracks-first-cycle",
          title: 'I will serve as an Area Chair for the KDD 2027 Research and...',
          description: "",
          section: "News",},{id: "news-one-paper-on-multi-behavior-sequential-recommendation-was-accepted-by-wise-2026-and-one-paper-on-test-time-methods-for-sequential-recommendation-was-accepted-by-cikm-2026",
          title: 'One paper on multi-behavior sequential recommendation was accepted by WISE 2026, and one...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-area-chair-for-iclr-2027",
          title: 'I will serve as an Area Chair for ICLR 2027.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-for-wsdm-2027-and-dasfaa-2027",
          title: 'I will serve as a PC member for WSDM 2027 and DASFAA 2027....',
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
          window.open("https://www.researchgate.net/profile/Tang-Xing-2/", "_blank");
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
