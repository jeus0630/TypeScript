type Car = {
    color: boolean,
    model: boolean,
    price: boolean | number
}

type TypeChanger<T,S> = {
    [key in keyof T] : S
}

type NewType = TypeChanger<Car, number>;