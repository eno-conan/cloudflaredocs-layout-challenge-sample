
// /queues/examples ：このパス情報を利用して、上の配列を作るような関数を作りたい
export function createPathHierarchyList(path: string) {
    const pathHierarchyList = [{ label: 'Nextjs', path: "/" }]
    const pathArray = path.split("/")
    let concatPath = ''
    for (const p of pathArray) {
        if (p === '') {
            continue
        } else {
            concatPath = concatPath + '/' + p
            pathHierarchyList.push({ label: p, path: concatPath })
        }
    }
    return pathHierarchyList
}