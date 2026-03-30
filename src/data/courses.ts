// src/data/productsData.ts
export interface SubProduct {
  id: string;
  title: string;
  review: number;
  rating: number;
  price: string;
  guarantee?: string; // e.g. "99% Passing Guarantee Material"
  description: string; // Main overview paragraph
  coversTitle?: string; // Section label (defaults to "What This Study Material Covers")
  covers?: string[]; // Bullet points
  resultLearning?: string; // 🔥 tagline text
  includes: string[];
  images: string[];
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
        title: "📘 ASNT NDT Level III (Basic + MT) Study Material",
        review: 13840,
        rating: 4.5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ASNT NDT Level III (Basic + MT) focuses on advanced magnetic particle testing along with Level III core responsibilities such as procedure development, technique selection, and quality control. This study material prepares professionals to manage MT inspections, interpret results, and ensure compliance with international NDT standards.",
        covers: [
          "Level III Basic theory & certification responsibilities",
          "Advanced MT principles & defect evaluation",
          "Procedure writing & inspection control",
          "Exam-oriented MCQs & technical practice",
        ],
        resultLearning:
          "Built to develop expert MT inspection authority and exam confidence.",
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
        title: "📘 ASNT NDT Level III (Basic + UT) Study Material",
        review: 12690,
        rating: 4,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ASNT NDT Level III (Basic + UT) specializes in advanced ultrasonic testing along with Level III technical management concepts. This study material trains professionals to design UT procedures, analyze complex indications, and ensure high inspection reliability in critical equipment.",
        covers: [
          "Level III Basic principles & code responsibilities",
          "Advanced UT techniques & signal interpretation",
          "Procedure development & inspection optimization",
          "Exam-focused MCQs & case-based practice",
        ],
        resultLearning:
          "Designed to build high-level UT expertise and certification success.",
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
        title: "📘 ASNT NDT Level III (Basic + RT) Study Material",
        review: 14950,
        rating: 3.9,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ASNT NDT Level III (Basic + RT) focuses on advanced radiographic testing techniques and inspection program control. This study material prepares professionals to establish RT procedures, evaluate radiographic quality, and manage inspection compliance for critical components.",
        covers: [
          "Level III Basic management concepts",
          "Advanced RT principles & image interpretation",
          "Technique development & quality control",
          "Exam-oriented MCQs & inspection scenarios",
        ],
        resultLearning:
          "Structured to strengthen RT authority skills and exam performance.",
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
        title: "📘 ASNT NDT Level III (Basic + VT) Study Material",
        review: 11240,
        rating: 4.2,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ASNT NDT Level III (Basic + VT) concentrates on advanced visual inspection planning, procedure control, and defect evaluation methods. This study material helps professionals develop VT techniques, assess critical defects, and maintain inspection quality across industrial applications.",
        covers: [
          "Level III Basic theory & inspection governance",
          "Advanced VT methods & defect assessment",
          "Procedure writing & inspection standards",
          "Exam-focused MCQs & practical knowledge",
        ],
        resultLearning:
          "Created to build professional VT leadership and first-attempt exam success.",
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
        title: "📘 API 510 Pressure Vessel Inspector Study Material",
        review: 17890,
        rating: 4,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 510 focuses on the inspection, maintenance, and safety of pressure vessels used in oil & gas and process industries. This study material helps inspectors understand vessel integrity, prevent failures, and work as per international API inspection standards.",
        covers: [
          "Pressure vessel inspection & damage mechanisms",
          "Maintenance, repair & safety practices",
          "Code-based concepts with practical application",
          "Exam-oriented MCQs & practice questions",
        ],
        resultLearning:
          "Built to strengthen inspection skills and maximize first-attempt exam success.",
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
        title: "📘 API 570 Piping Inspector Study Material",
        review: 15420,
        rating: 4.5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 570 is dedicated to the inspection, maintenance, and integrity management of piping systems in refineries and process plants. This study material trains inspectors to detect piping damage, control corrosion, and ensure safe plant operations as per API codes.",
        covers: [
          "Piping inspection methods & corrosion control",
          "Damage mechanisms & failure prevention",
          "Code requirements with real scenarios",
          "Exam-focused MCQs & practice sets",
        ],
        resultLearning:
          "Designed to improve piping integrity knowledge and deliver confident exam performance.",
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
        title: "📘 API 653 Storage Tank Inspector Study Material",
        review: 12110,
        rating: 4.9,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 653 focuses on the inspection, repair, and safe operation of above-ground storage tanks used in petroleum and chemical industries. This study material helps inspectors evaluate tank condition, prevent leakage risks, and comply with international tank inspection standards.",
        covers: [
          "Tank inspection techniques & settlement checks",
          "Corrosion, repairs & safety requirements",
          "Code-based calculations & field practices",
          "Exam-oriented MCQs & question bank",
        ],
        resultLearning:
          "Structured to build tank inspection expertise and boost certification success.",
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
        title: "📘 API 936 Refractory Inspection Study Material",
        review: 10980,
        rating: 5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 936 specializes in the inspection and quality control of refractory linings used in furnaces, heaters, and reactors. This study material trains inspectors to assess refractory installation, performance, and failure prevention in high-temperature environments.",
        covers: [
          "Refractory materials & installation practices",
          "Inspection methods & defect identification",
          "Quality control & performance evaluation",
          "Exam-focused MCQs & practical concepts",
        ],
        resultLearning:
          "Created to strengthen refractory inspection knowledge and ensure exam confidence.",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub4/p2s41.png",
          "/assets/products/product2/sub4/p2s42.png",
          "/assets/products/product2/sub4/p2s43.png",
        ],
      },
      {
        id: "api-577",
        title: "📘 API 577 Welding Inspection Study Material",
        review: 16570,
        rating: 5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 577 provides in-depth knowledge of welding processes, weld defects, and inspection techniques used in oil & gas industries. This study material helps inspectors understand welding quality control and ensure compliance with recognized welding standards.",
        covers: [
          "Welding processes & metallurgy basics",
          "Weld defects & inspection methods",
          "Codes, symbols & acceptance criteria",
          "Exam-oriented MCQs & practice questions",
        ],
        resultLearning:
          "Developed to improve welding inspection skills and achieve high exam accuracy.",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product2/sub5/p2s51.png"],
      },
      {
        id: "api-580",
        title: "📘 API 580 Risk-Based Inspection (RBI) Study Material",
        review: 14330,
        rating: 4.3,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 580 focuses on risk-based inspection planning to optimize plant safety and equipment reliability. This study material trains professionals to analyze failure risks, prioritize inspections, and reduce operational hazards using RBI methodology.",
        covers: [
          "Risk assessment principles & calculations",
          "Inspection planning strategies",
          "Equipment reliability management",
          "Exam-oriented MCQs & case-based learning",
        ],
        resultLearning:
          "Designed to build strong RBI decision-making skills and exam mastery.",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub6/p2s61.png",
          "/assets/products/product2/sub6/p2s62.png",
        ],
      },
      {
        id: "api-571",
        title: "📘 API 571 Damage Mechanisms Study Material",
        review: 13260,
        rating: 3,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API 571 explains common damage mechanisms affecting refinery and process equipment, including corrosion, cracking, and material degradation. This study material helps inspectors identify damage causes and apply prevention techniques effectively.",
        covers: [
          "Corrosion types & degradation processes",
          "Failure mechanisms & inspection focus areas",
          "Prevention methods & monitoring concepts",
          "Exam-focused MCQs & practical scenarios",
        ],
        resultLearning:
          "Built to sharpen damage analysis knowledge and improve exam performance.",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product2/sub7/p2s71.png",
          "/assets/products/product2/sub7/p2s72.png",
        ],
      },
      {
        id: "api-sife",
        title: "📘 API SIFE Source Inspection & Fixed Equipment Study Material",
        review: 11890,
        rating: 4.5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "API SIFE focuses on source inspection and quality control of fixed equipment during manufacturing and fabrication stages. This study material trains inspectors to verify material quality, welding standards, and equipment compliance before installation.",
        covers: [
          "Source inspection procedures & documentation",
          "Material verification & fabrication quality",
          "Welding & equipment compliance checks",
          "Exam-oriented MCQs & real inspection practices",
        ],
        resultLearning:
          "Structured to develop strong inspection control skills and ensure certification success.",
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
        title: "📘 ARAMCO Welding CBT Study Material",
        review: 19450,
        rating: 3.8,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ARAMCO Welding CBT focuses on welding processes, quality control, and inspection requirements used in Saudi Aramco projects. This study material prepares professionals to understand welding standards, defect control, and compliance with Aramco welding specifications.",
        covers: [
          "Welding processes & procedure fundamentals",
          "Weld defects, causes & inspection checks",
          "Aramco welding requirements & acceptance criteria",
          "CBT-style MCQs & practice questions",
        ],
        resultLearning:
          "Designed to improve welding knowledge and achieve confident CBT success.",
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
        title: "📘 ARAMCO Piping CBT Study Material",
        review: 17120,
        rating: 4,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ARAMCO Piping CBT focuses on piping systems, material control, installation practices, and inspection requirements used in Aramco facilities. This study material trains professionals to ensure piping integrity, safety compliance, and quality execution.",
        covers: [
          "Piping materials, fittings & installation methods",
          "Inspection procedures & quality control",
          "Aramco piping standards & site practices",
          "CBT-oriented MCQs & test simulations",
        ],
        resultLearning:
          "Built to strengthen piping inspection knowledge and pass CBT with confidence.",
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
        title: "📘 ARAMCO Pipeline CBT Study Material",
        review: 13640,
        rating: 4.5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ARAMCO Pipeline CBT focuses on pipeline construction, welding, inspection, and corrosion control used in oil & gas transmission systems. This study material prepares professionals to understand pipeline safety, quality standards, and inspection requirements.",
        covers: [
          "Pipeline construction & welding practices",
          "Inspection methods & defect prevention",
          "Coating, testing & safety requirements",
          "CBT-style MCQs & practical scenarios",
        ],
        resultLearning:
          "Structured to develop pipeline expertise and achieve CBT success smoothly.",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: ["/assets/products/product3/sub3/p3s31.png"],
      },
      {
        id: "aramco-coating-painting-cbt",
        title: "📘 ARAMCO Coating – Painting CBT Study Material",
        review: 15990,
        rating: 4.8,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ARAMCO Coating CBT focuses on surface preparation, protective coatings, and quality inspection practices used to prevent corrosion in industrial assets. This study material trains professionals to control coating quality and meet Aramco corrosion protection standards.",
        covers: [
          "Surface preparation methods & standards",
          "Coating materials, defects & inspection checks",
          "Thickness measurement & quality control",
          "CBT-focused MCQs & practice tests",
        ],
        resultLearning:
          "Designed to build strong coating inspection skills and clear CBT confidently.",
        includes: ["Question Bank With Ans", "Books", "Practice Question"],
        images: [
          "/assets/products/product3/sub4/p3s41.png",
          "/assets/products/product3/sub4/p3s42.png",
        ],
      },
      {
        id: "aramco-non-metallic-cbt",
        title: "📘 ARAMCO Non-Metallic CBT Study Material",
        review: 14780,
        rating: 4.3,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "ARAMCO Non-Metallic CBT focuses on inspection and application of non-metallic materials such as GRP, GRE, HDPE, and lined piping systems. This study material prepares professionals to understand installation, testing, and quality control of non-metallic systems in Aramco projects.",
        covers: [
          "Non-metallic materials & system fundamentals",
          "Installation & inspection practices",
          "Testing methods & quality requirements",
          "CBT-oriented MCQs & exam practice",
        ],
        resultLearning:
          "Created to develop non-metallic inspection expertise and ensure CBT success.",
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
        title: "📘 CSWIP 3.1 Welding Inspector Study Material",
        review: 18360,
        rating: 5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "CSWIP 3.1 focuses on welding inspection, quality control, and defect identification in fabrication and construction projects. This study material trains inspectors to ensure weld integrity, comply with welding standards, and maintain high safety and quality levels.",
        covers: [
          "Welding processes & inspection techniques",
          "Weld defects, causes & acceptance criteria",
          "Codes, symbols & quality requirements",
          "Exam-oriented MCQs & practice questions",
        ],
        resultLearning:
          "Designed to build strong welding inspection skills and achieve high exam success.",
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
        title: "📘 CSWIP 3.2 Senior Welding Inspector Study Material",
        review: 12970,
        rating: 4.8,
        price: "999",
        guarantee: "85% Passing Guarantee Material",
        description:
          "CSWIP 3.2 is an advanced certification focused on supervising welding inspection activities, quality management, and technical decision-making. This study material prepares inspectors to manage inspection teams, interpret standards, and control welding quality at a senior level.",
        covers: [
          "Advanced welding technology & metallurgy",
          "Inspection management & quality systems",
          "Code interpretation & technical judgment",
          "Exam-focused MCQs & real inspection scenarios",
        ],
        resultLearning:
          "Structured to develop senior-level inspection expertise and exam confidence.",
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
        title: "📘 Mechanical QA/QC Full Course Study Material",
        review: 21480,
        rating: 4.2,
        price: "1349",
        guarantee: "Full Course Video With Certificate",
        description:
          "Mechanical QA/QC Full Course Study Material is designed for fabrication, oil & gas, pressure vessel, piping, and industrial construction projects. It trains professionals in inspection procedures, quality control systems, testing methods, and real site practices to ensure project compliance and high-quality execution.",
        covers: [
          "Welding inspection, WPS & quality control procedures",
          "Material inspection, identification & documentation",
          "Dimensional inspection & drawing understanding",
          "Hydrotest, pressure testing & final acceptance checks",
          "Coating, painting & corrosion protection inspection",
          "QA/QC reports, NCR handling & audit preparation",
        ],
        resultLearning:
          "Built to develop strong site inspection skills and prepare professionals for real industrial QA/QC roles.",
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
        title: "📘 Editable Industrial Procedures Package (ASME Code Based)",
        review: 11760,
        rating: 4.7,
        price: "1199",
        guarantee: "All Procedures In Word Format",
        description:
          "130+ ready-to-use editable procedures for oil & gas, fabrication, pressure vessels, and NDT work — prepared as per latest ASME standards for smooth project approval and execution.",
        coversTitle: "Procedures Prepared As Per Latest Standards",
        covers: [
          "ASME Section V – NDT Examination Methods (2023)",
          "ASME Section VIII Division 1 – Pressure Vessel Rules (2023)",
          "ASME Section IX – Welding & Welder Qualification (2023)",
          "ASME B31.3 – Process Piping Code",
          "ASME Section II Part C – Material Specifications (2023)",
        ],
        resultLearning:
          "Built to help companies pass technical audits, speed up project approvals, and execute fabrication & inspection work efficiently without documentation delays.",
        includes: [
          "ASME Section V – NDT Methods",
          "ASME Section VIII Div.1",
          "ASME Section IX",
          "ASME B31.3",
          "ASME Section II Part C",
          "130+ Editable Procedures",
        ],
        images: ["/assets/products/product6/sub1/p6s11.png"],
      },
      {
        id: "editable-wps",
        title: "📘 Editable WPS Package – SMAW | GTAW | FCAW | SAW",
        review: 15210,
        rating: 4,
        price: "999",
        guarantee: "All WPS In Word Format",
        description:
          "This Editable WPS Package is developed for oil & gas, fabrication, piping, and pressure vessel projects as per ASME Section IX standards. It helps engineers and QA/QC teams prepare compliant welding documents quickly and accurately.",
        coversTitle: "Welding Processes Covered",
        covers: [
          "SMAW – Shielded Metal Arc Welding",
          "GTAW – Gas Tungsten Arc Welding",
          "FCAW – Flux Cored Arc Welding",
          "SAW – Submerged Arc Welding",
          "120+ WPS for industrial reference & execution",
        ],
        resultLearning:
          "Designed for real industrial use, ensuring quality control and smooth project approvals.",
        includes: [
          "SMAW WPS",
          "GTAW WPS",
          "FCAW WPS",
          "SAW WPS",
          "120+ Editable WPS Documents",
        ],
        images: [
          "/assets/products/product6/sub2/p6s21.png",
          "/assets/products/product6/sub2/p6s22.png",
        ],
      },
      {
        id: "editable-iso-9001-2015",
        title: "📘 Industrial QA/QC Reports & ISO Documentation Package",
        review: 16940,
        rating: 3.5,
        price: "999",
        guarantee: "All QA/QC Reports In Word Format",
        description:
          "This Industrial QA/QC & ISO Documentation Package provides editable quality control formats and ISO standard documents for oil & gas, fabrication, and manufacturing projects. It helps organizations maintain compliance, improve inspections, and pass audits efficiently.",
        coversTitle: "What This Complete Package Includes",
        covers: [
          "49 Editable Industrial QA/QC Report Formats",
          "Editable ISO Standard Documents",
          "Complete Quality Control (QC) Manual",
          "ISO 9001:2015 Quality Management System Documents",
          "Inspection, testing & compliance tracking formats",
        ],
        resultLearning:
          "Built to support audit readiness, project compliance, and smooth quality operations.",
        includes: [
          "49 Editable QA/QC Report Formats",
          "Editable ISO Standard Documents",
          "Complete QC Manual",
          "ISO 9001:2015 Documents",
          "Inspection & Compliance Formats",
        ],
        images: [
          "/assets/products/product6/sub3/p6s31.png",
          "/assets/products/product6/sub3/p6s32.png",
          "/assets/products/product6/sub3/p6s33.png",
        ],
      },
      {
        id: "editable-employer-base-ndt",
        title: "📘 NDT Editable Exam & Inspection Documentation Package",
        review: 14280,
        rating: 5,
        price: "1199",
        guarantee: "All In Word Format",
        description:
          "This NDT Editable Exam & Documentation Package provides ready-to-use formats for NDT exams, inspection procedures, practice tests, and industrial reports. It supports efficient training, certification preparation, and structured inspection documentation.",
        coversTitle: "What This Complete Package Includes",
        covers: [
          "Editable NDT Exam Formats (theory & practical)",
          "NDT Inspection Procedures (UT, RT, MT, PT, VT)",
          "Written Practice Question Formats",
          "Editable Inspection & Test Report Templates",
          "Professional industrial documentation structure",
        ],
        resultLearning:
          "Fully editable & reusable formats — suitable for training institutes & site inspections. Saves time in documentation & reporting and supports quality compliance.",
        includes: [
          "NDT Exam Formats (Theory & Practical)",
          "NDT Inspection Procedures (UT, RT, MT, PT, VT)",
          "Written Practice Question Formats",
          "Inspection & Test Report Templates",
          "Professional Industrial Documentation",
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
        title: "📘 AWS CWI Certified Welding Inspector Study Material",
        review: 15860,
        rating: 4.3,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "AWS CWI certification focuses on professional welding inspection, quality control, and defect evaluation across fabrication and construction industries. This study material prepares inspectors to understand welding processes, inspection techniques, and code compliance as required by the American Welding Society.",
        covers: [
          "Welding processes, metallurgy & inspection principles",
          "Weld defects identification & acceptance criteria",
          "Welding symbols, drawings & WPS understanding",
          "Code-based inspection concepts with exam practice",
        ],
        resultLearning:
          "Designed to build expert welding inspection skills and achieve confident CWI exam success.",
        includes: ["Question Bank With Ans", "Books"],
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
        title: "📘 CWB Welding Supervisor Exam Study Material",
        review: 13450,
        rating: 4.2,
        price: "1999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "The CWB Welding Supervisor certification focuses on supervising welding operations, ensuring workmanship quality, safety compliance, and adherence to welding standards used in industrial fabrication projects. This study material prepares professionals to manage welders, control welding procedures, and maintain quality systems as required by the Canadian Welding Bureau.",
        covers: [
          "Welding processes, supervision responsibilities & quality control",
          "WPS implementation & welder performance monitoring",
          "Defect prevention, inspection coordination & documentation",
          "Safety practices & exam-oriented knowledge",
        ],
        resultLearning:
          "Designed to develop strong welding supervision skills and ensure confident exam success.",
        includes: ["Question Bank With Ans", "Books"],
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
        title: "📘 BGAS G2 Painting Inspection Study Material",
        review: 17630,
        rating: 4.5,
        price: "999",
        guarantee: "99% Passing Guarantee Material",
        description:
          "BGAS G2 focuses on coating and painting inspection to protect structures from corrosion in industrial environments. This study material trains inspectors to evaluate surface preparation, coating application, and quality control to ensure long-term asset protection.",
        covers: [
          "Surface preparation methods & standards",
          "Coating types, defects & inspection checks",
          "Thickness measurement & quality control",
          "Exam-oriented MCQs & practical knowledge",
        ],
        resultLearning:
          "Built to strengthen coating inspection skills and ensure first-attempt exam success.",
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
        title: "📘 Editable ISO 9001:2015 Standard Documentation Package",
        review: 11990,
        rating: 3.5,
        price: "999",
        guarantee: "All In Word Format",
        description:
          "This Editable ISO 9001:2015 Documentation Package provides complete quality management system formats required for certification, audits, and daily quality operations. It helps organizations implement ISO standards efficiently, maintain compliance, and pass internal and external audits smoothly.",
        coversTitle: "What This Package Includes",
        covers: [
          "Editable ISO procedures, policies & formats",
          "Quality manual & standard operating documents",
          "Risk assessment & corrective action templates",
          "Audit, record keeping & compliance tools",
        ],
        resultLearning:
          "Designed to simplify ISO implementation and ensure successful certification with structured quality control.",
        includes: [
          "Editable ISO Procedures & Policies",
          "Quality Manual",
          "Risk Assessment Templates",
          "Audit & Compliance Tools",
        ],
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
        title: "📘 NACE Level I Coating Inspector Study Material",
        review: 8600,
        rating: 3.9,
        price: "999",
        description:
          "NACE Level I focuses on basic coating inspection practices, surface preparation, application control, and corrosion protection methods used in industrial projects. This study material helps inspectors understand coating quality requirements and perform inspections as per international standards.",
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
        title: "📘 Video Membership",
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
  for (const product of courses) {
    const found = product.subProducts.find((sub) => sub.id === subId);
    if (found) return found;
  }
  return undefined;
};
