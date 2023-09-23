let printArray =[];
let stackArray = [];
let route = ['Pueblo Origen', 'Pueblo 1','Pueblo 2', 'Destino'];
let containers = [];

function pilas(array,number) {
    let i = 0
    while(i < number){
        printArray.push(array[i]);
        i++;
    }
    console.log(printArray);
}
pilas(['manzana','pera','sandia','durazno','platano','mango'],3);

function replace(stackReplace,newNum,oldNum){
     for(let x in stackReplace){
        stackArray.push(stackReplace[x]);
     }    
     for(x in stackReplace){
        let lastValue = stackArray.pop();
        if(lastValue == oldNum){
            stackArray.push(newNum);
            console.log(stackArray);
            break;
        }
     } 

}
replace([0,5,0,7,1,9,9,7],8,9);

function travel(distance){
    let c = 0;
    for (let x in distance){
        //console.log(`${distance[x]} →`);
        c++;
    }
    console.log(`Recorrido: ${distance}`);
    console.log('Regreso: ');
    while(c != 0){
        console.log(`${distance.pop()}  → `);
        c--;
    }
}
travel(route);

function warehouse(stock,toTake){
    let itemTaken = null;
    let newStack = [];
    let arrayToPop = [];
    c = 1;
    s = false;
    for(let x in stock){
        arrayToPop.push(stock[x]);
    }

    for(let x in stock){
        if(stock[x] == toTake){
            itemTaken = stock[x];
            newStack = stock.slice(c);
            while(s == false){
                let popElement = arrayToPop.pop();
                if(popElement == itemTaken){
                    s = true;
                }
            }
            //console.log(stock.indexOf(itemTaken));

        }
        c++;

    }
    console.log(`El contenedor retirado es: ${itemTaken}`);
    console.log(`El nuevo orden de contenedores es: ${arrayToPop.concat(newStack)}`);

}
warehouse(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',],'Item 2');