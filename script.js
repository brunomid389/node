const addProjectBtn = document.getElementById('add-project');
const projectsList = document.getElementById('projects-list');

addProjectBtn.addEventListener('click', () => {
    const nome = prompt('Digite o nome do novo projeto:');
    if (nome) {
        const item = document.createElement('div');
        item.classList.add('item');

        const nomeEl = document.createElement('strong');
        nomeEl.textContent = nome;
        nomeEl.classList.add('project-name');
        nomeEl.style.cursor = 'pointer';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Excluir';

        nomeEl.addEventListener('click', () => {
            const urlNome = encodeURIComponent(nome);
            window.location.href = `projeto.html?nome=${urlNome}`;
        });

        item.appendChild(nomeEl);
        item.appendChild(deleteBtn);
        projectsList.appendChild(item);

        updateEmptyMessage(projectsList, 'Nenhum projeto adicionado ainda.');
    }
});

const addTeamBtn = document.getElementById('add-team');
const teamsList = document.getElementById('teams-list');

addTeamBtn.addEventListener('click', () => {
    const nome = prompt('Digite o nome da nova equipe:');
    if (nome) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `<strong>${nome}</strong> <button class="delete">Excluir</button>`;
        teamsList.appendChild(item);
        updateEmptyMessage(teamsList, 'Nenhuma equipe adicionada ainda.');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        updateEmptyMessage(projectsList, 'Nenhum projeto adicionado ainda.');
        updateEmptyMessage(teamsList, 'Nenhuma equipe adicionada ainda.');
    }
});

function updateEmptyMessage(list, emptyText) {
    if (list.children.length === 0) {
        const msg = document.createElement('p');
        msg.textContent = emptyText;
        list.appendChild(msg);
    } else {
        const msgs = list.querySelectorAll('p');
        msgs.forEach(m => m.remove());
    }
}

document.querySelectorAll('.important img').forEach((img) => {
    img.src = 'https://img.icons8.com/ios-filled/50/ffffff/plus-math.png';
    img.alt = 'Adicionar';
});



