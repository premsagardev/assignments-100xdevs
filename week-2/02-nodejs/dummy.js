let items = [
    {
        "id": 83182,
        "title": "check get",
        "description": "see if get by id req works fine"
    },
    {
        "id": 65135,
        "title": "check get",
        "description": "see if get by id req works fine"
    },
    {
        "id": 3689,
        "title": "check get",
        "description": "see if get by id req works fine"
    },
    {
        "id": 24829,
        "title": "check get",
        "description": "see if get by id req works fine"
    },
    {
        "id": 47509,
        "title": "check get",
        "description": "see if get by id req works fine"
    }
];

let reqId = 24829;
const item = items.find(item => item.id === parseInt(reqId));
const temp = items.filter(i =>i !== item);
items = temp;

console.log(
    items
)