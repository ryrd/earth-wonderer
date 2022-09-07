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
    longText? : boolean;
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
        mainPhoto : '6k8Bs2VPqvU',
        photos : [
            '6k8Bs2VPqvU',
            'O0Xw3c191Sw',
            'yHnz8bfgrGw',
            'MP4VMiK7zsQ',
            'QmK0YATGJJo',
            'PCbyhyqrGAw',
            'zUpyq41hYmU',
            'IQoCkrNq5po',
            'v7PWME_xW_s',
            'ybviRz7xVAM'
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
        mainPhoto : 'gTI7pxcOKJw',
        photos : [
            'gTI7pxcOKJw',
            'YRHgIxPmB1g',
            'wlul_CIYsEk',
            'lS1M7GFBAiU',
            '_FmnE3kM6Lw',
            'YawqefPKIKE',
            'MVRwkg3K2JM',
            'yw1QVKkTbCs',
            'kcg-e5wj_SI',
            'GdnTmarLzqw',
            'UFeW0nC-fiI',
            'tym90q1j6eg',
            '7BX-Spuwsj8',
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
        mainPhoto : 'gEZWZrP4oZw',
        photos : [
            'gEZWZrP4oZw',
            'sql5H1i_7Fo',
            'CZUYQ0HeQtw',
            'JhdWve4dA_g',
            'Ta65aCJ2NeE',
            'jUlANrPHzAA',
            '58vqS8ul5cw',
            'YJEpFxBmNho',
            '3CBAY14swMo',
            '03BlWOo9rq8',
            'Du2CTKPWEFs',
            'bpWcVQY9O5c',
            'VJlLx10OYRo'
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
        mainPhoto : 'd4pCGPsFz8A',
        photos : [
            'd4pCGPsFz8A',
            'G8WoP53E67E',
            '_kdKNKFt7tg',
            '8UE0g36ZCrI',
            'L9tg8kRyp5k',
            'r5H-jtbG5QQ',
            'Foel5pzLARQ',
            'GqgAzGh2K34',
            'nwiUrsVw7JE',
            'C8e3LGjg3fc',
            'LAWOhlHaYvg',
            'BxebGnPMYCE'
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
        mainPhoto : 'zjuivMSdY-Y',
        photos : [
            'jx0RS-AyW8g',
            '7JpvIlWm5vo',
            't2CUAY1J2gQ',
            'zw6b75g24Q0',
            'PuOohuhDu9Q',
            'YCux0M4NktI',
            'l9AjfGL_Sr0',
            '7BG3z3N6zAI',
            'wcIrrQXWkTA',
            'L18akQEC84A'
        ],
        longText: true
    },
    {
        id : 'alpesiusi',
        name : 'alpe di siusi',
        location : 'Dolomites, Italy',
        video : 't7QrNnSkjGE?start=1&end=54',
        videoOwner : 'James Matthews',
        desc : 'Alpe di Siusi is the largest high altitude alpine meadow in Europe. It\'s plateau up on the Dolomite mountains. This vast pasture is surrounded by the Dolomite mountains making it very unique and incredibly beautiful.',
        mapLink : '!1m18!1m12!1m3!1d150248.72659740466!2d11.456744944813513!3d46.542365708433515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477814ceb86428af%3A0x9418f3637defc23b!2sSeiser%20Alm!5e1!3m2!1sen!2sid!4v1661839457197!5m2!1sen!2sid',
        mainPhoto : 't8oHssN7Zc0',
        photos : [
            't8oHssN7Zc0',
            'PoKDG7JKGaQ',
            '9-wA9ZAIut8',
            'yj0BKllXEu0',
            'NaMEEhPFuHg',
            'XwAh7qef_v0',
            'PPxXBRp71dI',
            'vzkJYHVPywE',
        ],
        longText: true
    },
    
    {
        id : 'sumba',
        name : 'sumba',
        location : 'East Nusa Tenggara, Indonesia',
        video : 'NkQF5CLdqow?start=595',
        videoOwner : 'Sam Kolder',
        desc : 'Sumba Island is one of the exotic paradises in eastern Indonesia. The vast expanse of savanna, lined limestone hills, and the natural splendor that is so beautiful blends perfectly with the local wisdom of the people who are so special. The majority of the villages on this island are built on hilltops with houses that still carry the traditional concept of thatched roofs.',
        mapLink : '!1m18!1m12!1m3!1d848060.077101992!2d119.37181612289284!3d-9.656465555717839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b76a8ac72fac5%3A0x130ac8fedf3977f!2sSumba!5e1!3m2!1sen!2sid!4v1661842235961!5m2!1sen!2sid',
        mainPhoto : 'hYFt6InTIKE',
        photos : [
            'hYFt6InTIKE',
            'SB0rxbS823g',
            'mEjYP1sZ_vk',
            'wv4nXf_UVPI',
            'N4CCcUTQ-k4',
            '06A7LLF_mdY',
            'XEzcNAczfZ0',
            'y3yUwNn6GeI',
            'KaDkse1Y59g',
            'bn7mq83_jeU',
            'Vm-rP7n8-i0',
            'wzkWlTn_aCA',
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
        mainPhoto : 'pMqlzXuevkI',
        photos : [
            'JWyxM71pvT0',
            'JQNkspNUP3k',
            'PckZG1cC1EE',
            '2CVUXD_O-Fc',
            'uftqFbfWGFY',
            'QqpQ2lU5-sE',
            'nxLXZqY46eA',
            'pMqlzXuevkI',
            'J7GzExD52Go',
            'tZKgMf9vJkw',
            'bEX9z0Y4ZAI',
        ]
    },
    {
        id : 'valdorcia',
        name : 'Val d\'Orcia',
        location : 'Tuscany, Italy',
        video : 'CsGg3CwhKPU',
        videoOwner : 'Gabri',
        desc : 'Val d\'Orcia is a land of rare beauty where human activity and nature perfectly blend to give life to a landscape designed in the Renaissance to represent the ideal of beauty. For these reasons Val d\'Orcia was recognized in 2004 as a UNESCO World Heritage Site.',
        mapLink : '1m14!1m8!1m3!1d367393.47257373005!2d10.96818746310134!3d42.88222560856891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1329656fde588139%3A0xa595909f109ecf75!2sCipressi%20di%20San%20Quirico%20d&#39;Orcia!5e1!3m2!1sen!2sid!4v1662569374206!5m2!1sen!2sid',
        mainPhoto : 'r9RW20TrQ0Y',
        photos : [
            'r9RW20TrQ0Y',
            'mZ4RmsyCGDg',
            '36PWbok7F1s',
            'qVuF_thaFMY',
            'fJWYwHWYQpY',
            'bvz1rW9EgK0',
            '2Z-nRpQLB5I',
            'qmZGvH6wDwQ',
            'Mi0Ut6GnS5U',
            'CdxSsrYivGc',
            'DSdT9jXS05A',
            '5PWIygqZgcg',
            '_pRSUAZu9gM',
            'y3Jv0xKSzkI',
            '4RBdHF3iKAI',
            'ihz1_e2Mvog',
            'zQEuJjQo-cY',
            'ETN1HRiZag8'
        ],
        longText: true,
    },
];

export default DATA;
