
const BACKEND_URL = 'https://******.com/api/sonneko.github.io/';

type getDataProps = {
    type: 'blog/' | 'news/' | 'comment'
    id: number
}

async function getData(dataType: getDataProps) {
    return await fetch(BACKEND_URL + dataType.type + dataType.id).then(res => res.json);
}

export default getData;