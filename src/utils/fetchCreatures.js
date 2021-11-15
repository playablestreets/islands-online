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

export default async (setState) => {
    const response = await fetch(apiEndPoint)
    const data = await response.json()
    const creatures = await getCreatures(data?.refs)
    setState(creatures)
}