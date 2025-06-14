// my repository fetch link = https://github.com/3DMystic?tab=repositories
const sections = document.getElementsByClassName("section");
const hTwo = document.querySelector('h2');

async function fetchRepoProjects() {
    try{
        const response = await fetch("https://api.github.com/users/3DMystic/repos");
        const fetchedData = await response.json();

        const targetRepos = ['LeafyBites', '3DmysticWebpage', 'the-quote-card-express']
        const myTopRepos = fetchedData.filter((repo) => targetRepos.includes(repo.name));

        myTopRepos.forEach((repo, index) => {
            const repoName = repo.name
                const title = document.createElement('h2');
                title.innerHTML = repoName;

                const description = document.createElement("p");
                description.innerHTML = repo.description || "No Description"

                const url = document.createElement("a");
                url.setAttribute('href', repo.html_url);
                url.setAttribute('target', "_blank")
                url.innerHTML = `Link to: ${repo.name}`

            const section = sections[index];
            if (section) {
                section.appendChild(title);
                section.appendChild(description);
                section.appendChild(url);
            }
        })
    } catch (error) {
        console.error(error);
    }
}

fetchRepoProjects();

