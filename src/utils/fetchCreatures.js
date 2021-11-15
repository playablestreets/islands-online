const apiEndPoint = 'https://playable-web.cdn.prismic.io/api/v2';

const queryRef = async (page) => {
    const response = await fetch(page)
    const data = await response.json()

    if (data?.next_page) {
        return queryRef(data?.next_page)
    } else {
        return data?.results
    }
}

const getCreatures = async (refs) => {
    if (!refs) return null

    const res = await refs.reduce(async (acc, ref) => {
        if (ref.isMasterRef) {
            const masterRef = ref.ref;
            const typeQuery = "islands"

            let predicates = `[[at(document.type,"${typeQuery}")]]`;
            let queryEndPoint = apiEndPoint + '/documents/search?ref=' + masterRef + '&q=' + predicates + '&pageSize=100';

            const res = await queryRef(queryEndPoint);
            return [...acc, ...res]
        } else {
            return acc
        }
    }, []);

    return res
}

const getCreature = (creatures, creature) => creatures.filter(c => c.uid == creature)

const selectRandom = (creatures, amount = 9, creature) => {
    const res = [];
    const count = creature ? amount - 1 : amount

    for (let i = 0; i < count;) {
        const random = Math.floor(Math.random() * creatures.length);
        if (res.indexOf(creatures[random]) !== -1) {
            continue;
        };
        res.push(creatures[random]);
        i++;
    };
    return res;
}

export default async (setState, creature) => {
    const response = await fetch(apiEndPoint)
    const data = await response.json()
    const creatures = await getCreatures(data?.refs)
    const creatureSet = [...(creature ? getCreature(creatures, creature) : []), ...selectRandom(creatures, 9, creature)]

    setState(creatureSet)
}