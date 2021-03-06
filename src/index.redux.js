const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

//reducer
export function counter(state=0,action){ //数据层->视图层
    switch(action.type){
        case '加机关枪':
                return state + 1;
        case '减机关枪' :
                return state - 1;
        default :
                return 10
    }
}


//action creator

export function addGUN(){
        return { type: ADD_GUN};
}

export function removeGUN(){
        return {type : REMOVE_GUN};
}

export function addGunAsync(){
        return dispatch=>{
                setTimeout(()=>{
                        dispatch(addGUN());
                },2000);
        }
}