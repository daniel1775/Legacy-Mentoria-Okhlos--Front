const initialState = {
    value: 0,
  }
  
const increment= (state) => {
    
    state.value += 1
}

const decrement= (state) => {
    state.value -= 1
}

const incrementByAmount= (state, action) => {
    state.value += action.payload
}