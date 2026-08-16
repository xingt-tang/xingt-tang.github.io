export interface Person {
  name: string;
  href?: string;
  note?: string;
}

export interface GroupCategory {
  label: string;
  people: Person[];
}

export const group: { name: string; categories: GroupCategory[] } = {
  name: "Intelligent Information and Decision Lab (I.I.D Lab)",
  categories: [
    {
      label: "Faculty",
      people: [{ name: "Prof. Xiuqiang He", href: "https://he-xiuqiang.github.io/" }, { name: "Prof. Lingjie Li" }],
    },
    {
      label: "Ph.D. Students",
      people: [
        {
          name: "Yuhao Wu",
          note: "co-supervised with Prof. Dugang Liu; WISE 2026",
        },
      ],
    },
    {
      label: "Master's Students",
      people: [
        {
          name: "Zhentai Chen",
          note: "co-supervised with Prof. Jingyan Jiang; internship at Ant Group; SIGIR 2026",
        },
        {
          name: "Jun Zhang",
          note: "co-supervised with Prof. Dugang Liu; internship at JD.com; SIGIR 2026",
        },
      ],
    },
    {
      label: "Undergraduate Students",
      people: [
        { name: "Jingyang Bin", note: "RecSys 2026, CIKM 2026, KDD 2026" },
        { name: "Hanchong Chen", note: "master's student at PolyU in Hong Kong" },
        { name: "Zhuanglin Chen" },
        { name: "Xiongfeng Shan" },
      ],
    },
    {
      label: "Off-Campus Collaborators",
      people: [
        { name: "Prof. Dugang Liu", href: "https://dgliu.github.io", note: "Shenzhen University" },
        { name: "Dr. Fuyuan Lyu", href: "https://fuyuanlyu.github.io", note: "Vatic Labs" },
        { name: "Dr. Shiwei Li", href: "https://leopold1423.github.io/", note: "Tongyi Lab" },
        {
          name: "Dr. Ziqiang Cui",
          href: "https://ziqiangcui.github.io/",
          note: "City University of Hong Kong",
        },
        {
          name: "Dr. Zexu Sun",
          href: "https://scholar.google.com/citations?user=1NXzf0AAAAAJ&hl=zh-CN",
          note: "JD Explore Academy",
        },
      ],
    },
  ],
};

export const teaching = [
  { term: "Fall 2025", course: "Fundamentals of Programming Languages" },
  { term: "Spring 2026", course: "Python Programming" },
  { term: "Spring 2026", course: "Deep Learning" },
] as const;

export const service = {
  leadership: {
    label: "Senior Area Chair / Area Chair",
    items: ["KDD 2025, 2026, 2027", "ICLR 2026, 2027", "NeurIPS 2026", "ICASSP 2026"],
  },
  programCommittee: [
    {
      label: "Data Mining",
      value: "KDD (2019–2025), ICDM (2025–), ECML-PKDD (2024–), DASFAA (2027)",
    },
    {
      label: "Information Retrieval",
      value: "SIGIR (2025–), WebConf (2024–), RecSys (2024–), WSDM (2024–), CIKM (2023–)",
    },
    {
      label: "Machine Learning",
      value: "NeurIPS (2024–2025), ICML (2024–), ICLR (2025), AISTATS (2025–)",
    },
    {
      label: "Artificial Intelligence",
      value: "AAAI (2024–), IJCAI (2024–), ACM MM (2025–), ACL ARR (2026)",
    },
  ],
  journals: [
    "IEEE Transactions on Knowledge and Data Engineering (TKDE)",
    "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
    "ACM Transactions on Information Systems (TOIS)",
    "ACM Transactions on Recommender Systems (TORS)",
    "Neural Networks (NeuNet)",
    "Pattern Recognition (PR)",
    "Knowledge-Based Systems (KNOSYS)",
    "Engineering Applications of Artificial Intelligence (EAAI)",
    "Expert Systems with Applications (ESWA)",
    "Neurocomputing (NeuCom)",
    "Computers & Security (COSE)",
  ],
} as const;
