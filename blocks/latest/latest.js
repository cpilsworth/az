

export default async function decorate(block) {
    const section = block.innerText.trim() || '/query-index.json';
    block.innerText = '';
    const { data } = await fetch(section).then(response => response.json())
    const list = document.createElement('ul');
    for (const result of data) {
        const item = document.createElement('li');
        const a = document.createElement('a');
        a.href = result.path;
        a.textContent = result.title;
        item.appendChild(a);
        list.appendChild(item);
    }
    block.appendChild(list);
}