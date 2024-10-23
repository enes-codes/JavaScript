
     function walkDog(){
        return new Promise((resolve, reject) => {

            const dogWalked = true;

            setTimeout(() => {
                if (dogWalked) {
                    resolve("You walk the dog 🐕");
                } else {
                    reject("You didn't walk the dog")
                }
            },1500);
           
        });
    }

    function cleanKitchen(){
        return new Promise((resolve, reject) => {

            const kitchenCleaned = true;

            setTimeout(() => {
                if (kitchenCleaned) {
                    resolve("You walk the dog 🧹");
                } else {
                    reject("You didn't clean the kitchen")
                }
            },2500);
           
        });
    }

    function takeOutTrash(){
        return new Promise((resolve, reject) => {

            const trashTakenOut = true;

            setTimeout(() => {
                if (trashTakenOut) {
                    resolve("You walk the trash ♻");
                } else {
                    reject("You didn't take out the trash")
                }
            },500);
           
        });
    }
    
    async function doChores(){

        try {
            const walkDogResult = await walkDog();
            console.log(walkDogResult);

            const cleanKitchenResult = await cleanKitchen();
            console.log(cleanKitchenResult);

            const takeOutTrashResult = await takeOutTrash();
            console.log(takeOutTrashResult);
        } catch (error) {
            console.error(error);
        }
        
    }

    doChores();