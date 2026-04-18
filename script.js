/* 다국어 텍스트 및 수상내역 데이터 관리 객체 (각 수상내역당 이미지 2개 할당) */
const content = {
    ko: {
        title: "CNC 밀링 가공 전문가\n(전국기능경기대회 입상자)",
        secAbout: "자기소개",
        aboutText: "안녕하세요. CNC 밀링 기술자 한바울입니다. \n전국기능경기대회 수상 경력과 실무 경험을 바탕으로 도면 해독부터 CAM 프로그래밍, 공구 세팅, 가공 공정 수립 및 최적화까지 전 공정을 단독 수행할 수 있는 숙련도를 보유하고 있습니다. 현재 독일 IHK-FOSA를 통해 Fachkraft für Metalltechnik(금속 가공 기술자) 자격 인정 절차를 진행 중입니다.",
        secSkills: "핵심 역량",
        skills: [
            {title: "CNC 가공 및 세팅", desc: "3축 밀링 머신 운용 및 소재 특성에 따른 정밀 공구 세팅 능력"},
            {title: "CAM 프로그래밍", desc: "Mastercam을 활용한 정밀 부품 경로 설계 및 G-code 최적화"},
            {title: "고속 가공(Dynamic Milling)", desc: "다이내믹 밀링 기법을 통한 가공 시간 단축 및 공구 수명 극대화"},
            {title: "정밀 측정 및 품질 관리", desc: "마이크로미터, 2차원 측정기 등을 활용한 정밀 공차 관리(±0.01mm)"},
            {title: "다양한 소재 가공 전문성", desc: "S45C, AL6061, SUS 계열 및 베이클라이트 등 다양한 특수 소재 가공 경험"},
            {title: "검증된 기술력", desc: "지방기능경기대회 및 전국기능경기대회 입상을 통해 입증된 실전 가공 기술"}
        ],
        secExp: "경력 및 학력",
        secAwards: "수상 및 자격 (클릭 시 확인)",
        secGallery: "가공 포트폴리오",
        secContact: "연락처 및 이력서",
        cv: "이력서 다운로드 (PDF)",
        timeline: [
            {date: "2024.07 - 2026.03", title: "대한민국 공군", desc: "항공기 기체정비 견습 (FOD/BAT반)"},
            {date: "2023.08 - 2023.11", title: "YGT", desc: "반도체 지그 및 정밀 부품 가공"},
            {date: "2023.04 - 2023.07", title: "GcodeTech", desc: "의료기기 및 로봇 부품 가공"},
            {date: "2020.03 - 2022.12", title: "수원공업고등학교", desc: "스마트기계과 졸업 (기능반)"}
        ],
        // awards: [
        //     {t: "컴퓨터응용가공 산업기사", imgs: ["cert_industrial.jpg", "cert_industrial_back.jpg"]}, // 사진 2장
        //     {t: "컴퓨터응용밀링 기능사", imgs: ["cert_milling.jpg", "cert_milling_back.jpg"]}, // 사진 2장
        //     {t: "2022 경기도 지방기능경기대회 은메달", imgs: ["image1/22G.png", "image1/22G_award.png"]}, // 사진 2장
        //     {t: "2021 경기도 지방기능경기대회 동메달", imgs: ["image1/21G.png", "image1/21G_award.png"]}  // 사진 2장
        // ]
        awards: [
            {t: "국가기술자격증", imgs: ["image1/Licence.png"]}, // 사진 2장
            {t: "경기도 지방기능경기대회 수상", imgs: ["image1/21G.png", "image1/22G.png"]}, // 사진 2장
            {t: "전국기능경기대회(경기도 대표) 입상", imgs: ["image1/21K.png", "image1/22K.png"]}, // 사진 2장
            {t: "MasterCam, Sandvik Coromant 교육 수료증", imgs: ["image1/Master_Cam.png", "image1/Sandvik_Coromant.png"]}  // 사진 2장
        ]
    },
    en: {
        title: "CNC Milling Specialist\n(Prize Winner at the National Skills Competition WorldSkills Korea)",
        secAbout: "About Me",
        aboutText: "Hello, I am Baul Han, a CNC Milling Specialist. \nBased on my awards in National Skills Competitions and practical field experience, I possess the proficiency to independently manage the entire machining process—from blueprint analysis and CAM programming to tool setting and process optimization. I am currently undergoing the recognition process for 'Fachkraft für Metalltechnik' through IHK-FOSA.",
        secSkills: "Core Competencies",
        skills: [
            {title: "CNC Machining & Setup", desc: "Expertise in 3-axis milling machine operation and precision tool setup tailored to material properties."},
            {title: "CAM Programming", desc: "Precision part path design and G-code optimization using Mastercam."},
            {title: "Dynamic Milling", desc: "Optimizing cycle times and maximizing tool life through high-speed dynamic milling techniques."},
            {title: "Precision Measurement & Quality", desc: "Quality control of tight tolerances (within ±0.01mm) using micrometers and 2D measuring instruments."},
            {title: "Material Expertise", desc: "Extensive experience in machining various materials including S45C, AL6061, SUS series, and Bakelite."},
            {title: "Proven Technical Excellence", desc: "Practical machining skills verified through awards in Provincial and National Skills Competitions."}
        ],
        secExp: "Experience & Education",
        secAwards: "Awards & Certificates (Click to view)",
        secGallery: "Work Portfolio",
        secContact: "Contact & Resume",
        cv: "Download CV (PDF)",
        timeline: [
            {date: "Jul 2024 - Mar 2026", title: "Republic of Korea Air Force", desc: "Aircraft Maintenance Apprentice (FOD/BAT)"},
            {date: "Aug 2023 - Nov 2023", title: "YGT", desc: "Semiconductor Jig & Precision Parts Machining"},
            {date: "Apr 2023 - Jul 2023", title: "GcodeTech", desc: "Medical Device & Robot Component Machining"},
            {date: "Mar 2020 - Dec 2022", title: "Suwon Technical High School", desc: "Graduated Dept. of Smart Machinery"}
        ],
        awards: [
            {t: "National Technical Qualification Certificate", imgs: ["image1/Licence.png"]}, // 사진 2장
            {t: "Awarded at the Gyeonggi-do Provincial Skills Competition", imgs: ["image1/21G.png", "image1/22G.png"]}, // 사진 2장
            {t: "Prize Winner at the National Skills Competition (WorldSkills Korea, Gyeonggi-do Representative)", imgs: ["image1/21K.png", "image1/22K.png"]}, // 사진 2장
            {t: "Certificate of Completion: MasterCam & Sandvik Coromant Training", imgs: ["image1/Master_Cam.png", "image1/Sandvik_Coromant.png"]}  // 사진 2장
        ]
    },
    de: {
        title: "CNC-Frässpezialist\n(Preisträger beim Nationalen Berufswettbewerb WorldSkills Korea)",
        secAbout: "Über mich",
        aboutText: "Guten Tag, ich bin Baul Han, ein spezialisierter CNC-Fräser. \nAuf Grundlage meiner Erfolge bei nationalen Fertigkeitswettbewerben und praktischer Beruf서fahrung beherrsche ich den gesamten Fertigungsprozess eigenständig – von der Zeichnungsanalyse über CAM-Programmierung bis hin zur Werkzeugeinstellung und Prozessoptimierung. Derzeit befinde ich mich im Anerkennungsverfahren zur Fachkraft für Metalltechnik (FR Zerspanungstechnik) bei der IHK-FOSA.",
        secSkills: "Kernkompetenzen",
        skills: [
            {title: "CNC-Bearbeitung", desc: "Präzises Rüsten und Bedienen von 3-Achsen-Fräsmaschinen."},
            {title: "CAM-Programmierung", desc: "Bahnplanung und G-Code-Optimierung mit Mastercam."},
            {title: "HSC-Bearbeitung", desc: "Optimierung von Taktzeiten durch Dynamic Milling-Verfahren."},
            {title: "Qualitätssicherung", desc: "Maßhaltigkeit (±0.01mm) mit Mikrometer und 2D-Messgeräten."},
            {title: "Werkstoffexpertise", desc: "Erfahrung mit S45C, AL6061, Edelstahl und Bakelit."},
            {title: "Nachgewiesene Expertise", desc: "Erfolge bei regionalen und nationalen Wettbewerben."}
        ],
        secExp: "Berufserfahrung & Ausbildung",
        secAwards: "Auszeichnungen & Zertifikate",
        secGallery: "Fertigungsportfolio",
        secContact: "Kontakt & Lebenslauf",
        cv: "Lebenslauf herunterladen (PDF)",
        timeline: [
            {date: "07.2024 - 03.2026", title: "Luftwaffe der Republik Korea", desc: "Auszubildender in der Flugzeugwartung (FOD/BAT)"},
            {date: "08.2023 - 11.2023", title: "YGT", desc: "Fräsen von Halbleiter-Vorrichtungen"},
            {date: "04.2023 - 07.2023", title: "GcodeTech", desc: "Medizintechnik & Roboterkomponenten"},
            {date: "03.2020 - 12.2022", title: "Suwon Technical High School", desc: "Abschluss Smart Machinery"}
        ],
        awards: [
            {t: "Staatliche technische Zertifikate (HRDK)", imgs: ["image1/Licence.png"]}, // 사진 2장
            {t: "Auszeichnungen: Regionaler Berufswettbewerb Gyeonggi-do", imgs: ["image1/21G.png", "image1/22G.png"]}, // 사진 2장
            {t: "Preisträger: Nationaler Berufswettbewerb (WorldSkills Korea Representative)", imgs: ["image1/21K.png", "image1/22K.png"]}, // 사진 2장
            {t: "Zertifikate: Mastercam & Sandvik Coromant Fortbildung", imgs: ["image1/Master_Cam.png", "image1/Sandvik_Coromant.png"]}  // 사진 2장
        ]
    }
};

