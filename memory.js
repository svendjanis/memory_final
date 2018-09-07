window.onload = () => {


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    const deckEl = document.querySelector('.deck');
    const myDeck = [
        'fa-basketball-ball' ,
        'fa-bowling-ball',
        'fa-dumbbell',
        'fa-football-ball',
        'fa-futbol',
        'fa-golf-ball',
        'fa-quidditch',
        'fa-table-tennis',
        'fa-hockey-puck',
        'fa-volleyball-ball',
    ];
    const shuffledDeck = shuffle(myDeck.concat(myDeck));
    let collectionArray = [];
    let moves = 0;
    let pokusaji = 4;
    const timeGoes = document.querySelector('.time');
    let seconds = 0;
    let  minutes = 0, t;
    let star= 3;




    

    // /**
    //  * Provrtiti sve stavke u shuffledDeck
    //  */
    for(let i = 0; i < shuffledDeck.length; i += 1) {

        // /**
        //  * Ubaciti svaki item u deckEl blok
        //  */
        const currentElement = document.createElement('div');
        currentElement.innerHTML = `<i class="fas ${shuffledDeck[i]}"></i>  <span class="close"> </span>`;
        const restartGame = document.createElement('again');


        deckEl.appendChild(currentElement);

        /**
         * Dodati listener
         */

        function onClick() {
            // /**
            //  * Funkcionalnost za dodavanje/micanje klase
            //  */
            currentElement.classList.add('close');



            /**
             * 1. Punis neki array
             */
            collectionArray.push(currentElement);

            /**
             * 2. Pogledas ima li array 2 clana
             */

            /**
             * 3. Ako se clanovi slazu maknuti listener sa oba clana
             */

            /**
             * 4. Isprazniti array ako ima 2 clana
             */


            if (collectionArray.length === 2) {

                const first = collectionArray[0].querySelector('i');
                const two = collectionArray[1].querySelector('i');

                /**
                 * Selectati i iz oba elementa (querySelector) i pogledati imaju li iste klase
                 * ako imaju iste klase maknuti listener (removeEventListener) sa oba elementa
                 */

                console.log(first, two);

                if(first.className === two.className) {
                    console.log(collectionArray[0]);
                    collectionArray[0].classList.add('matched');
                    collectionArray[1].classList.add('matched');
                    collectionArray = [];
                } else {
                    console.log(collectionArray[0]);
                    setTimeout(function(){
                        collectionArray[0].classList.remove('close');
                        collectionArray[1].classList.remove('close');
                        collectionArray = [];
                        moves++;
                        document.querySelector('.moves').innerHTML = moves;
                    }, 500);
                }

            }
            if (moves !== 0 &&  (moves % 6) === 0) {
                document.querySelector('.star:not(.used)').classList.add('used');
                star--
            }
            if (!document.querySelector('.deck div:not(.matched)'))
                alert('You won with '+( star    ) + '\xa0' + 'stars and ' + '\xa0'  + (      minutes     ) + '\xa0'+ (     seconds)  + '\xa0' + '  minutes and seconds')


        }
        currentElement.addEventListener('click', onClick)
    }
    function adding() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        timeGoes.innerHTML = `${minutes}:${seconds}`

    }
    t = setInterval(adding, 1000);


};
