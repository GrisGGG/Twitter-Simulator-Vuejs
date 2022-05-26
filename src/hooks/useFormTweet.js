//Este no es un fichero de vue, es uno de js

// función ref, para tener una variable que este pendiente del cambio
// Así cuando sufre un cambio se lo notifique a los componentes 
// y cambie sus valores
import {ref} from "vue";

export default function useFormTweet(){
    const showForm = ref(false);
    
    const openCloseForm = () => {
        showForm.value = !showForm.value;
    };

    return{
        showForm,
        openCloseForm
    }
}