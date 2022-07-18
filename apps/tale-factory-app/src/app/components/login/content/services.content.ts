interface Content {
    headline: string;
    description: string;
    icon: string;
}

const SERVICES: Content[] = [
    //Content template:
    //{
    //         headline: "",
    //         description: "",
    //         icon: "",
    //     },
    {
        headline: 'Free Future Updates',
        description: 'We are constantly improving our software.',
        icon: 'pi pi-sync',
    },
    {
        headline: 'Tons of tools',
        description: 'Various functions and tools out of the box.',
        icon: 'pi pi-inbox',
    },
    {
        headline: 'Cloud storage',
        description: 'A Backup to the cloud is possible.',
        icon: 'pi pi-database',
    },
];

export { SERVICES, Content };
