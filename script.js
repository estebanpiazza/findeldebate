document.getElementById('toggleListButton').addEventListener('click', function() {
    const animalList = document.getElementById('animalList');
    if (animalList.classList.contains('hidden')) {
        animalList.classList.remove('hidden');
    } else {
        animalList.classList.add('hidden');
    }
});

document.getElementById('combatForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const martialArts = document.getElementById('martialArts').value;

    let score = weight + height;
    if (martialArts === 'yes') {
        score += 50;
    }
    if (gender === 'male') {
        score += 20;
    }

    const animals = [
        'Rata', 'Conejo', 'Gato', 'Zorro', 'Perro pequeño', 'Coyote', 'Lobo', 'Jaguar', 'León', 'Tigre',
        'Oso negro', 'Gorila', 'Oso pardo', 'Oso polar'
    ];

    const thresholds = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];

    let animalIndex = 0;
    for (let i = 0; i < thresholds.length; i++) {
        if (score > thresholds[i]) {
            animalIndex = i;
        } else {
            break;
        }
    }

    const resultAnimal = animals[animalIndex];
    const previousAnimal = animalIndex > 0 ? animals[animalIndex - 1] : '';
    const nextAnimal = animalIndex < animals.length - 1 ? animals[animalIndex + 1] : '';

    document.getElementById('animal').textContent = resultAnimal;
    document.getElementById('previousAnimal').textContent = previousAnimal;
    document.getElementById('nextAnimal').textContent = nextAnimal;
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('planeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pilotKnowledge = document.getElementById('pilotKnowledge').value;
    const result = pilotKnowledge === 'yes' ? 'Serías capaz de aterrizar un avión.' : 'No serías capaz de aterrizar un avión.';

    document.getElementById('planeAbility').textContent = result;
    document.getElementById('planeResult').classList.remove('hidden');
});
