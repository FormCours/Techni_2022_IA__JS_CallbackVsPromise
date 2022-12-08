const addition = (nb1, nb2, callback) => {
    setTimeout(() => {
        const result = nb1 + nb2;
        console.log('Add');

        if(callback) {
            callback(result);
        }
    }, 200);
}

const soustraction = (nb1, nb2, cb) => {
    setTimeout(() => {
        const result = nb1 - nb2;
        console.log('Sous');

        if(cb) {
            cb(result);
        }
    }, 100);
}

const multi2 = (nb, cb) => {
    setTimeout(() => {
        const result = nb * 2;
        console.log('Multi');

        if(cb) {
            cb(result);
        }
    }, 300);
}

const division = (nb1, nb2, callback) => {
    setTimeout(() => {

        if(nb2 === 0) {
            callback(new Error('Division par zero'));
            return;
        }

        console.log('Div');
        const result = nb1 / nb2;
        callback(null, result);


    }, 2)
}

// 40 + 2 
addition(40, 2, (data) => {
    console.log('Result1', data);
});

// 13 / 2
division(13, 2, (error, resultat) => {
    if(error) {
        console.log('Error : ', error.message);
        return;
    }

    console.log('Result2', resultat);
})

// (((13 - 7) / 2) + 5) * 2
soustraction(13, 7, (res1) => {
    division(res1, 2, (error, res2) => {
        if(error) {
            console.log('Error : ', error.message);
            return;
        }
        addition(res2, 5, (res3) => {
            multi2(res3, (res4) => {
                console.log('Result3', res4);
            })
        })
    })
})