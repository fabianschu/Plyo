const statusIcons = [
    '/sent.png',
    '/conversation.png',
    '/challenge.png',
    '/nope.png'
]

const applications = [
    {
        id: 1,
        company: 'fromAtoB',
        position: 'Junior NodeJS Engineer Officer Manager',
        status: 'pending',
        stage: ['applied'],
        applicationDate: 8,
        scheduledDate: null,
        lastUpdate: 6
    },
    {
        id: 2,
        company: 'Ebay',
        position: 'Junior Frontend Developer',
        status: 'scheduled',
        stage: ['applied', 'challenge'],
        applicationDate: 42,
        scheduledDate: '20-02-2020 17:00',
        lastUpdate: 29
    },
    {
        id: 3,
        company: 'Everestate',
        position: 'Software Engineer',
        status: 'pending',
        stage: ['applied', 'interview', 'interview'],
        applicationDate: 29,
        scheduledDate: '16-02-2020 10:00',
        lastUpdate: 15
    },
    {
        id: 4,
        company: 'Wunderflats',
        position: 'Junior Frontend Developer',
        status: 'rejected',
        stage: ['applied', 'rejected'],
        applicationDate: 23,
        scheduledDate: null,
        lastUpdate: 18
    },
    {
        id: 5,
        company: 'Dampsoft Athena',
        position: 'Junior Frontend Developer',
        status: 'scheduled',
        stage: ['applied', 'interview', 'challenge', 'interview'],
        applicationDate: 35,
        scheduledDate: '13-02-2020 17:00',
        lastUpdate: 26
    },
    {
        id: 6,
        company: 'Parloa',
        position: 'Software Engineer',
        status: 'pending',
        stage: ['interview'],
        applicationDate: 29,
        scheduledDate: '29-02-2020 10:00',
        lastUpdate: 28
    },
    {
        id: 7,
        company: 'Pizzabäcker',
        position: 'Junior Pizzaiolo',
        status: 'rejected',
        stage: ['applied', 'rejected'],
        applicationDate: 12,
        scheduledDate: null,
        lastUpdate: 41
    },
    {
        id: 8,
        company: 'Affen AG',
        position: 'Junior Frontend Developer',
        status: 'scheduled',
        stage: ['applied', 'interview', 'challenge'],
        applicationDate: 17,
        scheduledDate: '13-02-2020 17:00',
        lastUpdate: 34
    },
    {
        id: 9,
        company: 'Cacahuec Firma',
        position: 'Software Engineer',
        status: 'pending',
        stage: ['applied', 'interview'],
        applicationDate: 29,
        scheduledDate: '29-02-2020 10:00',
        lastUpdate: 3
    },
    {
        id: 10,
        company: 'Whatever & Co',
        position: 'Junior Pizzaiolo',
        status: 'rejected',
        stage: ['applied', 'rejected'],
        applicationDate: 12,
        scheduledDate: null,
        lastUpdate: 11
    }
]

export {applications, statusIcons};