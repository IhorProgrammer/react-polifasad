export default function APIGetFilters() {
    return [
        {
            name: "type_home",
            label: "За видом",
            options: [ 
                {label: "Багатоповерхівка", id: 1},
                {label: "Приватні будинки", id: 2},
            ]
        },
    ]
}  