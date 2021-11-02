const container = document.querySelector('.griglia');

init(100);



function init(tot){
    for(let i = 0; i < tot; i++){
        const sq = createSquare(container);
    }
    
}

function createSquare(target){
    const sq = document.createElement('div');
    sq.classList.add('box');
    target.append(sq);
    return sq;
}