let currentLang = 'de'; // 현재 선택된 언어 추적
let activeAwardImgs = []; // 현재 팝업에 표시될 이미지 배열
let currentPhotoIdx = 0; // 현재 팝업 사진 인덱스

/* 언어 전환 함수 */
function changeLang(lang) {
    currentLang = lang;
    const data = content[lang];
    
    /* 텍스트 요소들 업데이트 */
    document.getElementById('hero-title').innerText = data.title;
    document.getElementById('sec-about').innerText = data.secAbout;
    document.getElementById('about-text').innerText = data.aboutText;
    document.getElementById('sec-exp').innerText = data.secExp;
    document.getElementById('sec-awards').innerText = data.secAwards;
    document.getElementById('sec-gallery').innerText = data.secGallery;
    document.getElementById('sec-contact').innerText = data.secContact;
    document.getElementById('btn-cv').innerText = data.cv;

    /* 핵심 역량 동적 생성 */
    if (document.getElementById('sec-skills')) {
        document.getElementById('sec-skills').innerText = data.secSkills;
        const skillsHTML = data.skills.map(s => `
            <div class="skill-item">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
        `).join('');
        document.getElementById('skills-list').innerHTML = skillsHTML;
    }

    /* 경력 타임라인 동적 생성 */
    const timelineHTML = data.timeline.map(item => `
        <div class="timeline-item">
            <div class="time">${item.date}</div>
            <div class="content">
                <strong style="color:#1a2a6c; font-size:1.1rem;">${item.title}</strong><br>
                <span style="font-size:0.95rem; color:#555;">${item.desc}</span>
            </div>
        </div>
    `).join('');
    document.getElementById('timeline-list').innerHTML = timelineHTML;

    /* 수상내역 카드 생성 (클릭 시 인덱스 전달) */
    const awardsHTML = data.awards.map((a, i) => `
        <div class="card" onclick="openAwardModal(${i})">
            <p style="font-weight:bold; font-size:0.9rem; margin-bottom:5px;">${a.t}</p>
            <small style="color:#f2a900; font-weight:bold;">Click to view <i class="fas fa-search-plus"></i></small>
        </div>
    `).join('');
    document.getElementById('awards-grid').innerHTML = awardsHTML;
}

