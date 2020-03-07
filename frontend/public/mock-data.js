const statusIcons = [
    '/sent.png',
    '/conversation.png',
    '/challenge.png',
    '/nope.png'
]

const applications = [
    {
        id: 1,
        city: 'Berlin',
        company: 'fromAtoB',
        position: 'Junior NodeJS Engineer Officer Manager',
        status: 'pending',
        stage: ['applied'],
        applicationDate: 8,
        scheduledDate: null,
        lastUpdate: 6,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 2,
        city: 'Berlin',
        company: 'Ebay',
        position: 'Junior Frontend Developer',
        status: 'scheduled',
        stage: ['applied', 'challenge'],
        applicationDate: 42,
        scheduledDate: '20-02-2020 17:00',
        lastUpdate: 29,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 3,
        city: 'Berlin',
        company: 'Everestate',
        position: 'Software Engineer',
        status: 'pending',
        stage: ['applied', 'interview', 'interview'],
        applicationDate: 29,
        scheduledDate: '16-02-2020 10:00',
        lastUpdate: 15,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 4,
        city: 'Berlin',
        company: 'Wunderflats',
        position: 'Junior Frontend Developer',
        status: 'rejected',
        stage: ['applied', 'rejected'],
        applicationDate: 23,
        scheduledDate: null,
        lastUpdate: 18,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },


    {
        id: 5,
        city: 'Berlin',
        company: 'Dampsoft Athena',
        position: 'Junior Frontend Developer',
        status: 'scheduled',
        stage: ['applied', 'interview', 'challenge', 'interview'],
        stage2: [{ event: 'applied', date: '20-01-2019' }, { event: 'interview', date: '04-02-2019' }, { event: 'rejected', date: '27-01-2019' }],
        applicationDate: 35,
        scheduledDate: '13-02-2020 17:00',
        lastUpdate: 26,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },


    {
        id: 6,
        city: 'Berlin',
        company: 'Parloa',
        position: 'Software Engineer',
        status: 'pending',
        stage: ['interview'],
        applicationDate: 29,
        scheduledDate: '29-02-2020 10:00',
        lastUpdate: 28,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 7,
        city: 'Berlin',
        company: 'Pizzabäcker',
        position: 'Junior Pizzaiolo',
        status: 'rejected',
        stage: ['applied', 'rejected'],
        applicationDate: 12,
        scheduledDate: null,
        lastUpdate: 41,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 8,
        city: 'Berlin',
        company: 'Affen AG',
        position: 'Junior Frontend Developer',
        status: 'scheduled',
        stage: ['applied', 'interview', 'challenge'],
        applicationDate: 17,
        scheduledDate: '13-02-2020 17:00',
        lastUpdate: 34,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 9,
        city: 'Berlin',
        company: 'Cacahuec Firma',
        position: 'Software Engineer',
        status: 'pending',
        stage: ['applied', 'interview'],
        applicationDate: 29,
        scheduledDate: '29-02-2020 10:00',
        lastUpdate: 3,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    },
    {
        id: 10,
        city: 'Berlin',
        company: 'Whatever & Co',
        position: 'Junior Pizzaiolo',
        status: 'rejected',
        stage: ['applied', 'rejected'],
        applicationDate: 12,
        scheduledDate: null,
        lastUpdate: 11,
        link: 'https://berlinstartupjobs.com/de/engineering/full-stack-developer-m-industrie-deutschland-gmbh/',
        contactPerson: 'Steve Jobs'
    }
]

export {applications, statusIcons};

//,{ event: 'interview', date: '27-01-2019' }, { event: 'interview', date: '04-02-2019' }