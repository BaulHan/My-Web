const content = {
    ko: {
        title: "CNC 밀링 가공 기술자",
        secAbout: "자기소개",
        aboutText: "안녕하세요, 정밀 가공의 가치를 믿는 CNC 기술자 한바울입니다. \n도면 해독부터 캠 프로그래밍, 기계 및 공구 세팅, 가공 전 공정을 단독으로 수행할 수 있는 숙련도를 갖추고 있습니다. 기능경기대회 수상 이력과 국가기술자격, 그리고 실무 경험을 바탕으로 독일의 선진 제조 현장에 기여하고 싶습니다.",
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
        awards: [
            // 국가기술자격 (2개)
            {t: "컴퓨터응용가공 산업기사", img: "cert_industrial.jpg"},
            {t: "컴퓨터응용밀링 기능사", img: "cert_milling.jpg"},
            // 수상 내역 (4개)
            {t: "2022 경기도 지방기능경기대회 은메달", img: "image1/22G.png"},
            {t: "2021 경기도 지방기능경기대회 동메달", img: "image1/21G.png"},
            {t: "제57회 전국기능경기대회 장려상", img: "image1/22K.png"},
            {t: "제56회 전국기능경기대회 장려상", img: "image1/21K.png"},
            // 교육 수료 (2개) -> 총 8개로 짝수 정렬
            {t: "Mastercam 교육 이수증", img: "image1/Master_Cam.png"},
            {t: "Sandvik Coromant e-learning 수료증", img: "image1/Sandvik_Coromant.png"}
        ]
    },
    en: {
        title: "CNC Milling Technician",
        secAbout: "About Me",
        aboutText: "Hello, I am Baul Han, a dedicated CNC specialist passionate about precision manufacturing. \nI am proficient in the entire production process, including drawing interpretation, CAM programming, and machine setup. With professional certifications and high-precision industry experience, I am eager to bring my expertise to the German manufacturing sector.",
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
            {t: "Industrial Engineer Computer Aided Manufacturing", img: "cert_industrial.jpg"},
            {t: "Computer Aided Milling Craftsman", img: "cert_milling.jpg"},
            {t: "Silver Medal, Provincial Skills Competition (2022)", img: "image1/22G.png"},
            {t: "Bronze Medal, Provincial Skills Competition (2021)", img: "image1/21G.png"},
            {t: "Medallion for Excellence, National Skills (57th)", img: "image1/22K.png"},
            {t: "Medallion for Excellence, National Skills (56th)", img: "image1/21K.png"},
            {t: "Mastercam Training Certificate", img: "image1/Master_Cam.png"},
            {t: "Sandvik Coromant E-learning Certificate", img: "image1/Sandvik_Coromant.png"}
        ]
    },
    de: {
        title: "Zerspanungsmechaniker (Frästechnik)",
        secAbout: "Über mich",
        aboutText: "Guten Tag, ich bin Baul Han, ein leidenschaftlicher Zerspanungsmechaniker mit Fokus auf Präzision. \nIch beherrsche den gesamten Fertigungsprozess – von der Zeichnungslesung über die CAM-Programmierung bis hin zum Einrichten der Maschinen. Mit meinen staatlichen Zertifikaten und Erfahrungen aus Berufswettbewerben möchte ich mein Können in die deutsche Industrie einbringen.",
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
            {t: "Staatlich geprüfter Techniker (CNC-Fertigung)", img: "cert_industrial.jpg"},
            {t: "Gesellenbrief (Zerspanungsmechaniker-Fräsen)", img: "cert_milling.jpg"},
            {t: "Silbermedaille, Regionaler Wettbewerb (2022)", img: "image1/22G.png"},
            {t: "Bronzemedaille, Regionaler Wettbewerb (2021)", img: "image1/21G.png"},
            {t: "Diplom, Nationaler Berufswettbewerb (57.)", img: "image1/22K.png"},
            {t: "Diplom, Nationaler Berufswettbewerb (56.)", img: "image1/21K.png"},
            {t: "Mastercam Schulungszertifikat", img: "image1/Master_Cam.png"},
            {t: "Sandvik Coromant E-Learning-Zertifikat", img: "image1/Sandvik_Coromant.png"}
        ]
    }
};

function changeLang(lang) {
    const data = content[lang];
    document.getElementById('hero-title').innerText = data.title;
    document.getElementById('sec-about').innerText = data.secAbout;
    document.getElementById('about-text').innerText = data.aboutText;
    document.getElementById('sec-exp').innerText = data.secExp;
    document.getElementById('sec-awards').innerText = data.secAwards;
    document.getElementById('sec-gallery').innerText = data.secGallery;
    document.getElementById('sec-contact').innerText = data.secContact;
    document.getElementById('btn-cv').innerText = data.cv;

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

    const awardsHTML = data.awards.map(a => `
        <div class="card" onclick="openModal('${a.img}', '${a.t}')">
            <p style="font-weight:bold; font-size:0.9rem; margin-bottom:5px;">${a.t}</p>
            <small style="color:#f2a900; font-weight:bold;">Click to view <i class="fas fa-search-plus"></i></small>
        </div>
    `).join('');
    document.getElementById('awards-grid').innerHTML = awardsHTML;
}

function openModal(img, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-text').innerText = text;
    modal.style.display = 'flex';
}

let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if(index >= totalSlides) currentSlide = 0;
    else if(index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    document.getElementById('main-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    document.getElementById('slide-number').innerText = `${currentSlide + 1} / ${totalSlides}`;
}
function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

changeLang('de');
