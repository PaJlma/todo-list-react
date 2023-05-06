import actions from './actions';

const { ADD_NEW_TASK, INPUT_MUTATION_OBSERVER, TEXTAREA_MUTATION_OBSERVER } = actions;

const initialState = {
    tasks: [],
    textareaText: "",
    inputText: "",
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NEW_TASK:
            const newTask = {
                title: action.title,
                time: 'null',
                text: 'null',
            };
            state.tasks.push(newTask);
            return state;

        case INPUT_MUTATION_OBSERVER:
            state.inputText = action.text;
            return state;

        case TEXTAREA_MUTATION_OBSERVER:
            state.textareaText = action.text;
            return state;

        default:
            return state;
    };
}

export default reducer;