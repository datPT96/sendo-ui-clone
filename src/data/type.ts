export interface CategoryInfo {
    id: number,
    level: number,
    name: string,
    url_path: string
    sub_category: CategoryInfo[]
}
