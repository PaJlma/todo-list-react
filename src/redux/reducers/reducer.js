import actions from './actions';
import getTime from './../scripts/getTime';

const { 
    ADD_NEW_TASK, 
    INPUT_MUTATION_OBSERVER, 
    TEXTAREA_MUTATION_OBSERVER, 
    CLEAR_ALL_THE_TASKS,
    SELECT_TASK,
} = actions;

localStorage[Symbol.iterator] = function*() {
    for (let task of Object.values(localStorage)) {
        yield JSON.parse(task);
    };
}

const initialState = {
    tasks: [...localStorage],
    selectedTask: null,
    inputText: "",
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NEW_TASK:
            if (state.inputText === "") return state;
            if (state.inputText.length > 30) {
                alert('Title is so big (>30 symbols)');
                state.inputText = "";
                return state;
            };
            
            const newTask = {
                id: Math.floor(Math.random() * 1000000) ,
                title: state.inputText,
                time: getTime(),
                text: '',
            };
            localStorage.setItem(newTask.id, JSON.stringify(newTask));
            state.tasks.push(newTask);
            state.inputText = "";
            return state;

        case CLEAR_ALL_THE_TASKS:
            if (!window.confirm("Delete All The Tasks?")) return state;
            localStorage.clear();
            state.tasks =  [...localStorage];
            state.selectedTask = ""
            return state;

        case INPUT_MUTATION_OBSERVER:
            state.inputText = action.text;
            return state;

        case TEXTAREA_MUTATION_OBSERVER:
            if (state.selectedTask === null) return state
            state.selectedTask.text = action.text;
            localStorage.setItem(state.selectedTask.id, JSON.stringify(state.selectedTask));
            return state;

        case SELECT_TASK:
            const selectedTaskID = action.id;
            state.selectedTask = state.tasks.find(task => task.id === +selectedTaskID);
            console.log(state.selectedTask);
            return state;

        default:
            return state;
    };
}

export default reducer;