import { ADD_BUCKET, LIST_BUCKET, REDUCE_BUCKET, REMOVE_BUCKET } from "./TypeBucker"
import update from 'react-addons-update';
const initialState = {
    amount: 0,
    listBucket: [
        {
            image: "https://picsum.photos/318/180",
            description: "SHIRT BLUE",
            title: "Blue denim shirt",
            color: "Blue",
            size: "M",
            price: 334,
            totalGoods: 1
        },
        {
            image: "https://picsum.photos/318/180",
            description: "SHIRT BLACK",
            title: "Black denim shirt",
            color: "Black",
            size: "M",
            price: 10,
            totalGoods: 2
        }
    ]
}

function bucket(state = initialState, action) {

    switch (action.type) {
        case ADD_BUCKET:
            let index = parseInt(action.payload.index)

            return update(state, {
                listBucket: {
                    [index]: {
                        totalGoods: { $set: state.listBucket[index].totalGoods + 1 }
                    }
                }
            });
        case REDUCE_BUCKET:
            let idx = parseInt(action.payload.index)
            return update(state, {
                listBucket: {
                    [idx]: {
                        totalGoods: { $set: state.listBucket[idx].totalGoods - 1 }
                    }
                }
            });
        case LIST_BUCKET:
            return {
                ...state,
                listBucket: state.listBucket
            }
        case REMOVE_BUCKET:
            return update(state, {
                listBucket: {
                    [action.payload.index]: {
                        totalGoods: { $set: 0 }
                    }
                }
            });
        default:
            return state
    }
}

export default bucket