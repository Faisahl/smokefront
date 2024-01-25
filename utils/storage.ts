// change this any when you make the carttype
export const setSS = (key:string, items:any) => {
    if(typeof window !== 'undefined'){
        const jsonCart = JSON.stringify(items);
        sessionStorage.setItem(key, jsonCart);
    }
}

export const getSS = (key:string) => {
    if(typeof window !== 'undefined'){
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    return null;
}