/* 수상내역 모달 팝업 열기 */
function openAwardModal(idx) {
    const award = content[currentLang].awards[idx];
    activeAwardImgs = award.imgs; // 해당 카드의 이미지 배열 할당
    currentPhotoIdx = 0; // 첫 번째 사진부터 시작
    
    document.getElementById('modal-text').innerText = award.t; // 제목 표시
    updateModalImg(); // 사진 표시 함수 호출
    document.getElementById('modal').style.display = 'flex'; // 팝업창 띄우기
}

/* 팝업 내 사진 업데이트 함수 */
function updateModalImg() {
    const imgTag = document.getElementById('modal-img');
    const idxTag = document.getElementById('photo-index');
    imgTag.src = activeAwardImgs[currentPhotoIdx]; // 사진 주소 변경
    idxTag.innerText = `${currentPhotoIdx + 1} / ${activeAwardImgs.length}`; // "1 / 2" 형태로 표시
}

/* 팝업 내 사진 넘기기 (이전/다음) */
function moveAwardPhoto(step) {
    currentPhotoIdx += step;
    /* 배열 범위를 벗어나지 않게 순환 처리 */
    if (currentPhotoIdx >= activeAwardImgs.length) currentPhotoIdx = 0;
    if (currentPhotoIdx < 0) currentPhotoIdx = activeAwardImgs.length - 1;
    updateModalImg();
}

/* 모달 닫기 함수 */
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

/* 포트폴리오 슬라이더 기능 */
let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if(index >= totalSlides) currentSlide = 0;
    else if(index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    
    const slider = document.getElementById('main-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    const slideNumber = document.getElementById('slide-number');
    if (slideNumber) {
        slideNumber.innerText = `${currentSlide + 1} / ${totalSlides}`;
    }
}
function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

/* 페이지 최초 로드 시 실행 */
changeLang('de');
