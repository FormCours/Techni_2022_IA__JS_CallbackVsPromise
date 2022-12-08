// Définition des méthodes via Promesse
const addition = (nb1, nb2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = nb1 + nb2;
            console.log('Add');

            resolve(result);
        }, 200);

    });
};

const soustraction = (nb1, nb2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = nb1 - nb2;
            console.log('Sous');

            resolve(result);
        }, 100);
    });
};

const multi2 = (nb) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = nb * 2;
            console.log('Multi');

            resolve(result);
        }, 300);
    });
};

const division = (nb1, nb2) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (nb2 === 0) {
                reject(new Error('Division par zero'));
                return;
            }

            console.log('Div');
            const result = nb1 / nb2;
            resolve(result);
        }, 2);
    });
};

// Utilisation des promesses
// *************************

// 40 + 2
addition(40, 2)
    .then(res => {
        console.log("Result1", res);
    });

// 13 / 2
division(13, 0)
    .then(res => {
        console.log("Result2", res);
    })
    .catch(error => {
        console.log('Error : ', error.message);
    });

// (((13 - 7) / 2) + 5) * 2
soustraction(13, 7)
    .then(res1 => division(res1, 2))
    .then(res2 => addition(res2, 5))
    .then(multi2)      // .then(res3 => multi2(res3))
    .then(res4 => {
        console.log("Result3", res4);
    })
    .catch(error => {
        console.log('Error : ', error.message);
    });


// Utilisation des async/await (=> Necessite des promesses !!!!)
// ***************************

const calc = async () => {

    // (((13 - 7) / 2) + 5) * 2
    try {
        const res1 = await soustraction(13, 7);
        const res2 = await division(res1, 2);
        const res3 = await addition(res2, 5);
        const res4 = await multi2(res3);

        console.log("Result3 (async/await)", res4);
    }
    catch (error) {
        console.log('Error : ', error.message);
    }
};
calc();