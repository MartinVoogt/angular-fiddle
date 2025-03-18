import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ITodo } from './todo/ITodo';

export class MockData implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
        const todos: ITodo[] = [
            {
                id: 1,
                name: 'eius pectus abscido',
                description:
                    'Claudeo caterva animus tero viscus.\nCrepusculum tui velociter derideo.\nDefungo acceptus depraedor decens asporto crux curo subseco audeo collum.\nStipes adnuo agnosco.',
                createdAtDate: '2024-08-15',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 2,
                name: 'colligo magnam conqueror',
                description:
                    'Canto aggredior aurum subito.\nValens dolores deporto voluptate clam exercitationem animadverto ver comis.',
                createdAtDate: '2024-03-27',
                completedAtDate: '',
                priority: {
                    value: 'normal',
                    name: 'Normaal',
                },
            },
            {
                id: 3,
                name: 'conitor crux tendo',
                description:
                    'Ambulo ceno vesper.\nCeler quia caecus auctor solitudo desidero curriculum aliqua cum alias.\nToties ubi averto quas coepi.\nPaulatim nisi administratio decumbo amiculum vero sumptus comptus arto.\nVis quis varius caries ventus suasoria umerus.',
                createdAtDate: '2024-08-02',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 4,
                name: 'cui aut vulgo',
                description:
                    'Utique arbor sublime adinventitias valeo.\nValens tibi comitatus amaritudo crur certe.\nAbsum corrupti spoliatio.',
                createdAtDate: '2024-04-27',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 5,
                name: 'deorsum beatus utique',
                description:
                    'Tredecim casso vulpes soleo sulum sponte.\nDoloremque consequuntur curatio.\nCharisma capillus certus confido accendo adnuo viscus.',
                createdAtDate: '2024-09-15',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 6,
                name: 'tepidus pecus decretum',
                description:
                    'Somnus arcesso coniecto in aetas curvo arcesso coniecto.\nVer acervus talis quisquam currus patior ver.\nTabula accusamus cur turpis acceptus cras capitulus quae abundans patruus.\nClaudeo iure aspernatur subseco.\nAcerbitas ipsa acsi error avaritia xiphias.',
                createdAtDate: '2024-03-04',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 7,
                name: 'ubi debilito aut',
                description:
                    'Congregatio cunabula eaque urbanus.\nAdsuesco tergeo quas defetiscor trans.\nDicta cometes quo armarium absens triduana itaque.',
                createdAtDate: '2024-01-03',
                completedAtDate: '',
                priority: {
                    value: 'high',
                    name: 'Hoog',
                },
            },
            {
                id: 8,
                name: 'timidus suus asperiores',
                description:
                    'Adicio nihil turba sulum acerbitas sui praesentium turba vorax.\nAttonbitus ter vita fuga quis vociferor comes.',
                createdAtDate: '2024-08-08',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 9,
                name: 'valetudo accommodo aro',
                description:
                    'Excepturi averto demulceo taedium voro utilis acquiro cubitum vitiosus arbitro.\nAnimi arto acceptus villa.\nTricesimus creta minima vigilo voluptas utilis torrens damno vulnus centum.\nConitor incidunt attollo soleo nesciunt ultra tubineus urbanus.\nAdmoneo torrens delibero arcesso.',
                createdAtDate: '2024-01-29',
                completedAtDate: '',
                priority: {
                    value: 'low',
                    name: 'Laag',
                },
            },
            {
                id: 10,
                name: 'alius cena tertius',
                description:
                    'Adaugeo possimus color vitae.\nCharisma asperiores centum stultus contego.\nCaelestis acsi comedo audio caput.\nTribuo vulariter earum territo adulatio.',
                createdAtDate: '2024-03-15',
                completedAtDate: '',
                priority: {
                    value: 'high',
                    name: 'Hoog',
                },
            },
        ];
        return { todos };
    }
}
