
const username = 'luwarnava';

async function getGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Erro ao buscar dados');
        
        const data = await response.json();
        
        document.querySelector('.profile-name').textContent = data.name;
        document.querySelector('.profile-username').textContent = `@${data.login}`;
        document.querySelector('.profile-avatar').src = data.avatar_url;
        document.querySelectorAll('.numbers-item h4')[0].nextSibling.textContent = data.public_repos;
        document.querySelectorAll('.numbers-item h4')[1].nextSibling.textContent = data.followers;
        document.querySelectorAll('.numbers-item h4')[2].nextSibling.textContent = data.following;
        document.querySelector('.profile-link').href = data.html_url;
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
    }
}

// Chama a função ao carregar a página
window.onload = getGitHubProfile;