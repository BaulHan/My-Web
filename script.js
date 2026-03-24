const translations = {
    ko: {
        "header-sub": "전문 CNC 밀링 가공 기술자",
        "about-title": "자기소개",
        "about-text": "정밀 가공을 추구하는 CNC 기술자로서 독립적인 제조 공정의 기반을 갖추고 있습니다. 공군 복무를 통해 팀워크와 리더십을 쌓았으며, 이를 바탕으로 현장에서 정밀한 작업을 수행합니다.",
        "exp-title": "경력 및 수상",
        "work-title": "실무 경력",
        "job-af": "대한민국 공군 병장 만기전역 (팀워크 및 리더십 강조)",
        "job-ygt": "CNC 가공 및 제품 생산",
        "job-gcode": "현장 실무 가공 경험",
        "award-title": "기능경기대회 수상",
        "nat-57": "제57회 전국기능경기대회:",
        "nat-56": "제56회 전국기능경기대회:",
        "prov-22": "2022년 경기도 지방기능경기대회:",
        "prov-21": "2021년 경기도 지방기능경기대회:",
        "medallion": "장려상 (우수 숙련 기술 인증)",
        "silver": "은메달",
        "bronze": "동메달",
        "cert-title": "자격증 및 교육",
        "cert-hint": "* 아래 항목을 클릭하면 증명서를 볼 수 있습니다.",
        "cert1": "컴퓨터응용가공산업기사",
        "cert2": "샌드빅 코로만트 금속 절삭 이러닝 수료",
        "cert3": "마스터캠 소프트웨어 교육 이수",
        "edu1": "수원공업고등학교 (스마트기계과 졸업)",
        "port-title": "가공 포트폴리오",
        "port-hint": "대회 작품 및 가공 부품 갤러리 (우측으로 스크롤)",
        "contact-title": "연락처",
        "resume-btn": "이력서 다운로드 (PDF)"
    },
    en: {
        "header-sub": "Professional CNC Milling Technician",
        "about-title": "About Me",
        "about-text": "I am a precision-driven CNC machining technician with a strong foundation in independent manufacturing processes. Currently serving in the Air Force, I have developed solid teamwork and leadership skills.",
        "exp-title": "Experience & Awards",
        "work-title": "Work Experience",
        "job-af": "Republic of Korea Air Force (Teamwork & Leadership focus)",
        "job-ygt": "CNC Machining & Production",
        "job-gcode": "Practical experience in real-world CNC machining.",
        "award-title": "Skills Competitions",
        "nat-57": "National Skills Competition (57th):",
        "nat-56": "National Skills Competition (56th):",
        "prov-22": "Provincial Skills Competition (2022):",
        "prov-21": "Provincial Skills Competition (2021):",
        "medallion": "Medallion for Excellence",
        "silver": "Silver Medal",
        "bronze": "Bronze Medal",
        "cert-title": "Certifications & Education",
        "cert-hint": "* Click on the items below to view the certificates.",
        "cert1": "Computer Applied Machining Industrial Engineer",
        "cert2": "Sandvik Coromant Metal Cutting E-learning",
        "cert3": "Mastercam Software Training Completed",
        "edu1": "Suwon Technical High School (Smart Machinery Dept.)",
        "port-title": "Machining Portfolio",
        "port-hint": "Gallery of competition products and machined parts. (Scroll Right)",
        "contact-title": "Let's Connect",
        "resume-btn": "Download Resume (PDF)"
    },
    de: {
        "header-sub": "Professioneller CNC-Frästechniker",
        "about-title": "Über mich",
        "about-text": "Ich bin ein präzisionsorientierter CNC-Zerspanungsmechaniker mit fundierten Kenntnissen in eigenständigen Fertigungsprozessen. Meinen Militärdienst bei der Luftwaffe habe ich genutzt, um Teamfähigkeit und Führungsqualitäten te stärken.",
        "exp-title": "Erfahrung & Auszeichnungen",
        "work-title": "Berufserfahrung",
        "job-af": "Luftwaffe der Republik Korea (Fokus auf Teamwork & Führung)",
        "job-ygt": "CNC-Bearbeitung und Produktion",
        "job-gcode": "Praktische Erfahrung in der CNC-Fertigung",
        "award-title": "Berufswettbewerbe",
        "nat-57": "Nationaler Berufswettbewerb (57.):",
        "nat-56": "Nationaler Berufswettbewerb (56.):",
        "prov-22": "Regionaler Wettbewerb (2022):",
        "prov-21": "Regionaler Wettbewerb (2021):",
        "medallion": "Leistungsdiplom (Exzellenzmedaille)",
        "silver": "Silbermedaille",
        "bronze": "Bronzemedaille",
        "cert-title": "Zertifikate & Ausbildung",
        "cert-hint": "* Klicken Sie auf die untenstehenden Punkte, um die Zertifikate anzuzeigen.",
        "cert1": "Industrietechniker für computergestützte Zerspanung",
        "cert2": "Sandvik Coromant Metallzerspanung E-Learning",
        "cert3": "Mastercam Software-Training abgeschlossen",
        "edu1": "Suwon Technical High School (Abt. Smart Machinery)",
        "port-title": "Fertigungsportfolio",
        "port-hint": "Galerie der Wettbewerbsprodukte und bearbeiteten Teile. (Nach rechts scrollen)",
        "contact-title": "Kontakt",
        "resume-btn": "Lebenslauf herunterladen (PDF)"
    }
};

function changeLang(lang) {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang][key]) {
            elem.innerText = translations[lang][key];
        }
    });
}

window.onload = () => changeLang('en');