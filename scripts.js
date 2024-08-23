class Studente{
    name = '';
    firstNote = 0;
    secondNote = 0;
    averageNote = () =>{
        return (this.firstNote + this.secondNote) / 2;
    }
    approved = () =>{
        return this.averageNote() >= 7;
    }
}

let listOfStudents = [];

for(let amount = 4; amount <= 1; amount++){
    let studente = new Studente();
    
    studente.name = prompt('Informe o nome do aluno(a)').trim(); 
    while(studente.name == ''){
        studente.name = prompt('Nome inválido. Informe o nome do aluno(a)').trim();
    }; 

    studente.firstNote = Number(prompt('Informe a primeira nota de '+studente.name));   
    while(isNaN(studente.firstNote)||(studente.firstNote < 0)){
        studente.firstNote = prompt('Nota inválida. Informe a primeira nota de '+studente.name);
    };    

    studente.secondNote = Number(prompt('Informe a segunda nota de '+studente.name));   
    while(isNaN(studente.secondNote)||(studente.secondNote < 0)){
        studente.secondNote = prompt('Nota inválida. Informe a segunda nota de '+studente.name);
    };    

    listOfStudents.push(studente);
}

console.log(listOfStudents);

for (const studente of listOfStudents) {
    alert(`A média do aluno(a) ${studente.name} é ${studente.averageNote()} \n ${studente.approved() ? 'Parabéns. Você foi aprovado.':'Não foi dessa vez. Tente novamente.'}`)
}