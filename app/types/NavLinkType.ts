export type NavLinkType = {
    name: string,
    submenu: boolean,
    sublinks: object[];
}

export type NavLinkSubType = {
    Head: string,
    sublink: object[]
}

export type NavLinkSubSubType = {
    name: string,
    link: string
}