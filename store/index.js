export const state = () => ({
    fooddata : [],
    cart: []
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    updateFoodData: (state, data) => {
        state.fooddata = data
    },
    addToCart: (state,formOutput) => {
      state.cart.push(formOutput)
    }
}

export const actions = {
    // updateActionValue({ commit }) {
    //     commit('updateValue', payload)
    // }
    async getFoodData({
      state,
      commit
    }){
      if(state.fooddata.length) return
      try{
        await fetch('https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants', 
          {
            headers:{
              'Content-Type' : 'application/json',
              'x-api-key': process.env.AWS_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
          console.log('data', data);
          commit('updateFoodData', data)
        })
      } catch (err){
        console.log('err', err);
      }
    }
}