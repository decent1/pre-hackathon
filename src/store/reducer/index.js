const INITIAL_STATE={
  profileUser: [],  
  DonorListCard: []
}
export default (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case "profile":
            return({
                ...state , 
                profileUser: action.payload
            })
            case "DonorList":
                return({
                    ...state ,
                    DonorListCard: action.payload
                })
    }

    return state;
}