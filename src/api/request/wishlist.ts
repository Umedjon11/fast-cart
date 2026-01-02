

export const GetWishList = () => {
    const wish =  localStorage.getItem("wish")
    if (wish) {
        return JSON.parse(wish)
    }
    return wish
}

export const AddToWish = (prod: any) => {
    const wish = localStorage.getItem("wish")

    if (wish) {
        const MyWish = JSON.parse(wish)
        localStorage.setItem("wish", JSON.stringify([...MyWish, prod]))
    }
    else {
        localStorage.setItem("wish", JSON.stringify([prod]))
    }
}

export const RemoveFromWish = (id: number) => {
    const wish = localStorage.getItem("wish")

    if (wish) {
        const MyWish = JSON.parse(wish)
        const newWish = MyWish.filter((prod: any) => prod.id != id)

        localStorage.setItem("wish", JSON.stringify(newWish))
    }
}

export const SetNewWihList = () => {
    localStorage.setItem("wish", JSON.stringify([]))
}