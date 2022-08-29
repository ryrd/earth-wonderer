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
            'q6lb0vT1bkA',
            '69xo9jAyxdI',
            'v7PWME_xW_s',
            'ybviRz7xVAM'
        ]
    },
    {
        id : 'ktb',
        name : 'Kotabaru',
        location : 'South Borneo, Indonesia',
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vero similique corporis quisquam. Optio eius deserunt, aspernatur dolorem blanditiis dicta sint? Nobis praesentium, nisi autem porro molestias eveniet enim quae!',
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
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vero similique corporis quisquam. Optio eius deserunt, aspernatur dolorem blanditiis dicta sint? Nobis praesentium, nisi autem porro molestias eveniet enim quae!',
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
        location : 'Portugal',
        video : '6VQrr6ahkgM',
        videoOwner : 'JoshStrauss',
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vero similique corporis quisquam. Optio eius deserunt, aspernatur dolorem blanditiis dicta sint? Nobis praesentium, nisi autem porro molestias eveniet enim quae!',
        mapLink : '!1m18!1m12!1m3!1d2977994.1251180214!2d-18.80528583182342!3d31.56432785189477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc5fe9a0f8f92eef%3A0xc77e56774ba5e6f!2sMadeira%2C%20Portugal!5e1!3m2!1sen!2sid!4v1661568640966!5m2!1sen!2sid',
        mainPhoto : 'd4pCGPsFz8A',
        photos : [
            'd4pCGPsFz8A',
            '8UE0g36ZCrI',
            '_kdKNKFt7tg',
            'L9tg8kRyp5k',
            'r5H-jtbG5QQ',
            'BxebGnPMYCE',
            'Foel5pzLARQ',
            'GqgAzGh2K34',
            'nwiUrsVw7JE',
            'C8e3LGjg3fc',
            'LAWOhlHaYvg'
        ]
    },
    {
        id : 'uyuni',
        name : 'Salar De Uyuni',
        location : 'Bolivia',
        video : '5dBl0pC2Gqk',
        videoOwner : 'Yasushi Tanikado',
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vero similique corporis quisquam. Optio eius deserunt, aspernatur dolorem blanditiis dicta sint? Nobis praesentium, nisi autem porro molestias eveniet enim quae!',
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
            'SIoHky3TPeo',
            'L18akQEC84A'
        ]
    },
];

export default DATA;