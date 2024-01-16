const draggableElement = document.querySelectorAll(".box");
const droppableElement = document.querySelectorAll(".droppable");
let score = 0;

draggableElement.forEach(element => {
    element.addEventListener('dragstart', (drgStart) => {
        drgStart.dataTransfer.setData('text', drgStart.target.id);
        drgStart.currentTarget.classList.add('draggableFormat');
    });
});

droppableElement.forEach(element => {
    element.addEventListener('drop', (drpEvt) => {
        drpEvt.preventDefault();
        const droppedElementId = drpEvt.dataTransfer.getData('text');
        const dropZoneId = drpEvt.target.getAttribute('data-draggable-id');

        drpEvt.target.appendChild(document.getElementById(droppedElementId));
        if(droppedElementId===dropZoneId){
            //console.log('tama');
            score+=1;
            document.getElementById('remarks').innerText="You are right bro!";
            document.getElementById('scores').innerText= score

        }else{
            //console.log('mali');
            document.getElementById('remarks').innerText="You're wrong :((";
        }if(score===8){
            //console.log('tama');
            document.getElementById('remarks').innerText="You Win";
        }
        
    });

    element.addEventListener('dragover', (drgOverEvt) => {
        drgOverEvt.preventDefault();
    });
});

draggableElement.forEach(element => {
    element.addEventListener('dragend', (drgendEvt) => {
        drgendEvt.currentTarget.classList.remove('draggableFormat');
    });
});