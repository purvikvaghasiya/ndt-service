// src/data/productsData.ts
export interface SubProduct {
  id: string;
  title: string;
  review: number;
  rating: number;
  price: string;
  description: string;
  includes: string[];
  images: string[]; // direct URL strings
}

export interface MainProduct {
  id: string;
  title: string;
  category: string;
  subProducts: SubProduct[];
}

export const courses: MainProduct[] = [
  // ===============================
  // 1) ASNT NDT LEVEL III
  // ===============================
  {
    id: "product-1",
    title: "ASNT NDT LEVEL III",
    category: "ASNT",
    subProducts: [
      {
        id: "asnt-basic-mt",
        title: "(BASIC + MT) ASNT LEVEL III",
        review: 13840,
        rating: 4.5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest ASNT syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product1/sub1/p1s11.png",
          "/assets/products/product1/sub1/p1s12.png",
          "/assets/products/product1/sub1/p1s13.png",
          "/assets/products/product1/sub1/p1s14.png",
        ],
      },
      {
        id: "asnt-basic-ut",
        title: "(BASIC + UT) ASNT LEVEL III",
        review: 12690,
        rating: 4,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest ASNT syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product1/sub2/p1s21.png",
          "/assets/products/product1/sub2/p1s22.png",
          "/assets/products/product1/sub2/p1s23.png",
          "/assets/products/product1/sub2/p1s24.png",
        ],
      },
      {
        id: "asnt-basic-rt",
        title: "(BASIC + RT) ASNT LEVEL III",
        review: 14950,
        rating: 3.9,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest ASNT syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product1/sub3/p1s31.png",
          "/assets/products/product1/sub3/p1s32.png",
          "/assets/products/product1/sub3/p1s33.png",
          "/assets/products/product1/sub3/p1s34.png",
        ],
      },
      {
        id: "asnt-basic-vt",
        title: "(BASIC + VT) ASNT LEVEL III",
        review: 11240,
        rating: 4.2,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest ASNT syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product1/sub4/p1s41.png",
          "/assets/products/product1/sub4/p1s42.png",
          "/assets/products/product1/sub4/p1s43.png",
        ],
      },
    ],
  },

  // ===============================
  // 2) API MATERIAL
  // ===============================
  {
    id: "product-2",
    title: "API MATERIAL",
    category: "API",
    subProducts: [
      {
        id: "api-510",
        title: "API 510",
        review: 17890,
        rating: 4,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product2/sub1/p2s11.png",
          "/assets/products/product2/sub1/p2s12.png",
          "/assets/products/product2/sub1/p2s13.png",
          "/assets/products/product2/sub1/p2s14.png",
        ],
      },
      {
        id: "api-570",
        title: "API 570",
        review: 15420,
        rating: 4.5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product2/sub2/p2s21.png",
          "/assets/products/product2/sub2/p2s22.png",
        ],
      },
      {
        id: "api-653",
        title: "API 653",
        review: 12110,
        rating: 4.9,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product2/sub3/p2s31.png",
          "/assets/products/product2/sub3/p2s32.png",
        ],
      },
      {
        id: "api-936",
        title: "API 936",
        review: 10980,
        rating: 5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub4/p2s41.png",
          "/assets/products/product2/sub4/p2s42.png",
          "/assets/products/product2/sub4/p2s43.png",
        ],
      },
      {
        id: "api-577",
        title: "API 577",
        review: 16570,
        rating: 5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product2/sub5/p2s51.png"],
      },
      {
        id: "api-580",
        title: "API 580",
        review: 14330,
        rating: 4.3,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub6/p2s61.png",
          "/assets/products/product2/sub6/p2s62.png",
        ],
      },
      {
        id: "api-571",
        title: "API 571",
        review: 13260,
        rating: 3,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub7/p2s71.png",
          "/assets/products/product2/sub7/p2s72.png",
        ],
      },
      {
        id: "api-sife",
        title: "API SIFE",
        review: 11890,
        rating: 4.5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub8/p2s81.jpeg",
          "/assets/products/product2/sub8/p2s82.jpeg",
        ],
      },
    ],
  },

  // ===============================
  // 3) ARAMCO CBT
  // ===============================
  {
    id: "product-3",
    title: "ARAMCO CBT",
    category: "ARAMCO",
    subProducts: [
      {
        id: "aramco-welding-cbt",
        title: "Welding CBT",
        review: 19450,
        rating: 3.8,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: ["/assets/products/product3/sub1/p3s11.png"],
      },
      {
        id: "aramco-piping-cbt",
        title: "Piping CBT",
        review: 17120,
        rating: 4,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: ["/assets/products/product3/sub2/p3s21.png"],
      },
      {
        id: "aramco-pipeline-cbt",
        title: "Pipeline CBT",
        review: 13640,
        rating: 4.5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product3/sub3/p3s31.png"],
      },
      {
        id: "aramco-coating-painting-cbt",
        title: "Coating – Painting CBT",
        review: 15990,
        rating: 4.8,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product3/sub4/p3s41.png",
          "/assets/products/product3/sub4/p3s42.png",
        ],
      },
      {
        id: "aramco-non-metallic-cbt",
        title: "Non- Metallic CBT",
        review: 14780,
        rating: 4.3,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product3/sub5/p3s51.png"],
      },
    ],
  },

  // ===============================
  // 4) CSWIP MATERIAL
  // ===============================
  {
    id: "product-4",
    title: "CSWIP MATERIAL",
    category: "CSWIP",
    subProducts: [
      {
        id: "cswip-31",
        title: "CSWIP 3.1",
        review: 18360,
        rating: 5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product4/sub1/p4s11.png",
          "/assets/products/product4/sub1/p4s12.png",
          "/assets/products/product4/sub1/p4s13.png",
          "/assets/products/product4/sub1/p4s14.png",
        ],
      },
      {
        id: "cswip-322",
        title: "CSWIP 3.2.2",
        review: 12970,
        rating: 4.8,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product4/sub2/p4s21.png"],
      },
    ],
  },

  // ===============================
  // 5) QA/QC FULL COURSE
  // ===============================
  {
    id: "product-5",
    title: "QA/QC FULL COURSE",
    category: "QAQC",
    subProducts: [
      {
        id: "qaqc-full-course",
        title: "QA/QC FULL COURSE",
        review: 21480,
        rating: 4.2,
        price: "999",
        description: "🎓 Full Course Video With Certificate",
        includes: ["Face Video", "Zoom Video", "Full Course PDF"],
        images: [
          "/assets/products/product5/sub1/p5s11.png",
          "/assets/products/product5/sub1/p5s12.png",
          "/assets/products/product5/sub1/p5s13.png",
        ],
      },
    ],
  },

  // ===============================
  // 6) EDITABLE MATERIAL
  // ===============================
  {
    id: "product-6",
    title: "EDITABLE MATERIAL",
    category: "EDITABLE",
    subProducts: [
      {
        id: "editable-procedure",
        title: "Editable Proceedure",
        review: 11760,
        rating: 4.7,
        price: "999",
        description: "🎓 100% Exam-Oriented & Industry-Focused Study Material",
        includes: ["Latest API syllabus"],
        images: ["/assets/products/product6/sub1/p6s11.png"],
      },
      {
        id: "editable-wps",
        title: "Editable WPS",
        review: 15210,
        rating: 4,
        price: "999",
        description: "🎓 100% Exam-Oriented & Industry-Focused Study Material",
        includes: ["Latest API syllabus"],
        images: [
          "/assets/products/product6/sub2/p6s21.png",
          "/assets/products/product6/sub2/p6s22.png",
        ],
      },
      {
        id: "editable-iso-9001-2015",
        title: "EDITABLE ISO 9001 2015 STD DOCS",
        review: 16940,
        rating: 3.5,
        price: "999",
        description: "🎓 100% Exam-Oriented & Industry-Focused Study Material",
        includes: ["Latest API syllabus"],
        images: [
          "/assets/products/product6/sub3/p6s31.png",
          "/assets/products/product6/sub3/p6s32.png",
          "/assets/products/product6/sub3/p6s33.png",
        ],
      },
      {
        id: "editable-employer-base-ndt",
        title:
          "Editable Employer Base NDT Certificate Record _ Procedure Formate Question Ans With Written Practices",
        review: 14280,
        rating: 5,
        price: "999",
        description: "🎓 100% Exam-Oriented & Industry-Focused Study Material",
        includes: [
          "NDT Certificate Record",
          "Procedure Formate",
          "Question Ans",
          "Written Practices",
        ],
        images: [
          "/assets/products/product6/sub4/p6s41.png",
          "/assets/products/product6/sub4/p6s42.png",
        ],
      },
    ],
  },

  // ===============================
  // 7) AWS/CWI MATERIAL
  // ===============================
  {
    id: "product-7",
    title: "AWS/CWI MATERIAL",
    category: "AWS/CWI",
    subProducts: [
      {
        id: "aws-cwi-material",
        title: "AWS/CWI MATERIAL",
        review: 15860,
        rating: 4.3,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product7/sub1/p7s11.png"],
      },
    ],
  },

  // ===============================
  // 8) CWB WELDING SUPERVISOR EXAM
  // ===============================
  {
    id: "product-8",
    title: "CWB WELDING SUPERVISOR EXAM",
    category: "CWB",
    subProducts: [
      {
        id: "cwb-welding-supervisor-exam",
        title: "CWB WELDING SUPERVISOR EXAM",
        review: 13450,
        rating: 4.2,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product8/sub1/p8s11.png"],
      },
    ],
  },

  // ===============================
  // 9) BGAS QUESTION PAPER
  // ===============================
  {
    id: "product-9",
    title: "BGAS QUESTION PAPER",
    category: "BGAS",
    subProducts: [
      {
        id: "bgas-question-paper",
        title: "BGAS QUESTION PAPER",
        review: 17630,
        rating: 4.5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus\n👉 99% Passing Guarantee",
        includes: [
          "Question Bank With Ans",
          "Video",
          "Books",
          "Practice Question",
        ],
        images: [
          "/assets/products/product9/sub1/p9s11.png",
          "/assets/products/product9/sub1/p9s12.png",
        ],
      },
    ],
  },

  // ===============================
  // 10) ISO 9001 2015 PAPER
  // ===============================
  {
    id: "product-10",
    title: "ISO 9001 2015 PAPER",
    category: "ISO",
    subProducts: [
      {
        id: "iso-9001-2015-paper",
        title: "ISO 9001 2015 PAPER",
        review: 11990,
        rating: 3.5,
        price: "999",
        description:
          "🎓 100% Exam-Oriented & Industry-Focused Study Material\n👉 Latest API syllabus",
        includes: ["Latest API syllabus"],
        images: [
          "/assets/products/product10/sub1/p10s11.png",
          "/assets/products/product10/sub1/p10s12.png",
        ],
      },
    ],
  },

  // ===============================
  // 11) NACE Level-I Exam Paper
  // ===============================
  {
    id: "product-11",
    title: "NACE Level-I Exam Paper",
    category: "NACE",
    subProducts: [
      {
        id: "nace-level-1-exam-paper",
        title: "NACE Level-I Exam Paper",
        review: 8600,
        rating: 3.9,
        price: "599",
        description: "✔ Question Bank With Ans",
        includes: ["Question Bank With Ans"],
        images: ["/assets/products/product11/sub1/p11s11.png"],
      },
    ],
  },

  // ===============================
  // 12) Video Membership
  // ===============================
  {
    id: "product-12",
    title: "Video Membership",
    category: "MEMBERSHIP",
    subProducts: [
      {
        id: "video-membership",
        title: "Video Membership",
        review: 25490,
        rating: 4.5,
        price: "999",
        description: "Video Membership Includes Premium Topics",
        includes: [
          "API 570",
          "Asme B-31.3",
          "ASME Sec.2 Part C",
          "ASME Section 5",
          "ASME Section 8 (Div-1)",
          "ASME Section 9",
          "Basic Knowledge of Quality Engineer, QC Inspector,Surveyor(TPI)",
          "Basic Of Welding",
          "BGAS Video",
          "Briefly Explain Welding Process",
          "Cswip 3.1",
          "Fabrication _ Interview Related",
          "Heat Treatment _ PWHT",
          "HOW TO REVIEW MTC",
          "How to Write WPS!",
          "Impact Testing",
          "NDT Video",
          "PMI",
        ],
        images: ["/assets/products/product12/sub1/p12s11.png"],
      },
    ],
  },
];

// ===============================
// HELPERS
// ===============================
export const getMainProductById = (id: string): MainProduct | undefined => {
  return courses.find((p) => p.id === id);
};

export const getSubProductById = (subId: string): SubProduct | undefined => {
  console.log("subId: ", subId);
  for (const product of courses) {
    const found = product.subProducts.find((sub) => sub.id === subId);
    console.log("found: ", found);
    if (found) return found;
  }
  return undefined;
};
