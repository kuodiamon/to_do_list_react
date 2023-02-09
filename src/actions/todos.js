import * as types from './ActionTypes';

export function addTask(taskName){
    return {
        type: types.ADD_TASK,
        taskName
    };
}

export function deleteTask(idx){
    return {
        type: types.DELETE_TASK,
        idx
    };
}