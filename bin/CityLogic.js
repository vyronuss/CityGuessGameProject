class CityLogic {
    constructor() {}

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array; // Return the shuffled array
    }

    async getfilelogic(file) {
        const list = [];

        try {
            const response = await fetch(file);
            const data = await response.text();
            const lines = data.split('\n');

            lines.forEach(line => {
                list.push(line.toLowerCase());
            });
        } catch (error) {
            console.error(error);
        }

         this.shuffleArray(list);

        const randomcityarraylist = list[0];

        // Check if randomcityarraylist is defined before splitting
        if (randomcityarraylist) {
            const splitrandomcity = randomcityarraylist.split(',');

            const formattedArray = [];
            for (let i = 0; i < splitrandomcity.length; i++) {
                formattedArray.push(splitrandomcity[i]);
            }

            formattedArray.splice(3, 1);

      
            console.log(formattedArray);

            return formattedArray;
        }

        return [];
    }

    getcity(thingy1) {
        return thingy1[0];
    }

    getprovince(thingy1) {
        return thingy1[2];
    }

    getcountry(thingy1) {
        return thingy1[1];
    }
}
