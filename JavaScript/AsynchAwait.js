// asynch await

// const response = await fetch('https://api.github.com/users');
// const data = await response.json();
// console.log(data);

// using await so that the promise resolve or reject then proceed to next line
// but only awais freeze all other task that are not dependent on them
// solution is to make is asynch task in asynch function

async function github() {
    // to handle errors for asynch await we use try catch

    try{

        const response = await fetch('https://api.github.com/users');

        // sometime resolve promise are not expected so throw your new error

        if(!response.ok){
            throw new Error("Data not present");
        }
        const data = await response.json();
        console.log(data);


    }catch(err){
        console.log(err)
    }
}

github();

// now here you can perform other task until promise resolved in asynch function

// sometime we are suppose to request multiple fetch request each independent so we can do

async function userDetail() {
    
    const [comments,likes,photos] = await Promise.all([fetch("comentApiUrl"),fetch("likesApiUrl"),fetch("photosApiUrt")]);
}