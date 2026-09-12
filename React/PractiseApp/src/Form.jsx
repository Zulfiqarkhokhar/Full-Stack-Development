import { useForm } from "react-hook-form"

const Form = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    function formSubmit(data){
        console.log(data);
    }

    console.log("Render")


  return (
    <div>
        <h1>React Hook Form</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <label htmlFor="first">Name :</label>
                <input type="text" {...register("name",{
                    required:"Name should not be empty"
                })}/>
                {
                    errors.name && <span>{errors.name.message}</span>
                }
            </div>
            <div>
                <label htmlFor="second">Age :</label>
                <input type="number" {...register("age",{
                    min:{
                        value:10,
                        message:"Age should be greater than 9"
                    },
                    max:{
                        value:40,
                        message:"Age should be less than 41"
                    }
                })}/>
                {
                    errors.age && <span>{errors.age.message}</span>
                }
            </div>
            <div>
                <label htmlFor="third">Password :</label>
                <input type="password" {...register("password",{
                    minLength:{
                        value:8,
                        message:"Password should be more than 7 characters"
                    }
                })}/>
                {
                    errors.password && <span>{errors.password.message}</span>
                }
            </div>
            <button>Submit</button>
        </form>

    </div>
  )
}

export default Form