// === FOTO DE PERFIL ===
const profileImg = document.getElementById('profile');
profileImg.src = 'https://i.pravatar.cc/150?img=12';
profileImg.alt = 'Usuário Exemplo';

// === ADIÇÃO DE PROJETOS ===
const addProjectBtn = document.getElementById('add-project');
const projectsList = document.getElementById('projects-list');

addProjectBtn.addEventListener('click', () => {
    const nome = prompt('Digite o nome do novo projeto:');
    if (nome) {
        const item = document.createElement('div');
        item.classList.add('item');

        // nome do projeto visível e clicável
        const nomeEl = document.createElement('strong');
        nomeEl.textContent = nome;
        nomeEl.classList.add('project-name');
        nomeEl.style.cursor = 'pointer';

        // botão de excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Excluir';

        // evento de clique no nome do projeto
        nomeEl.addEventListener('click', () => {
            const urlNome = encodeURIComponent(nome);
            window.location.href = `projeto.html?nome=${urlNome}`;
        });

        // adiciona tudo ao item
        item.appendChild(nomeEl);
        item.appendChild(deleteBtn);
        projectsList.appendChild(item);

        updateEmptyMessage(projectsList, 'Nenhum projeto adicionado ainda.');
    }
});

// === ADIÇÃO DE EQUIPES ===
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

// === EXCLUSÃO DE ITENS ===
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        updateEmptyMessage(projectsList, 'Nenhum projeto adicionado ainda.');
        updateEmptyMessage(teamsList, 'Nenhuma equipe adicionada ainda.');
    }
});

// === MENSAGEM AUTOMÁTICA QUANDO LISTA FICA VAZIA ===
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

// === ÍCONES DOS BOTÕES ===
document.querySelectorAll('.important img').forEach((img) => {
    img.src = 'https://img.icons8.com/ios-filled/50/ffffff/plus-math.png';
    img.alt = 'Adicionar';
});


