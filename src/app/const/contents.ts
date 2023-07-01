export interface IContent {
    name: string;
    path: string
    subContents?: IContent[];
    count?: number;
}

export const CONTENTS: IContent[] = [
    {
        name: 'overview',
        path: 'queues',
        subContents: [
            {
                name: 'Subcontent 1-1',
                path: 'queue-sub1',
                subContents: [
                    { name: 'Subcontent 1-1-1', path: 'queue-sub1-1', },
                    { name: 'Subcontent 1-1-2', path: 'queue-sub1-2', }
                ]
            },
            { name: 'Subcontent 1-2', path: 'queue-sub2', }
        ]
    },
    {
        name: 'Examples',
        path: 'examples',
        subContents: [
            { name: 'Subcontent 2-1', path: 'examples-sub1', },
            { name: 'Subcontent 2-2', path: 'examples-sub2', },
            {
                name: 'Subcontent 2-3',
                path: 'examples-sub3',
                subContents: [
                    { name: 'Subcontent 2-3-1', path: 'examples-sub3-1', },
                    { name: 'Subcontent 2-3-2', path: 'examples-sub3-2', }
                ]
            }
        ]
    },
    { name: 'Learning', path: 'learning', }
];