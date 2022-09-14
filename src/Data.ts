interface data {
    id: string;
    name: string;
    location: string;
    desc: string;
    video: string;
    videoOwner: string;
    mapLink: string;
    mainPhoto: string;
    photos: string[];
    longText? : 'long' | 'medium';
};

const DATA: data[] = [
    {
        id : 'bjm',
        name : 'Banjarmasin',
        location : 'South Borneo, Indonesia',
        desc : 'Banjarmasin is a city in South Kalimantan, Indonesia. It was the capital of the province until 15 February 2022. The city is located on a delta island near the junction of the Barito and Martapura rivers. Historically the centre of the Banjarese culture and the capital of the Sultanate of Banjar, it is the biggest city in South Kalimantan and one of main cities of Kalimantan.',
        video : 'lNkI8ayV1jk',
        videoOwner : 'ryrd',
        mapLink : '!1m18!1m12!1m3!1d83513.20433437338!2d114.55337990290536!3d-3.3150610720137084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4209aa1eec961%3A0x26030bfcc09204d2!2sBanjarmasin%2C%20Banjarmasin%20City%2C%20South%20Kalimantan!5e1!3m2!1sen!2sid!4v1661568593815!5m2!1sen!2sid',
        mainPhoto : '/destinations/bjm.webp',
        photos : [
            '/destinations/bjm.webp',
            'https://source.unsplash.com/O0Xw3c191Sw',
            'https://source.unsplash.com/yHnz8bfgrGw',
            'https://source.unsplash.com/MP4VMiK7zsQ',
            'https://source.unsplash.com/QmK0YATGJJo',
            'https://source.unsplash.com/PCbyhyqrGAw',
            'https://source.unsplash.com/zUpyq41hYmU',
            'https://source.unsplash.com/IQoCkrNq5po',
            'https://source.unsplash.com/v7PWME_xW_s',
            'https://source.unsplash.com/ybviRz7xVAM'
        ]
    },
    {
        id : 'ktb',
        name : 'Kotabaru',
        location : 'South Borneo, Indonesia',
        desc : 'Kotabaru Regency is one of the eleven regencies in the Indonesian province of South Kalimantan. It consists of two parts, the smaller but more populated part comprises Laut Island, the largest island off the coast of Kalimantan, together with the smaller Sebuku Island off Laut Island\'s east coast and even smaller islands nearby',
        video : '6KARz7weDfE',
        videoOwner : 'ryrd',
        mapLink : '!1m18!1m12!1m3!1d1744233.8596654863!2d114.90834875968216!3d-3.5251777948728877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de8b80d5947cf2b%3A0xb38304e5bf4399fe!2sKotabaru%20Regency%2C%20South%20Kalimantan!5e1!3m2!1sen!2sid!4v1661568550507!5m2!1sen!2sid',
        mainPhoto : '/destinations/ktb.webp',
        photos : [
            '/destinations/ktb.webp',
            'https://source.unsplash.com/YRHgIxPmB1g',
            'https://source.unsplash.com/wlul_CIYsEk',
            'https://source.unsplash.com/lS1M7GFBAiU',
            'https://source.unsplash.com/_FmnE3kM6Lw',
            'https://source.unsplash.com/YawqefPKIKE',
            'https://source.unsplash.com/MVRwkg3K2JM',
            'https://source.unsplash.com/yw1QVKkTbCs',
            'https://source.unsplash.com/kcg-e5wj_SI',
            'https://source.unsplash.com/GdnTmarLzqw',
            'https://source.unsplash.com/UFeW0nC-fiI',
            'https://source.unsplash.com/tym90q1j6eg',
            'https://source.unsplash.com/7BX-Spuwsj8',
        ]
    },
    {
        id : 'reunion',
        name : 'Reunion',
        location : 'Indian Ocean',
        video : 'vpvmhpzGi_Q?start=124&end=163',
        videoOwner : 'Mikevisuals',
        desc : 'Réunion is an island in the Indian Ocean that is an overseas department and region of France. It is located approximately 950 km east of the island of Madagascar and 175 km southwest of the island of Mauritius.',
        mapLink : '!1m18!1m12!1m3!1d407498.8057801068!2d55.247106240816166!3d-21.134471506963234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2178778110b8e43b%3A0x4a7f8e89ecdbeaf9!2zUsOpdW5pb24!5e1!3m2!1sen!2sid!4v1661569633725!5m2!1sen!2sid',
        mainPhoto : '/destinations/reunion.webp',
        photos : [
            '/destinations/reunion.webp',
            'https://source.unsplash.com/sql5H1i_7Fo',
            'https://source.unsplash.com/CZUYQ0HeQtw',
            'https://source.unsplash.com/JhdWve4dA_g',
            'https://source.unsplash.com/Ta65aCJ2NeE',
            'https://source.unsplash.com/jUlANrPHzAA',
            'https://source.unsplash.com/58vqS8ul5cw',
            'https://source.unsplash.com/YJEpFxBmNho',
            'https://source.unsplash.com/3CBAY14swMo',
            'https://source.unsplash.com/03BlWOo9rq8',
            'https://source.unsplash.com/Du2CTKPWEFs',
            'https://source.unsplash.com/bpWcVQY9O5c',
            'https://source.unsplash.com/VJlLx10OYRo'
        ]
    },
    {
        id : 'madeira',
        name : 'Madeira',
        location : 'Atlantic Ocean',
        video : '6VQrr6ahkgM',
        videoOwner : 'JoshStrauss',
        desc : 'Madeira Island, which are part of Portugal, are an archipelago of small islands located in the Atlantic Ocean about 350 miles from Morocco. With incredible mountains that rises above the clouds, natural pools carved out of lava rocks, gorgeous cliffs overlooking the ocean, and charming towns.',
        mapLink : '!1m18!1m12!1m3!1d2977994.1251180214!2d-18.80528583182342!3d31.56432785189477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc5fe9a0f8f92eef%3A0xc77e56774ba5e6f!2sMadeira%2C%20Portugal!5e1!3m2!1sen!2sid!4v1661568640966!5m2!1sen!2sid',
        mainPhoto : '/destinations/madeira.webp',
        photos : [
            '/destinations/madeira.webp',
            'https://source.unsplash.com/G8WoP53E67E',
            'https://source.unsplash.com/_kdKNKFt7tg',
            'https://source.unsplash.com/8UE0g36ZCrI',
            'https://source.unsplash.com/L9tg8kRyp5k',
            'https://source.unsplash.com/r5H-jtbG5QQ',
            'https://source.unsplash.com/Foel5pzLARQ',
            'https://source.unsplash.com/GqgAzGh2K34',
            'https://source.unsplash.com/nwiUrsVw7JE',
            'https://source.unsplash.com/C8e3LGjg3fc',
            'https://source.unsplash.com/LAWOhlHaYvg',
            'https://source.unsplash.com/BxebGnPMYCE'
        ]
    },
    {
        id : 'uyuni',
        name : 'Salar De Uyuni',
        location : 'Bolivia',
        video : '5dBl0pC2Gqk',
        videoOwner : 'Yasushi Tanikado',
        desc : 'Salar de Uyuni is the world\'s largest salt flat located in Bolivia, South America, at over 10,000 square kilometres in area. At times the salt flat is covered in very clear water, making it the largest natural mirror in the world.',
        mapLink : '!1m18!1m12!1m3!1d819988.5222068662!2d-68.15250962692474!3d-20.20735277402922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915584b325e18bd7%3A0xce4183a158278b6!2sUyuni%20Salt%20Flat!5e1!3m2!1sen!2sid!4v1661581444043!5m2!1sen!2sid',
        mainPhoto : '/destinations/uyuni.webp',
        photos : [
            '/destinations/uyuni.webp',
            'https://source.unsplash.com/jx0RS-AyW8g',
            'https://source.unsplash.com/7JpvIlWm5vo',
            'https://source.unsplash.com/t2CUAY1J2gQ',
            'https://source.unsplash.com/zw6b75g24Q0',
            'https://source.unsplash.com/PuOohuhDu9Q',
            'https://source.unsplash.com/YCux0M4NktI',
            'https://source.unsplash.com/l9AjfGL_Sr0',
            'https://source.unsplash.com/7BG3z3N6zAI',
            'https://source.unsplash.com/wcIrrQXWkTA',
            'https://source.unsplash.com/L18akQEC84A'
        ],
        longText: 'long'
    },
    {
        id : 'alpesiusi',
        name : 'alpe di siusi',
        location : 'Dolomites, Italy',
        video : 't7QrNnSkjGE?start=1&end=54',
        videoOwner : 'James Matthews',
        desc : 'Alpe di Siusi is the largest high altitude alpine meadow in Europe. It\'s plateau up on the Dolomite mountains. This vast pasture is surrounded by the Dolomite mountains making it very unique and incredibly beautiful.',
        mapLink : '!1m18!1m12!1m3!1d150248.72659740466!2d11.456744944813513!3d46.542365708433515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477814ceb86428af%3A0x9418f3637defc23b!2sSeiser%20Alm!5e1!3m2!1sen!2sid!4v1661839457197!5m2!1sen!2sid',
        mainPhoto : '/destinations/siusi.webp',
        photos : [
            '/destinations/siusi.webp',
            'https://source.unsplash.com/PoKDG7JKGaQ',
            'https://source.unsplash.com/9-wA9ZAIut8',
            'https://source.unsplash.com/yj0BKllXEu0',
            'https://source.unsplash.com/NaMEEhPFuHg',
            'https://source.unsplash.com/XwAh7qef_v0',
            'https://source.unsplash.com/PPxXBRp71dI',
            'https://source.unsplash.com/vzkJYHVPywE',
        ],
        longText: 'medium'
    },
    
    {
        id : 'sumba',
        name : 'sumba',
        location : 'East Nusa Tenggara, Indonesia',
        video : 'NkQF5CLdqow?start=595',
        videoOwner : 'Sam Kolder',
        desc : 'Sumba Island is one of the exotic paradises in eastern Indonesia. The vast expanse of savanna, lined limestone hills, and the natural splendor that is so beautiful blends perfectly with the local wisdom of the people who are so special. The majority of the villages on this island are built on hilltops with houses that still carry the traditional concept of thatched roofs.',
        mapLink : '!1m18!1m12!1m3!1d848060.077101992!2d119.37181612289284!3d-9.656465555717839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b76a8ac72fac5%3A0x130ac8fedf3977f!2sSumba!5e1!3m2!1sen!2sid!4v1661842235961!5m2!1sen!2sid',
        mainPhoto : '/destinations/sumba.webp',
        photos : [
            '/destinations/sumba.webp',
            'https://source.unsplash.com/SB0rxbS823g',
            'https://source.unsplash.com/mEjYP1sZ_vk',
            'https://source.unsplash.com/wv4nXf_UVPI',
            'https://source.unsplash.com/N4CCcUTQ-k4',
            'https://source.unsplash.com/06A7LLF_mdY',
            'https://source.unsplash.com/XEzcNAczfZ0',
            'https://source.unsplash.com/y3yUwNn6GeI',
            'https://source.unsplash.com/KaDkse1Y59g',
            'https://source.unsplash.com/bn7mq83_jeU',
            'https://source.unsplash.com/Vm-rP7n8-i0',
            'https://source.unsplash.com/wzkWlTn_aCA',
        ]
    },
    {
        id : 'maunakea',
        name : 'mauna kea',
        location : 'Hawai\'i',
        video : 'x2kyHTDOMnM',
        videoOwner : 'Moe Elsayed',
        desc : 'Mauna Kea is a dormant volcano on the island of Hawai\'i. Its peak is 4,207.3m above sea level, making it the highest point in the state of Hawai\'i and second-highest peak of an island on Earth. With its high elevation, dry environment, and stable airflow, Mauna Kea\'s summit is one of the best sites in the world for astronomical observation.',
        mapLink : '!1m18!1m12!1m3!1d12843.858820588708!2d-155.47684837913468!3d19.82063012324505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7953bd819bc89e11%3A0xf9159b9c95991c20!2sMauna%20Kea!5e1!3m2!1sen!2sid!4v1661840067129!5m2!1sen!2sid',
        mainPhoto : '/destinations/kea.webp',
        photos : [
            '/destinations/kea.webp',
            'https://source.unsplash.com/https://source.unsplash.com/JWyxM71pvT0',
            'https://source.unsplash.com/https://source.unsplash.com/JQNkspNUP3k',
            'https://source.unsplash.com/https://source.unsplash.com/PckZG1cC1EE',
            'https://source.unsplash.com/https://source.unsplash.com/2CVUXD_O-Fc',
            'https://source.unsplash.com/https://source.unsplash.com/uftqFbfWGFY',
            'https://source.unsplash.com/https://source.unsplash.com/QqpQ2lU5-sE',
            'https://source.unsplash.com/https://source.unsplash.com/nxLXZqY46eA',
            'https://source.unsplash.com/https://source.unsplash.com/J7GzExD52Go',
            'https://source.unsplash.com/https://source.unsplash.com/tZKgMf9vJkw',
            'https://source.unsplash.com/https://source.unsplash.com/bEX9z0Y4ZAI',
        ]
    },
    {
        id : 'valdorcia',
        name : 'Val d\'Orcia',
        location : 'Tuscany, Italy',
        video : 'CsGg3CwhKPU',
        videoOwner : 'Gabri',
        desc : 'Val d\'Orcia is a land of rare beauty where human activity and nature perfectly blend to give life to a landscape designed in the Renaissance to represent the ideal of beauty. For these reasons Val d\'Orcia was recognized in 2004 as a UNESCO World Heritage Site.',
        mapLink : '!1m18!1m12!1m3!1d1270730.329943726!2d9.907819956261573!3d43.35170103355875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sTuscany%2C%20Italy!5e1!3m2!1sen!2sid!4v1662618970772!5m2!1sen!2sid',
        mainPhoto : '/destinations/orcia.webp',
        photos : [
            '/destinations/orcia.webp',
            'https://source.unsplash.com/mZ4RmsyCGDg',
            'https://source.unsplash.com/36PWbok7F1s',
            'https://source.unsplash.com/qVuF_thaFMY',
            'https://source.unsplash.com/fJWYwHWYQpY',
            'https://source.unsplash.com/bvz1rW9EgK0',
            'https://source.unsplash.com/2Z-nRpQLB5I',
            'https://source.unsplash.com/qmZGvH6wDwQ',
            'https://source.unsplash.com/Mi0Ut6GnS5U',
            'https://source.unsplash.com/CdxSsrYivGc',
            'https://source.unsplash.com/DSdT9jXS05A',
            'https://source.unsplash.com/5PWIygqZgcg',
            'https://source.unsplash.com/_pRSUAZu9gM',
            'https://source.unsplash.com/y3Jv0xKSzkI',
            'https://source.unsplash.com/4RBdHF3iKAI',
            'https://source.unsplash.com/ihz1_e2Mvog',
            'https://source.unsplash.com/zQEuJjQo-cY',
            'https://source.unsplash.com/ETN1HRiZag8'
        ],
        longText: 'medium',
    },
];

export default DATA;
