import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Data interface
interface ProgramData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  description: string[];
  features: { title: string; text: string }[];
  additionalContent: string;
  galleryImages: { src: string; caption: string }[];
}

// Data for all programs
const programsData: Record<string, ProgramData> = {
  "wahedpur-high-school": {
    id: "wahedpur-high-school",
    title: "Wahedpur Iftekhar Ahmed High School",
    subtitle: "Empowering local youth with quality secondary education, modern facilities, and a dedicated faculty to shape the leaders of tomorrow.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD",
    stats: [
      { value: "500+", label: "Students Enrolled" },
      { value: "15", label: "Qualified Teachers" },
      { value: "100%", label: "Pass Rate" }
    ],
    description: [
      "In the heart of Wahedpur, education is the beacon of hope. The Wahedpur Iftekhar Ahmed High School stands as a testament to our commitment to the next generation. We provide a rigorous academic curriculum combined with extracurricular activities to ensure holistic development.",
      "Beyond textbooks, we focus on character building, leadership skills, and digital literacy. Our computer labs and science facilities are among the best in the region, offering students opportunities that were previously out of reach."
    ],
    features: [
      { title: "Modern Classrooms", text: "Spacious, well-lit classrooms equipped with modern teaching aids to facilitate effective learning." },
      { title: "Scholarship Program", text: "Financial aid for meritorious students from underprivileged backgrounds to ensure no talent goes to waste." }
    ],
    additionalContent: "Our alumni have gone on to pursue higher education in prestigious universities across Bangladesh, bringing pride back to our village. We continue to upgrade our facilities, recently adding a multimedia classroom to integrate technology into daily lessons.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD", caption: "Morning Assembly" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "Science Fair 2023" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1lWT2VasV0xgqnv-mcsr4oBpTA8kEmR062zXoGVAAOQWxBodYxFoaWhCzwAXVeDYV8ZkKdhHd4gnbMXnOOaGH0jzHKvMFMSoE-RimNwPSI4GIqMjSlpwy956hXOn-P9hKfKfLR9SB_hKyzwpYvrzM3tref3Lrsv4NE4cQoRZQ6-UzzTFoPZeRxGzNxOVcfj42sbeex9AxvHfgOSJbWFACeGgujlzY6VPhEqg5qUX-GUzxJuzuVyAO1_73HJjcuZteYjT0sTsgTZJ", caption: "Library Study Session" }
    ]
  },
  "nurun-nahar-library": {
    id: "nurun-nahar-library",
    title: "Nurun Nahar Library",
    subtitle: "A community sanctuary for knowledge, offering a vast collection of books and digital resources to foster a culture of lifelong learning.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1lWT2VasV0xgqnv-mcsr4oBpTA8kEmR062zXoGVAAOQWxBodYxFoaWhCzwAXVeDYV8ZkKdhHd4gnbMXnOOaGH0jzHKvMFMSoE-RimNwPSI4GIqMjSlpwy956hXOn-P9hKfKfLR9SB_hKyzwpYvrzM3tref3Lrsv4NE4cQoRZQ6-UzzTFoPZeRxGzNxOVcfj42sbeex9AxvHfgOSJbWFACeGgujlzY6VPhEqg5qUX-GUzxJuzuVyAO1_73HJjcuZteYjT0sTsgTZJ",
    stats: [
      { value: "2,000+", label: "Books Available" },
      { value: "Daily", label: "Open Access" },
      { value: "Free", label: "Membership" }
    ],
    description: [
      "Named in honor of a local educator, the Nurun Nahar Library is more than just a repository of books; it is a vibrant community hub. We believe that access to information is a fundamental right, and this library serves students, researchers, and general readers alike.",
      "From academic textbooks to classic literature and daily newspapers, our collection is curated to serve diverse interests. The library also hosts weekly reading circles and storytelling sessions for children to ignite a passion for reading from a young age."
    ],
    features: [
      { title: "Digital Corner", text: "Computers with internet access allow community members to learn digital skills and access online information." },
      { title: "Study Spaces", text: "Quiet, comfortable areas provided for students to prepare for exams away from the distractions of home." }
    ],
    additionalContent: "The library has become a focal point for cultural exchange in Wahedpur. We regularly invite guest speakers and hold workshops on topics ranging from health awareness to career guidance, making it a true center for community development.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1lWT2VasV0xgqnv-mcsr4oBpTA8kEmR062zXoGVAAOQWxBodYxFoaWhCzwAXVeDYV8ZkKdhHd4gnbMXnOOaGH0jzHKvMFMSoE-RimNwPSI4GIqMjSlpwy956hXOn-P9hKfKfLR9SB_hKyzwpYvrzM3tref3Lrsv4NE4cQoRZQ6-UzzTFoPZeRxGzNxOVcfj42sbeex9AxvHfgOSJbWFACeGgujlzY6VPhEqg5qUX-GUzxJuzuVyAO1_73HJjcuZteYjT0sTsgTZJ", caption: "Main Reading Room" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD", caption: "Children's Book Collection" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "Evening Workshop" }
    ]
  },
  "green-wahedpur": {
    id: "green-wahedpur",
    title: "Green Wahedpur Initiative",
    subtitle: "Promoting environmental stewardship through tree planting drives, sustainable farming workshops, and eco-friendly community practices.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM",
    stats: [
      { value: "5,000+", label: "Trees Planted" },
      { value: "20+", label: "Workshops Held" },
      { value: "Clean", label: "Village Goal" }
    ],
    description: [
      "The Green Wahedpur Initiative is our commitment to the planet and our future generations. We understand that environmental health is intrinsically linked to community well-being. This program focuses on restoring local greenery, managing waste effectively, and educating the community about sustainable living.",
      "Our annual tree planting drives have transformed barren roadside strips into shaded avenues. We also distribute fruit saplings to households, providing both nutrition and economic value while increasing the village's green cover."
    ],
    features: [
      { title: "Sustainable Agriculture", text: "Training farmers in organic methods to reduce pesticide use and improve long-term soil health." },
      { title: "Waste Management", text: "Implementing village-wide recycling and composting systems to keep our streets and water bodies clean." }
    ],
    additionalContent: "We engage school children as 'Green Ambassadors,' empowering them to lead cleanliness drives and monitor the health of newly planted trees. This fosters a sense of ownership and responsibility towards nature from a young age.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM", caption: "Community Planting Day" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "Organic Farming Workshop" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS", caption: "Green Ambassadors" }
    ]
  },
  "village-infrastructure": {
    id: "village-infrastructure",
    title: "Village Infrastructure Development",
    subtitle: "Enhancing connectivity and safety by paving roads, repairing bridges, and installing solar streetlights throughout the village.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL",
    stats: [
      { value: "5km+", label: "Roads Paved" },
      { value: "50+", label: "Solar Lights" },
      { value: "3", label: "Bridges Repaired" }
    ],
    description: [
      "Robust infrastructure is the backbone of economic and social activity. Before our intervention, many roads in Wahedpur were impassable during the monsoon season, cutting off access to markets, schools, and healthcare. We are changing that narrative one brick at a time.",
      "Our program focuses on durability and sustainability. We use high-quality materials to ensure longevity and employ local labor, providing employment opportunities while building assets for the community. The installation of solar streetlights has also significantly improved safety at night."
    ],
    features: [
      { title: "Solar Lighting", text: "Installing renewable energy streetlights to improve safety and security for women and children after dark." },
      { title: "Drainage Systems", text: "Constructing proper drainage to prevent waterlogging and reduce the spread of mosquito-borne diseases." }
    ],
    additionalContent: "Improved connectivity has led to a boost in the local economy, allowing farmers to transport goods more easily and small businesses to operate more efficiently. It has also ensured that emergency services can reach every household year-round.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "New Paved Road" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD", caption: "Bridge Repair Project" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS", caption: "Solar Streetlight" }
    ]
  },
  "deep-tubewells": {
    id: "deep-tubewells",
    title: "Deep Tubewells for Safe Water",
    subtitle: "Ensuring access to arsenic-free, clean drinking water for every household to combat waterborne diseases and improve public health.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS",
    stats: [
      { value: "50+", label: "Wells Installed" },
      { value: "100%", label: "Arsenic Free" },
      { value: "24/7", label: "Access" }
    ],
    description: [
      "Water is life, but unsafe water is a silent killer. In many parts of our region, groundwater is contaminated with arsenic, leading to severe health issues. Our Deep Tubewell program aims to provide a permanent solution by drilling deeper to access safe, clean aquifers.",
      "Each tubewell installation serves multiple families, creating community water points that are easily accessible. This reduces the burden on women and children who often walk long distances to fetch water, allowing them more time for education and productive work."
    ],
    features: [
      { title: "Water Testing", text: "Regular rigorous testing of water quality to ensure it meets safety standards and is free from arsenic and pathogens." },
      { title: "Maintenance Training", text: "Teaching locals how to maintain the pumps to ensure longevity and self-sufficiency." }
    ],
    additionalContent: "Since the inception of this program, we have seen a marked decrease in waterborne diseases in the areas served. We continue to identify underserved pockets within the village to ensure universal coverage of safe drinking water.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS", caption: "Installation Process" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "Community Water Point" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD", caption: "Safe Water for All" }
    ]
  },
  "c-section-support": {
    id: "c-section-support",
    title: "C-Section Delivery Support",
    subtitle: "Providing financial and logistical assistance for expecting mothers requiring C-sections, ensuring safe deliveries and maternal well-being.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS",
    stats: [
      { value: "100+", label: "Mothers Helped" },
      { value: "100%", label: "Safe Births" },
      { value: "Full", label: "Cost Coverage" }
    ],
    description: [
      "Maternal health is a critical indicator of community well-being. Complications during childbirth can be life-threatening without timely medical intervention. Our program ensures that no mother in Wahedpur has to risk her life or her baby's life due to the inability to afford a C-section.",
      "We partner with local hospitals and clinics to provide immediate financial support and transportation for emergency deliveries. We also provide post-operative care packages to ensure mothers heal properly and babies get a healthy start."
    ],
    features: [
      { title: "Emergency Fund", text: "A dedicated fund available 24/7 to cover surgical costs, medicines, and hospital stay." },
      { title: "Prenatal Guidance", text: "Counseling sessions to identify high-risk pregnancies early and plan for safe deliveries." }
    ],
    additionalContent: "By removing the financial barrier to essential surgical care, we are reducing maternal and infant mortality rates in our village. Every child born safely is a promise of a brighter future for Wahedpur.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS", caption: "Healthy Mother & Baby" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "Medical Consultation" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyZKxED9S1Iye51yPmzGg2_KLJiK9exwoylYNSnKlsH4WQF2O5RTKmnRpY9gxXIFr9H5kW_pcVf79broNJHTe9JwbufJg1q0VxhJQqg_qbGLVfhZ03hlqxs0xv88m4ImDuBpRvFmEhzTL4tN424WvjQ_9_67OAIluPHwlY6uCOAASKwEAFn4y4TABeA1R5zR5cQALPvHXXGBQUfoAcpnvrtaxexbCSZUcThc7IhlxLrX3lu3Fo-WRZOnJ_vfzS4PA3Jkj9pZxM899r", caption: "Community Awareness" }
    ]
  },
  "housing-repair": {
    id: "housing-repair",
    title: "Housing Construction & Repair",
    subtitle: "Building safe, resilient homes for the most vulnerable families, protecting them from the elements and restoring dignity.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL",
    stats: [
      { value: "20+", label: "Homes Built" },
      { value: "50+", label: "Repairs Done" },
      { value: "Durable", label: "Tin Roofing" }
    ],
    description: [
      "A safe home is the foundation of a stable life. Many impoverished families in Wahedpur live in dilapidated structures that offer little protection against monsoon rains and winter cold. Our Housing program identifies the most vulnerable households—often elderly widows or families with disabled members—and rebuilds their lives.",
      "We replace leaking thatched roofs with durable tin sheets, reinforce walls with brick and cement, and ensure raised plinths to prevent flooding. This provides not just physical shelter, but psychological security and dignity."
    ],
    features: [
      { title: "Flood Resilience", text: "Designing structures to withstand seasonal flooding, ensuring families don't lose their homes every year." },
      { title: "Sanitation", text: "Often coupling housing projects with the construction of sanitary latrines for better hygiene." }
    ],
    additionalContent: "The impact of a secure home is immediate. Children can study without leaks dripping on their books, elders sleep soundly without fear of the cold, and families can focus on livelihood rather than constant repairs.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL", caption: "New Tin Roof Installation" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD", caption: "Completed Family Home" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1lWT2VasV0xgqnv-mcsr4oBpTA8kEmR062zXoGVAAOQWxBodYxFoaWhCzwAXVeDYV8ZkKdhHd4gnbMXnOOaGH0jzHKvMFMSoE-RimNwPSI4GIqMjSlpwy956hXOn-P9hKfKfLR9SB_hKyzwpYvrzM3tref3Lrsv4NE4cQoRZQ6-UzzTFoPZeRxGzNxOVcfj42sbeex9AxvHfgOSJbWFACeGgujlzY6VPhEqg5qUX-GUzxJuzuVyAO1_73HJjcuZteYjT0sTsgTZJ", caption: "Construction Volunteer Team" }
    ]
  },
  "auto-rickshaw": {
    id: "auto-rickshaw",
    title: "Auto-Rickshaw Livelihood",
    subtitle: "Creating sustainable income opportunities by providing auto-rickshaws to unemployed youth, fostering economic independence.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyZKxED9S1Iye51yPmzGg2_KLJiK9exwoylYNSnKlsH4WQF2O5RTKmnRpY9gxXIFr9H5kW_pcVf79broNJHTe9JwbufJg1q0VxhJQqg_qbGLVfhZ03hlqxs0xv88m4ImDuBpRvFmEhzTL4tN424WvjQ_9_67OAIluPHwlY6uCOAASKwEAFn4y4TABeA1R5zR5cQALPvHXXGBQUfoAcpnvrtaxexbCSZUcThc7IhlxLrX3lu3Fo-WRZOnJ_vfzS4PA3Jkj9pZxM899r",
    stats: [
      { value: "15+", label: "Rickshaws Given" },
      { value: "Daily", label: "Income Source" },
      { value: "Self", label: "Reliant Families" }
    ],
    description: [
      "Unemployment is a major challenge for the youth in rural areas. The Auto-Rickshaw Livelihood Program is a direct intervention to create entrepreneurs. Instead of one-time financial aid, we provide assets that generate daily income, breaking the cycle of dependency.",
      "Beneficiaries are selected based on need and motivation. They receive a battery-operated auto-rickshaw and basic training on maintenance and traffic rules. This enables them to earn a respectable living and support their families immediately."
    ],
    features: [
      { title: "Eco-Friendly Transport", text: "Promoting battery-operated vehicles that are quiet and pollution-free, aligning with our green initiatives." },
      { title: "Ownership Model", text: "Vehicles are gifted or provided on interest-free micro-installments, giving a sense of ownership and responsibility." }
    ],
    additionalContent: "The success stories are inspiring. Many recipients have gone from day-labor uncertainty to having savings, sending their children to better schools, and even expanding their small businesses. It's empowerment on wheels.",
    galleryImages: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyZKxED9S1Iye51yPmzGg2_KLJiK9exwoylYNSnKlsH4WQF2O5RTKmnRpY9gxXIFr9H5kW_pcVf79broNJHTe9JwbufJg1q0VxhJQqg_qbGLVfhZ03hlqxs0xv88m4ImDuBpRvFmEhzTL4tN424WvjQ_9_67OAIluPHwlY6uCOAASKwEAFn4y4TABeA1R5zR5cQALPvHXXGBQUfoAcpnvrtaxexbCSZUcThc7IhlxLrX3lu3Fo-WRZOnJ_vfzS4PA3Jkj9pZxM899r", caption: "Handing Over Ceremony" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD", caption: "On the Road" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM", caption: "Happy Beneficiary" }
    ]
  }
};

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  const program = programId ? programsData[programId] : null;

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-light">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h2>
          <Link to="/programs" className="text-primary-dark font-bold hover:underline">Back to Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <header className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            alt={program.title}
            className="w-full h-full object-cover opacity-80" 
            src={program.heroImage}
          />
          <div className="absolute inset-0 header-light-gradient"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-lg">
                {program.title}
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto font-serif italic leading-relaxed drop-shadow-md text-opacity-90">
                {program.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {program.stats.map((stat, index) => (
                    <div key={index} className="p-4">
                        <div className="text-4xl md:text-5xl font-bold text-primary-dark mb-2 font-display">{stat.value}</div>
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold">{stat.label}</p>
                    </div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Main Text */}
                <div className="lg:col-span-8">
                    <motion.div 
                        className="prose prose-lg prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed max-w-none"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Building Foundations for the Future</h2>
                        {program.description.map((para, index) => (
                            <p key={index} className="mb-8">{para}</p>
                        ))}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
                            {program.features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold font-serif mb-3 text-emerald-rich">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Making Lasting Impact</h3>
                        <p>{program.additionalContent}</p>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Other Programs</h3>
                        <div className="space-y-4">
                            {Object.values(programsData).filter(p => p.id !== program.id).slice(0, 4).map(p => (
                                <Link 
                                    key={p.id} 
                                    to={`/programs/${p.id}`} 
                                    className="block p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors group"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-gray-700 group-hover:text-primary-dark truncate pr-2">{p.title}</span>
                                        <span className="material-icons text-gray-400 group-hover:text-primary-dark text-sm">arrow_forward_ios</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 bg-surface-dark rounded-xl p-6 text-center">
                            <span className="material-icons text-primary text-4xl mb-3">volunteer_activism</span>
                            <h4 className="text-white font-bold mb-2">Help Us Grow</h4>
                            <p className="text-gray-300 text-sm mb-4">Your donation empowers this specific initiative.</p>
                            <Link to="/donate" className="block w-full py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary-dark transition-colors">
                                Donate Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">Gallery</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900">Initiative in Action</h2>
                <div className="w-16 h-1.5 bg-primary-dark mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                {program.galleryImages.map((img, index) => (
                    <motion.div 
                        key={index}
                        className={`rounded-xl overflow-hidden relative group ${index === 0 ? 'lg:col-span-2 row-span-2' : ''}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img alt={img.caption} className="w-full h-full object-cover hover-zoom-img" src={img.src} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-medium">{img.caption}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-light relative overflow-hidden" id="donate-cta">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-dark via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
                className="bg-emerald-rich rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                <span className="inline-block py-1 px-3 rounded bg-primary text-emerald-rich text-xs font-bold uppercase tracking-wider mb-6 relative z-10">Get Involved</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
                    Support this Initiative
                </h2>
                <p className="text-gray-200 mb-10 text-lg font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
                    Your contribution directly impacts the success of the {program.title}. Together, we can build a stronger Wahedpur.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
                    <Link to="/donate" className="px-8 py-4 rounded-xl bg-primary hover:bg-white hover:text-emerald-rich text-surface-dark font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                        Donate Now
                    </Link>
                    <Link to="/contact" className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 hover:bg-white hover:text-emerald-rich text-white font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                        Become a Volunteer
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;